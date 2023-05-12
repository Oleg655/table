import { UsersActioinT } from 'enums';
import { UserI } from 'interfaces';

export const setUsersIsLoading = (isLoading: boolean) =>
    ({ type: UsersActioinT.SET_LOADING, isLoading } as const);

export const setSort = (sort: string) => ({ type: UsersActioinT.SET_SORT, sort } as const);
export const setUsersData = (data: UserI[]) => ({ type: UsersActioinT.SET_DATA, data } as const);
