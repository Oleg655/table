import {
    setUsersData,
    setNewUserData,
    setUsersItem,
    setUsersIsLoading,
    setStringsSort,
    setNumberSort,
    setDataSize,
} from 'actions';

export type UserActionsReturnT =
    | ReturnType<typeof setStringsSort>
    | ReturnType<typeof setNumberSort>
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setNewUserData>
    | ReturnType<typeof setUsersData>
    | ReturnType<typeof setUsersItem>
    | ReturnType<typeof setDataSize>;
