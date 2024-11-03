import { signInWithGoogle } from '../../services/AuthService';

const GoogleSignInButton = () => {
  const handleLogin = async () => {
    await signInWithGoogle();
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
