import { useDispatch, useSelector } from 'react-redux';

function Loader() {
  const showLoader = useSelector((store) => store.loader);

  return (
    <div
      style={{
        zIndex: 99999,
        position: 'absolute',
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        top: 0,
        left: 0,
        display: `${showLoader ? 'flex' : 'none'} `,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='spinner-grow text-warning' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
