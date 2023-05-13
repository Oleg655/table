import {
    setUsersIsLoading,
    setNameSort,
    setUsersData,
    setNewUserData,
    setUsersItem,
} from 'actions';

export type UserActionsReturnT =
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setNewUserData>
    | ReturnType<typeof setNameSort>
    | ReturnType<typeof setUsersData>
    | ReturnType<typeof setUsersItem>;
