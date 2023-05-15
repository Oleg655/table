import { Paths } from 'enums';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import './selectSize.css';
import { getRequestBigUsersData, getRequestSmallUsersData } from 'thunks';

const SelectSizeData = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onToggleSetSmallDataSize = () => {
        dispatch(getRequestSmallUsersData());
        navigate(Paths.TABLE);
    };
    const onToggleSetBigDataSize = () => {
        dispatch(getRequestBigUsersData());
        navigate(Paths.TABLE);
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
