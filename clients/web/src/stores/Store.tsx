import React, { createContext, ReactNode, useReducer } from 'react';
import Reducer from 'reducers/Reducer';

const initialState = { user: null };
export const Context = createContext(initialState);

const Store = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value: any = [state, dispatch];
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
