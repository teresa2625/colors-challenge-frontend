import axios from 'axios';

export const fetchColors = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/colors');
    console.log("response", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching color swatches:', error);
    throw error;
  }
};

export const addColorStrategy = async (strategyData: any) => {
  try {
    const response = await axios.post('http://localhost:5000/api/strategies', strategyData);
    console.log("response", response.data.message);
    return response.data.message;
  } catch (error) {
    console.error('Error adding color strategy:', error);
    throw error;
  }
};
