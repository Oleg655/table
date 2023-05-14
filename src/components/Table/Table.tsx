import { useState } from 'react';

import './table.css';
import { setStringsSort, setUsersItem } from 'actions';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import SortIndicator from 'components/SortIndicator';
import UserItem from 'components/UserItem';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { UserI } from 'interfaces';

const Table = () => {
    const { loading } = useAppSelector(state => state.users);
    const { usersData } = useAppSelector(state => state.users);
    const { firstName } = useAppSelector(state => state.users);
    const { lastName } = useAppSelector(state => state.users);
    const { email } = useAppSelector(state => state.users);
    const { id } = useAppSelector(state => state.users);
    const { phone } = useAppSelector(state => state.users);
    const { page } = useAppSelector(state => state.pagination);
    const { contentPerPage } = useAppSelector(state => state.pagination);

    const dispatch = useAppDispatch();

    const [showUserItem, setShowUserItem] = useState(false);

    const indexOfLastItem = page * contentPerPage;
    const indexOfFirstItem = indexOfLastItem - contentPerPage;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

    const onToggleSortById = () => {
        dispatch(setStringsSort(!id, 'id'));
    };
    const onToggleSortByName = () => {
        dispatch(setStringsSort(!firstName, 'firstName'));
    };
    const onToggleSortByLastName = () => {
        dispatch(setStringsSort(!lastName, 'lastName'));
    };
    const onToggleSortByEmail = () => {
        dispatch(setStringsSort(!email, 'email'));
    };

    const onToggleSortByPhone = () => {
        dispatch(setStringsSort(!phone, 'phone'));
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
                            <SortIndicator isSorted={id} />
                        </th>
                        <th onClick={onToggleSortByName}>
                            firstName
                            <SortIndicator isSorted={firstName} />
                        </th>
                        <th onClick={onToggleSortByLastName}>
                            lastName
                            <SortIndicator isSorted={lastName} />
                        </th>
                        <th onClick={onToggleSortByEmail}>
                            email
                            <SortIndicator isSorted={email} />
                        </th>
                        <th onClick={onToggleSortByPhone}>
                            phone <SortIndicator isSorted={phone} />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems?.map((user: UserI) => (
                        <tr
                            onDoubleClick={() => {
                                onToggleShowUserItem(user.id);
                            }}
                            key={Math.random()}
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

            {showUserItem ? <UserItem /> : null}
            <Pagination />
        </>
    );
};

export default Table;
