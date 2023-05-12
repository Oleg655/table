import { setUsersIsLoading } from 'actions';
import { setUsersData } from 'actions/usersActions';
import { fetchUsersData } from 'api';
import { AppThunk } from 'store/store';

export const getRequestUsersData = (): AppThunk => async dispatch => {
    try {
        dispatch(setUsersIsLoading(true));

        const data = await fetchUsersData.getUserData();
        if (data) {
            dispatch(setUsersData(data));
        }
    } catch (error: any) {
        console.log(error);
    } finally {
        dispatch(setUsersIsLoading(false));
    }
};
