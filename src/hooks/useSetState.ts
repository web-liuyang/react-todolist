import React, { Component, useState } from 'react';

const useSetState = <T extends object = {}>(obj: T): [T, (nVal: Partial<T>) => void] => {
  const [value, setValue] = useState<T>(obj);

  const handleSetValue = (nVal: Partial<T>): void => {
    setValue((oVal) => ({ ...oVal, ...nVal }));
  };

  return [value, handleSetValue];
};

export default useSetState;
