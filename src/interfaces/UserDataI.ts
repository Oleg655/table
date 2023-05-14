import { UserI } from './UserI';

export interface UserDataI {
    dataSize: string;
    loading: boolean;
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    id: boolean;
    phone: boolean;
    usersData: UserI[];
    currentUser: UserI | undefined;
}
