import { useEffect, useCallback } from 'react';

const useOnClickOutside = (ref, handler) => {
  const listener = useCallback(
    ({ target }) => {
      if (!ref.current || ref.current.contains(target)) return;
      handler();
    },
    [ref],
  );
  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
