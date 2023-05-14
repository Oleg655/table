import { PaginationActionsT } from 'enums';

export const setPage = (page: number) => ({ type: PaginationActionsT.SET_PAGE, page } as const);
export const setTotalElements = (number: number) =>
    ({ type: PaginationActionsT.SET_TOTAL_ELEMENTS, number } as const);
