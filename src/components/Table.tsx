import './table.css';

const Table = () => {
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
                <tr>
                    {/* <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td> */}
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
