import { UsersActioinsT } from 'enums';
import { UserI } from 'interfaces';

export const setUsersIsLoading = (isLoading: boolean) =>
    ({ type: UsersActioinsT.SET_LOADING, isLoading } as const);

export const setNameSort = (sort: boolean) =>
    ({ type: UsersActioinsT.SET_NAME_SORT, sort } as const);
export const setUsersData = (data: UserI[]) => ({ type: UsersActioinsT.SET_DATA, data } as const);
