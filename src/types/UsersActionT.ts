import { setUsersIsLoading, setSort, setUsersData } from 'actions';

export type UserActionReturnT =
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setSort>
    | ReturnType<typeof setUsersData>;
