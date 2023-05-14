import { UsersActioinsT } from 'enums';
import { UserDataI, UserI } from 'interfaces';
import { UserActionsReturnT } from 'types';

const initialState: UserDataI = {
    loading: false,
    sortName: false,
    sortLastName: false,
    sortEmail: false,
    sortId: false,
    sortPhone: false,
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
        case UsersActioinsT.SET_ID_SORT:
            return {
                ...state,
                usersData: [],
            };
        case UsersActioinsT.SET_NAME_SORT:
            return {
                ...state,
                sortName: action.sort,
                usersData: [
                    ...state.usersData.sort((a: UserI, b: UserI) => {
                        if (a.firstName > b.firstName) {
                            return state.sortName ? -1 : 1;
                        }
                        if (a.firstName < b.firstName) {
                            return state.sortName ? 1 : -1;
                        }

                        return 0;
                    }),
                ],
            };
        case UsersActioinsT.SET_LASTNAME_SORT:
            return {
                ...state,
                sortLastName: action.sort,
                usersData: [
                    ...state.usersData.sort((a: UserI, b: UserI) => {
                        if (a.lastName > b.lastName) {
                            return state.sortLastName ? -1 : 1;
                        }
                        if (a.lastName < b.lastName) {
                            return state.sortLastName ? 1 : -1;
                        }

                        return 0;
                    }),
                ],
            };
        case UsersActioinsT.SET_EMAIL_SORT:
            return {
                ...state,
                sortEmail: action.sort,
                usersData: [
                    ...state.usersData.sort((a: UserI, b: UserI) => {
                        if (a.email > b.email) {
                            return state.sortEmail ? -1 : 1;
                        }
                        if (a.email < b.email) {
                            return state.sortEmail ? 1 : -1;
                        }

                        return 0;
                    }),
                ],
            };

        case UsersActioinsT.SET_NEW_USER_DATA: {
            const newUser = {
                id: +action.data.id,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                email: action.data.email,
                phone: action.data.phone,
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
