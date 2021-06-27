import {RootState} from "../store";

export const requestsCountSelector = (state: RootState): number =>  state.requests.count;

export const isLoadingSelector = (state: RootState): boolean =>  state.requests.count > 0;
