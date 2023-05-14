import { UsersActioinsT } from 'enums';
import { FormI, UserI } from 'interfaces';

export const setUsersIsLoading = (isLoading: boolean) =>
    ({ type: UsersActioinsT.SET_LOADING, isLoading } as const);

export const setStringsSort = (sort: boolean, tableName: string) =>
    ({ type: UsersActioinsT.SET_STRING_SORT, sort, tableName } as const);

export const setNumberSort = (sort: boolean, tableName: string) =>
    ({ type: UsersActioinsT.SET_ID_SORT, sort, tableName } as const);

export const setDataSize = (size: string) =>
    ({ type: UsersActioinsT.SET_DATA_SIZE, size } as const);

export const setUsersData = (data: UserI[]) => ({ type: UsersActioinsT.SET_DATA, data } as const);

export const setUsersItem = (userId: number) =>
    ({ type: UsersActioinsT.SET_USER_ITEM, userId } as const);

export const setNewUserData = (data: FormI) =>
    ({ type: UsersActioinsT.SET_NEW_USER_DATA, data } as const);
