import { PaginationActionsT } from 'enums';

export const setPage = (page: number) => ({ type: PaginationActionsT.SET_PAGE, page } as const);
