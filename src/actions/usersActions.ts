import { UsersActioinsT } from 'enums';
import { UserI } from 'interfaces';

export const setUsersIsLoading = (isLoading: boolean) =>
    ({ type: UsersActioinsT.SET_LOADING, isLoading } as const);

export const setSort = (sort: string) => ({ type: UsersActioinsT.SET_SORT, sort } as const);
export const setUsersData = (data: UserI[]) => ({ type: UsersActioinsT.SET_DATA, data } as const);
