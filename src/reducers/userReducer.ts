import { UserDataI } from 'interfaces';
import { UserActionReturnT } from 'types';

const initialState: UserDataI = {
    loading: false,
    usersData: [],
};

export const authReducer = (state: UserDataI = initialState, action: UserActionReturnT) => {
    switch (action.type) {
        default:
            return state;
    }
};
