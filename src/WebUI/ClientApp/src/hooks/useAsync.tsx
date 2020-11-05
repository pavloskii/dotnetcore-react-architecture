import * as React from "react";

const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = React.useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [value, setValue] = React.useState<T | null>(null);
  const [error, setError] = React.useState<E | null>(null);

  const execute = React.useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response: any) => {
        setValue(response);
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

  return { execute, status, value, error };
};

export { useAsync };
