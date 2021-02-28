import { Reducer } from 'redux';
import store from './store';

const useInjectReducer = (key: string, reducer: Reducer<any, any>): void => {
  (store as any).injectReducer(key, reducer);
};

export default useInjectReducer;
