import { UsersActioinsT } from 'enums';
import { UserDataI } from 'interfaces';
import { UserActionsReturnT } from 'types';

const initialState: UserDataI = {
    loading: false,
    usersData: [],
};

export const usersReducer = (state: UserDataI = initialState, action: UserActionsReturnT) => {
    switch (action.type) {
        case UsersActioinsT.SET_DATA:
            return {
                ...state,
                usersData: [...action.data],
            };
        case UsersActioinsT.SET_LOADING:
            return {
                ...state,
                loading: action.isLoading,
            };
        default:
            return state;
    }
};
