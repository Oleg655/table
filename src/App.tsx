import React, { useEffect } from 'react';

import './App.css';
import SelectSizeData from 'components/SelectSizeData';
import Table from 'components/Table/Table';
import { Paths } from 'enums';
import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
    const { error } = useAppSelector(state => state.error);
    const { usersData } = useAppSelector(state => state.users);
    const { filteredUser } = useAppSelector(state => state.users);
    const { page } = useAppSelector(state => state.pagination);
    const { contentPerPage } = useAppSelector(state => state.pagination);

    const navigate = useNavigate();

    useEffect(() => {
        navigate(Paths.HOME);
    }, []);

    const indexOfLastItem = page * contentPerPage;
    const indexOfFirstItem = indexOfLastItem - contentPerPage;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

    if (error) {
        return <h1 className="error-mesage">{error}</h1>;
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to={Paths.HOME} />} />
            <Route path={Paths.HOME} element={<SelectSizeData />} />
            <Route path={Paths.TABLE} element={<Table users={currentItems} />} />
            <Route path={Paths.TABLE_FILTERED} element={<Table users={filteredUser} />} />
            <Route path={'/*'} element={<h1>Page not found</h1>} />
        </Routes>
    );
};

export default App;
