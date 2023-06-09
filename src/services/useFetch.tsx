import {useEffect, useState} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://dev.to/api/';
const headers = {
  'Content-type': 'Application/json',
};

interface useFethingProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: null;
}

const useFetching = ({url, method, body = null}: useFethingProps) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();

  useEffect(() => {
    let isMounthed = false;

    const fetchData = async () => {
      try {
        const result = await axios.request({
          url,
          method,
          headers: {...headers},
          data: body,
          cancelToken: source.token,
        });
        setResponse(result.data);
      } catch (err: any) {
        isMounthed && setError(err);
      } finally {
        isMounthed && setLoading(false);
      }
    };

    isMounthed && fetchData();

    return () => {
      isMounthed = false;
      source.cancel(`cancel req ${url}`);
    };
  }, [body, method, source]);

  return {response, error, loading};
};

export default useFetching;
