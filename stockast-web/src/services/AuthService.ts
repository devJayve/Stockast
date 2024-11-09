import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { loginGoogleUser } from '../api/userApi';
import { UserType } from '../store/userSlice';

export const signInWithGoogle = async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const body: UserType = {
      displayName: result.user.displayName,
      email: result.user.email,
      phoneNumber: result.user.phoneNumber,
      photoURL: result.user.photoURL,
      providerId: result.providerId,
      uid: result.user.uid,
    };

    dispatch(loginGoogleUser(body));
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
