import { UserI } from 'interfaces';
import { getUrlBigData, getUrlSmallData } from 'utils';

export const fetchUsersData = {
    getUserSmallData: async (): Promise<UserI[]> => {
        const response = await fetch(getUrlSmallData(), {
            method: 'GET',
        });

        const data = await response.json();
        return data;
    },
    getUserBigData: async (): Promise<UserI[]> => {
        const response = await fetch(getUrlBigData(), {
            method: 'GET',
        });

        const data = await response.json();
        return data;
    },
};
