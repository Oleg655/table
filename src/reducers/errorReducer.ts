import { ErrorMessageType } from 'enums';
import { ErrorStateI } from 'interfaces';
import { ErrorActionsReturnT } from 'types';

const initState: ErrorStateI = {
    error: null,
};

export const errorReducer = (
    state: ErrorStateI = initState,
    action: ErrorActionsReturnT,
): ErrorStateI => {
    switch (action.type) {
        case ErrorMessageType.SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.message,
            };
        default:
            return state;
    }
};
