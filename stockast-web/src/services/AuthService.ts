import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { login, logout } from '../store/authSlice';

export const signInWithGoogle = async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();

    const response = await fetch(
      `${process.env.REACT_APP_BASE_API}/user/login/google`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }
    );

    if (response.ok) {
      const { uid, displayName, email, photoURL } = result.user;
      dispatch(login({ uid, displayName, email, photoURL }));

      const data = await response.json();
      const accessToken = data.accessToken;

      console.log('accessToken : ', accessToken);
      localStorage.setItem('accessToken', accessToken);
    }
  } catch (error) {
    console.error('Error Signing in with Google: ', error);
  }
};

export const signOutWithGoogle = async (dispatch) => {
  try {
    await signOut(auth);
    localStorage.removeItem('accessToken');
    dispatch(logout());
    console.log('user logged out');
  } catch (error) {
    console.error('Error Logging out with google: ', error);
  }
};

export const verifyToken = async () => {
  const token = localStorage.getItem('accessToken');

  console.log(token);

  if (!token) return false;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API}/user/verify`,
      {
        method: 'HEAD',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('verify: ', await response.body);
    return response.ok;
  } catch (error) {
    console.error('error', error);
    return false;
  }
};
