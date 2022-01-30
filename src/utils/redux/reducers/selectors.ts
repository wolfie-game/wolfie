import { TRootState } from './types';

export const userAuthSelector = (state: TRootState) => state.userReducer.auth;
