import { useEffect, useState } from 'react';

const useFetch = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: [],
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setState({ loading: false, error: false, data });
      })
      .catch((error) => setState({ loading: false, error, data: [] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export default useFetch;
