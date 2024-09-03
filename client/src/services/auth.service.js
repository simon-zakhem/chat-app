import axios from 'axios'

const signup = async (firstname, lastname, username, email, password, confirmPassword) => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/signup', {
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
      const response = await axios.post('http://localhost:5001/api/auth/logout', null, {
        withCredentials: true,
      });
  
      localStorage.removeItem("chat-user");
      return response.data;
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
};

const authService = {
    signup,
    logout,
}

export default authService;