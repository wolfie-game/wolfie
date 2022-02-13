import {TRootState} from './types'

export const userAuthSelector = (state: TRootState) => state.user.auth
