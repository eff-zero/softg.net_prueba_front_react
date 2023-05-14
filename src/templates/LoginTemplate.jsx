import Navbar from '../components/Navbar';

// eslint-disable-next-line react/prop-types
function LoginTemplate({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default LoginTemplate;
