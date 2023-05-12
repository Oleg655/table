import { UsersActioinT } from 'enums';
import { UserDataI } from 'interfaces';
import { UserActionReturnT } from 'types';

const initialState: UserDataI = {
    loading: false,
    usersData: [],
};

export const usersReducer = (state: UserDataI = initialState, action: UserActionReturnT) => {
    switch (action.type) {
        case UsersActioinT.SET_DATA:
            return {
                ...state,
                usersData: [...action.data],
            };
        case UsersActioinT.SET_LOADING:
            return {
                ...state,
                loading: action.isLoading,
            };
        default:
            return state;
    }
};
