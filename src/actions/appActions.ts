import { AppActionsT } from 'enums';

export const setAppIsLoading = (isLoading: boolean) =>
    ({ type: AppActionsT.SET_APP_LOADING, isLoading } as const);
