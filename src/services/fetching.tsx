import axios from 'axios';
import {useEffect, useState} from 'react';

axios.defaults.baseURL = 'https://dev.to/api';
const headers = {
  'Content-type': 'Application/json',
};

interface FetchingProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: null | undefined;
}

const FetchingData = ({url, method, body = null}: FetchingProps) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();

  useEffect(() => {
    let isMounthed = false;

    const fetchData = async () => {
      try {
        setLoading(true);
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
  }, [body, method, url, source.token, source]);

  return {response, error, loading};
};

export default FetchingData;
