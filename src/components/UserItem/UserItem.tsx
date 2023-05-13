import { useAppSelector } from 'hooks/useAppSelector';
import './userItem.css';

const UserItem = () => {
    const { currentUser } = useAppSelector(state => state.users);
    return (
        <div className="information">
            <div>
                Выбран пользователь <b>{currentUser?.firstName}</b>
            </div>
            <h3>Описание:</h3>
            <p className="description"> {currentUser?.description}</p>
            <div>
                Адрес проживания: <b>{currentUser?.address.streetAddress}</b>
            </div>
            <div>
                Город: <b>{currentUser?.address.city}</b>
            </div>
            <div>
                Провинция/штат: <b>{currentUser?.address.state}</b>
            </div>
            <div>
                Индекс: <b>{currentUser?.address.zip}</b>
            </div>
        </div>
    );
};

export default UserItem;
