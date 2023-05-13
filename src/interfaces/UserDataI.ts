import { UserI } from './UserI';

export interface UserDataI {
    loading: boolean;
    sortName: boolean;
    usersData: UserI[];
    currentUser: UserI | undefined;
}
