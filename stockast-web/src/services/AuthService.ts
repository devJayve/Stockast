import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    console.log('user Info: ', result.user);
  } catch (error) {
    console.error('Error Signing in with Google: ', error);
  }
};

export const signOutWithGoogle = async () => {
  try {
    await signOut(auth);
    console.log('user logged out');
  } catch (error) {
    console.error('Error Logging out with google: ', error);
  }
};
