import { UserI } from './UserI';

export interface UserDataI {
    loading: boolean;
    sortName: boolean;
    sortLastName: boolean;
    sortEmail: boolean;
    sortId: boolean;
    sortPhone: boolean;
    usersData: UserI[];
    currentUser: UserI | undefined;
}
