import { useEffect } from 'react';
import authFetch from '../axios/interceptor';

// const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch.get('/react-store-products');
      console.log('Printing the Response')
      console.log(resp1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
