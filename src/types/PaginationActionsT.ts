import { setPage, setTotalElements } from 'actions';

export type PaginationActionsReturnT =
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalElements>;
