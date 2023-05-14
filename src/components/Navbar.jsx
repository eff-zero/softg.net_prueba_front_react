import reactLogo from '@/assets/react.svg';

function Navbar() {
  return (
    <nav className='container-fluid shadow bg-primary mb-5'>
      <div className='d-flex justify-content-between align-items-center py-3'>
        <img
          src={reactLogo}
          alt=''
          className='rounded'
          style={{ width: '4rem' }}
        />

        <h4 className='d-none d-md-block text-white fw-bold'>
          Jesus Hernandez
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
