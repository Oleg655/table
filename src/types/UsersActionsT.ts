import { setUsersIsLoading, setSort, setUsersData } from 'actions';

export type UserActionsReturnT =
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setSort>
    | ReturnType<typeof setUsersData>;
