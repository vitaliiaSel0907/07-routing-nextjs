import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://notehub-api.goit.global',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export default axiosInstance;
