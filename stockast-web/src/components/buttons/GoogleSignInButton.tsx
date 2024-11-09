import { signInWithGoogle } from '../../services/AuthService';
import { useDispatch } from 'react-redux';

const GoogleSignInButton = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    await signInWithGoogle(dispatch);
  };

  return (
    <div
      onClick={handleLogin}
      className='cursor-pointer rounded-full bg-white p-3 transition duration-200 ease-in-out hover:bg-white hover:opacity-80'
    >
      <img src='/images/google_icon.png' width='40px' />
    </div>
  );
};

export default GoogleSignInButton;
