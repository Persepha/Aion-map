import { useEffect, useState } from "react";

import axios, { AxiosError } from "axios";

export function useFetch<T>(url: string): [T[], boolean, string] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<T[]>(url);

        setData(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(`Axios error - ${error.message}`);
        } else if (error instanceof Error) {
          console.log(error.message);
        } else {
          setError("Fetching data error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
}
