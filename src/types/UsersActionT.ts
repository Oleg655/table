import { setUsersIsLoading, setDataSort } from 'actions';

export type UserActionReturnT =
    | ReturnType<typeof setUsersIsLoading>
    | ReturnType<typeof setDataSort>;
