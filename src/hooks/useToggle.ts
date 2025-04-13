import {useCallback, useState} from 'react';

export const useToggle = (initialState = false) => {
  const [tg, setToggle] = useState<boolean>(initialState);

  const stg = useCallback(
    (bool?: boolean) => {
      if (typeof bool === 'boolean') {
        setToggle(bool);
        return;
      }

      setToggle(!tg);
    },
    [tg],
  );

  return {tg, stg};
};
