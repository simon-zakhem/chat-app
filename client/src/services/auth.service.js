import axios from 'axios'

const AXIOS_URL = 'http://localhost:5001/api/auth';

const signup = async (firstname, lastname, username, email, password, confirmPassword) => {
    try {
      const response = await axios.post(`${AXIOS_URL}/signup`, {
        firstname,
        lastname,
        username,
        email,
        password,
        confirmPassword,
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

        localStorage.setItem("chat-user", JSON.stringify(response.data));
        return response.data;

    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
};

const logout = async () => {
    try {
      const response = await axios.post(`${AXIOS_URL}/logout`, null, {
        withCredentials: true,
      });
  
      localStorage.removeItem("chat-user");
      return response.data;
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
};

const login = async (username, email, password) => {
  try {
    const response = await axios.post(`${AXIOS_URL}/login`, {
      username,
      email,
      password,
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    localStorage.setItem("chat-user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const authService = {
    signup,
    logout,
    login,
}

export default authService;