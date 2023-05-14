import api from '../../../../api';
import { getToken } from '../../../../helpers/handleLocalStorage';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const token = getToken();

async function checkAuth() {
  try {
    if (!token) return initialState;

    const response = await api().post('check-user');
    if (response.status !== 200) return initialState;

    const { data: user } = response.data;
    return { isAuthenticated: true, user };
  } catch (error) {
    return initialState;
  }
}

export default checkAuth;
