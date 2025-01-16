import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url: string, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response: any = await axios({
          url: "http://localhost:4001/" + url,
          method,
          data: body,
          headers: {
            "Content-Type": "application/json",
          },
        });

        setData(response);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [url, method, body]);

  return { data, loading, error };
};

export default useAxios;
