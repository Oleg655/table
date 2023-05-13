import { UsersActioinsT } from 'enums';
import { UserDataI, UserI } from 'interfaces';
import { UserActionsReturnT } from 'types';

const initialState: UserDataI = {
    loading: false,
    sortName: false,
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
        case UsersActioinsT.SET_NAME_SORT:
            return {
                ...state,
                sortName: action.sort,
                usersData: [
                    ...state.usersData.sort((a: UserI, b: UserI) => {
                        if (a.firstName > b.firstName) {
                            return state.sortName ? 1 : -1;
                        }
                        if (a.firstName < b.firstName) {
                            return state.sortName ? -1 : 1;
                        }

                        return 0;
                    }),
                ],
            };

        default:
            return state;
    }
};
