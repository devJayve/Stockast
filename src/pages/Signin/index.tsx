import GoogleSignInButton from '../../components/buttons/GoogleSignInButton';

const Signin = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='m-20'>
        <img src='/images/logo.png' alt='logo' width='400px' />
        <div className='h-0.5 w-full bg-white opacity-70'></div>
      </div>
      <GoogleSignInButton />
    </div>
  );
};

export default Signin;
