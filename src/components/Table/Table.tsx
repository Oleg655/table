import { useEffect, useState } from 'react';

import './table.css';

import { setNameSort, setUsersItem } from 'actions';
import Pagination from 'components/Pagination';
import UserItem from 'components/UserItem';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { UserI } from 'interfaces';
import { getRequestUsersData } from 'thunks';

import Loader from '../Loader/Loader';

const Table = () => {
    const { usersData } = useAppSelector(state => state.users);
    const { loading } = useAppSelector(state => state.users);
    const { sortName } = useAppSelector(state => state.users);
    const page = useAppSelector(state => state.pagination.page);
    const contentPerPage = useAppSelector(state => state.pagination.contentPerPage);
    const dispatch = useAppDispatch();

    const [showUserItem, setShowUserItem] = useState(false);

    useEffect(() => {
        dispatch(getRequestUsersData());
    }, []);

    if (loading) {
        return <Loader />;
    }

    const indexOfLastItem = page * contentPerPage;
    const indexOfFirstItem = indexOfLastItem - contentPerPage;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

    const onToggleSortByName = () => {
        dispatch(setNameSort(!sortName));
    };

    const onToggleShowUserItem = (userId: number) => {
        dispatch(setUsersItem(userId));
        setShowUserItem(true);
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th onClick={onToggleSortByName}>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems?.map((user: UserI) => (
                        <tr
                            onDoubleClick={() => {
                                onToggleShowUserItem(user.id);
                            }}
                            key={user.id}
                        >
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination />
            {showUserItem ? <UserItem /> : null}
        </>
    );
};

export default Table;
