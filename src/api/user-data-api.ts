import { UserI } from 'interfaces';

const baseUrl = process.env.REACT_APP_BASE_URL;
const rows = '10';
const idDigits = 'number|1000';
const description = 'lorem|32';
const firstName = 'firstName';
const lastName = 'lastName';
const email = 'email';
const phone = 'phone|(xxx)xxx-xx-xx';
const address = 'addressObject';

const getUrl = (): string => {
    return `${baseUrl}?rows=${rows}&id=${idDigits}&firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&address=${address}&description=${description}`;
};

export const fetchUsersData = {
    getUserData: async (): Promise<UserI[]> => {
        const response = await fetch(getUrl(), {
            method: 'GET',
        });

        const data = await response.json();
        return data;
    },
};
