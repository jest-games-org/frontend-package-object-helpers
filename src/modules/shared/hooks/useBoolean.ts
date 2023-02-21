import * as React from 'react';

export const useBoolean = (initialValue: boolean): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = React.useState<boolean>(initialValue);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  const toggle = React.useCallback(() => {
    setValue(!value);
  }, [value]);

  return [value, setTrue, setFalse, toggle];
};
