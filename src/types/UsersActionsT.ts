import {
    setNameSort,
    setUsersData,
    setNewUserData,
    setUsersItem,
    setLastNameSort,
    setEmailSort,
    setIdSort,
    setPhoneSort,
    setUsersIsLoading,
} from 'actions';

export type UserActionsReturnT =
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setNewUserData>
    | ReturnType<typeof setNameSort>
    | ReturnType<typeof setUsersData>
    | ReturnType<typeof setUsersItem>
    | ReturnType<typeof setLastNameSort>
    | ReturnType<typeof setEmailSort>
    | ReturnType<typeof setIdSort>
    | ReturnType<typeof setPhoneSort>;
