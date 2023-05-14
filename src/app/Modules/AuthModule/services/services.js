import api from '../../../../api';

const authServices = () => {
  const login = async (data) => await api().post('login', data);
  const logout = async () => await api().post('logout');

  return { login, logout };
};

export default authServices;
