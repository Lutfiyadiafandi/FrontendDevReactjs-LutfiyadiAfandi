import axios from "axios";

export const apiRequest = async (endpoint: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API_URL}/${endpoint}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
