import { AxiosError } from "axios";
import { useState } from "react";

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      setError("");
      await callback();
    } catch (e: any) {
      console.log(e);
      if (e instanceof AxiosError) {
        setError(e.response?.data.data.message);
      } else {
        setError(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
