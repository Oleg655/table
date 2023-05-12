import { useEffect } from 'react';

import './table.css';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getRequestUsersData } from 'thunks';

import Loader from './Loader';

const Table = () => {
    const { usersData } = useAppSelector(state => state.users);
    const loading = useAppSelector(state => state.users.loading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRequestUsersData());
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
            </thead>

            <tbody>
                {usersData?.map(user => (
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
    );
};

export default Table;
