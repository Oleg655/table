import { UsersActioinsT } from 'enums';
import { FormI, UserI } from 'interfaces';

export const setUsersIsLoading = (isLoading: boolean) =>
    ({ type: UsersActioinsT.SET_LOADING, isLoading } as const);
export const setNameSort = (sort: boolean) =>
    ({ type: UsersActioinsT.SET_NAME_SORT, sort } as const);
export const setLastNameSort = (sort: boolean) =>
    ({ type: UsersActioinsT.SET_LASTNAME_SORT, sort } as const);
export const setEmailSort = (sort: boolean) =>
    ({ type: UsersActioinsT.SET_EMAIL_SORT, sort } as const);
export const setIdSort = (sort: boolean) => ({ type: UsersActioinsT.SET_ID_SORT, sort } as const);
export const setPhoneSort = (sort: boolean) =>
    ({ type: UsersActioinsT.SET_PHONE_SORT, sort } as const);

export const setUsersData = (data: UserI[]) => ({ type: UsersActioinsT.SET_DATA, data } as const);
export const setUsersItem = (userId: number) =>
    ({ type: UsersActioinsT.SET_USER_ITEM, userId } as const);
export const setNewUserData = (data: FormI) =>
    ({ type: UsersActioinsT.SET_NEW_USER_DATA, data } as const);
