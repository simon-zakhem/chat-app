import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        // Assuming the token is stored in localStorage after login
        const token = localStorage.getItem("chat-user");

        const res = await axios.get("http://localhost:5001/api/users", {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your auth scheme
          },
          withCredentials: true, // If needed
        });

        setConversations(res.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized. Please log in again.");
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
