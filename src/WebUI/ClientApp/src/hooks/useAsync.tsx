import * as React from "react";

const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = React.useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<E | null>(null);

  const execute = React.useCallback(() => {
    setStatus("pending");
    setData(null);
    setError(null);

    return asyncFunction()
      .then((response: any) => {
        setData(response);
        setStatus("success");
      })
      .catch((error: any) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error, setData };
};

export { useAsync };
