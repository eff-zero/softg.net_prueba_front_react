import { Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './guards';
import { LOGIN } from './app/Modules/AuthModule/routes/route';
import LoginPage from './app/Modules/AuthModule/views/LoginPage';
import RouteNotFound from './components/RouteNotFound';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <RouteNotFound>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Home />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<LoginPage />} />
      </Route>
    </RouteNotFound>
  );
}

export default App;
