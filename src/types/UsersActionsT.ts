import { setUsersIsLoading, setNameSort, setUsersData } from 'actions';

export type UserActionsReturnT =
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setNameSort>
    | ReturnType<typeof setUsersData>;
