import { useAppDispatch } from 'hooks/useAppDispatch';
import { getRequestBigUsersData, getRequestSmallUsersData } from 'thunks';
import './selectSize.css';

const SelectSizeData = () => {
    const dispatch = useAppDispatch();
    const onToggleSetSmallDataSize = () => {
        dispatch(getRequestSmallUsersData());
    };
    const onToggleSetBigDataSize = () => {
        dispatch(getRequestBigUsersData());
    };
    return (
        <div className="home">
            <button onClick={onToggleSetSmallDataSize} type="button">
                Маленький объем данных
            </button>
            <button onClick={onToggleSetBigDataSize} type="button">
                Большой объем данных
            </button>
        </div>
    );
};

export default SelectSizeData;
