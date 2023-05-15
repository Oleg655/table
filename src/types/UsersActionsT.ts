import {
    setUsersData,
    setNewUserData,
    setUsersItem,
    setUsersIsLoading,
    setStringsSort,
    setNumberSort,
    setFilteredUser,
} from 'actions';

export type UserActionsReturnT =
    | ReturnType<typeof setFilteredUser>
    | ReturnType<typeof setNewUserData>
    | ReturnType<typeof setStringsSort>
    | ReturnType<typeof setNumberSort>
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setUsersData>
    | ReturnType<typeof setUsersItem>;
