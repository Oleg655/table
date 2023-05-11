import { User } from 'interfaces';

export const getUserData = async (): Promise<User[] | undefined> => {
    const response = await fetch(
        'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
        {
            method: 'GET',
            credentials: 'include',
        },
    );

    const data = await response.json();
    return data;
};
