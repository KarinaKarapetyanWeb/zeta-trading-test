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
      setError(e.response.data.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
