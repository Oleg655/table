import { PaginationActionsT } from 'enums';
import { PaginationStateI } from 'interfaces';
import { PaginationActionsReturnT } from 'types';

const initialState: PaginationStateI = {
    page: 1,
    contentPerPage: 6,
    totalElements: 100,
    pageNumberLimit: 10,
};

export const paginationReeducer = (
    state: PaginationStateI = initialState,
    action: PaginationActionsReturnT,
) => {
    switch (action.type) {
        case PaginationActionsT.SET_PAGE:
            return {
                ...state,
                page: action.page,
            };

        default:
            return state;
    }
};
