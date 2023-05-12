import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import './table.css';
import { getRequestUsersData } from 'thunks';

const Table = () => {
    const { usersData } = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRequestUsersData());
    }, []);

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
