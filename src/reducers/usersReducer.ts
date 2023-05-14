import { UsersActioinsT } from 'enums';
import { UserDataI, UserI } from 'interfaces';
import { UserActionsReturnT } from 'types';
import { radixSortById } from 'utils';

const initialState: UserDataI = {
    loading: false,
    firstName: false,
    lastName: false,
    email: false,
    id: false,
    phone: false,
    usersData: [],
    currentUser: {} as UserI,
};

export const usersReducer = (state: UserDataI = initialState, action: UserActionsReturnT) => {
    switch (action.type) {
        case UsersActioinsT.SET_LOADING:
            return {
                ...state,
                loading: action.isLoading,
            };
        case UsersActioinsT.SET_DATA:
            return {
                ...state,
                usersData: [...action.data],
            };
        case UsersActioinsT.SET_USER_ITEM:
            return {
                ...state,
                currentUser: state.usersData.find((user: UserI) => user.id === action.userId),
            };
        case UsersActioinsT.SET_STRING_SORT:
            return {
                ...state,
                [action.tableName]: action.sort,
                usersData: [
                    ...state.usersData.sort((a: UserI, b: UserI) => {
                        if ((a as any)[action.tableName] > (b as any)[action.tableName]) {
                            return (state as any)[action.tableName] ? -1 : 1;
                        }
                        if ((a as any)[action.tableName] < (b as any)[action.tableName]) {
                            return (state as any)[action.tableName] ? 1 : -1;
                        }

                        return 0;
                    }),
                ],
            };
        case UsersActioinsT.SET_NUMBER_SORT:
            return {
                ...state,
                id: action.sort,
                usersData: radixSortById([...state.usersData]),
            };
        case UsersActioinsT.SET_NEW_USER_DATA: {
            const newUser = {
                id: +action.data.id,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                email: action.data.email,
                phone: action.data.phone.padStart(13, '(').replace('-', ')'),
                address: {
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: '',
                },
                description: '',
            };

            return {
                ...state,
                usersData: [newUser, ...state.usersData],
            };
        }

        default:
            return state;
    }
};
