import { setErrorMessage } from 'actions';
import { setUsersData, setUsersIsLoading } from 'actions/usersActions';
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
        console.error(error);
        dispatch(setErrorMessage(error.message));
    } finally {
        dispatch(setUsersIsLoading(false));
    }
};
