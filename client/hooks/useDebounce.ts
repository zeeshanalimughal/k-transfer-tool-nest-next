import { useRef, useCallback, useEffect } from "react";

function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const handler = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      if (handler.current) clearTimeout(handler.current);

      handler.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (handler.current) clearTimeout(handler.current);
    };
  }, []);

  return debouncedFunction;
}

export default useDebounce;
