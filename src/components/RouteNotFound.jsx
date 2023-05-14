/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom';

function RouteNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<> 404 </>} />
    </Routes>
  );
}

export default RouteNotFound;
