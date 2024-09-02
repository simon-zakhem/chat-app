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
  
      return response.data;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
};

const authService = {
    signup,
}

export default authService;