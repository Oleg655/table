import { UsersActioinT } from 'enums';

export const setUsersIsLoading = (isLoading: boolean) =>
    ({ type: UsersActioinT.SET_LOADING, isLoading } as const);

export const setDataSort = (sort: string) => ({ type: UsersActioinT.SET_SORT, sort } as const);
