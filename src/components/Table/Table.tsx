import { useEffect, useState } from 'react';

import './table.css';
import {
    setEmailSort,
    setIdSort,
    setLastNameSort,
    setNameSort,
    setPhoneSort,
    setUsersItem,
} from 'actions';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import SortIndicator from 'components/SortIndicator';
import UserItem from 'components/UserItem';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { UserI } from 'interfaces';
import { getRequestUsersData } from 'thunks';

const Table = () => {
    const { loading } = useAppSelector(state => state.users);
    const { usersData } = useAppSelector(state => state.users);
    const { sortName } = useAppSelector(state => state.users);
    const { sortLastName } = useAppSelector(state => state.users);
    const { sortEmail } = useAppSelector(state => state.users);
    const { sortId } = useAppSelector(state => state.users);
    const { sortPhone } = useAppSelector(state => state.users);
    const { page } = useAppSelector(state => state.pagination);
    const { contentPerPage } = useAppSelector(state => state.pagination);
    const dispatch = useAppDispatch();

    const [showUserItem, setShowUserItem] = useState(false);

    useEffect(() => {
        dispatch(getRequestUsersData());
    }, []);

    const indexOfLastItem = page * contentPerPage;
    const indexOfFirstItem = indexOfLastItem - contentPerPage;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

    const onToggleSortById = () => {
        dispatch(setIdSort(!sortId));
    };
    const onToggleSortByName = () => {
        dispatch(setNameSort(!sortName));
    };
    const onToggleSortByLastName = () => {
        dispatch(setLastNameSort(!sortLastName));
    };
    const onToggleSortByEmail = () => {
        dispatch(setEmailSort(!sortEmail));
    };

    const onToggleSortByPhone = () => {
        dispatch(setPhoneSort(!sortPhone));
    };

    const onToggleShowUserItem = (userId: number) => {
        dispatch(setUsersItem(userId));
        setShowUserItem(true);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th onClick={onToggleSortById}>
                            id
                            <SortIndicator isSorted={sortId} />
                        </th>
                        <th onClick={onToggleSortByName}>
                            firstName
                            <SortIndicator isSorted={sortName} />
                        </th>
                        <th onClick={onToggleSortByLastName}>
                            lastName
                            <SortIndicator isSorted={sortLastName} />
                        </th>
                        <th onClick={onToggleSortByEmail}>
                            email
                            <SortIndicator isSorted={sortEmail} />
                        </th>
                        <th onClick={onToggleSortByPhone}>
                            phone <SortIndicator isSorted={sortPhone} />
                        </th>
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
