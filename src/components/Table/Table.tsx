import { useEffect } from 'react';

import './table.css';

import { setNameSort } from 'actions';
import Pagination from 'components/Pagination';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getRequestUsersData } from 'thunks';

import Loader from '../Loader/Loader';

const Table = () => {
    const { usersData } = useAppSelector(state => state.users);
    const loading = useAppSelector(state => state.users.loading);
    const sortName = useAppSelector(state => state.users.sortName);

    const page = useAppSelector(state => state.pagination.page);
    const contentPerPage = useAppSelector(state => state.pagination.contentPerPage);

    const dispatch = useAppDispatch();

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
                    {currentItems?.map(user => (
                        <tr key={user.id}>
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
        </>
    );
};

export default Table;
