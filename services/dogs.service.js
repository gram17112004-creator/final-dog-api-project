import axios from 'axios';

export const fetchRandomDog = async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random');
  return response.data.message;
};
