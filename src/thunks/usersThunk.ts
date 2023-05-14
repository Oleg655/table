import { setErrorMessage, setTotalElements } from 'actions';
import { setUsersData, setUsersIsLoading } from 'actions/usersActions';
import { fetchUsersData } from 'api';
import { AppThunk } from 'store/store';

export const getRequestSmallUsersData = (): AppThunk => async dispatch => {
    try {
        dispatch(setUsersIsLoading(true));

        const data = await fetchUsersData.getUserSmallData();
        if (data) {
            dispatch(setTotalElements(data.length));
            dispatch(setUsersData(data));
        }
    } catch (error: any) {
        console.error(error);
        dispatch(setErrorMessage(error.message));
    } finally {
        dispatch(setUsersIsLoading(false));
    }
};

export const getRequestBigUsersData = (): AppThunk => async dispatch => {
    try {
        dispatch(setUsersIsLoading(true));

        const data = await fetchUsersData.getUserBigData();
        if (data) {
            dispatch(setTotalElements(data.length));
            dispatch(setUsersData(data));
        }
    } catch (error: any) {
        console.error(error);
        dispatch(setErrorMessage(error.message));
    } finally {
        dispatch(setUsersIsLoading(false));
    }
};
