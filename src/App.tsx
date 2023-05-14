import React from 'react';

import './App.css';
import Form from 'components/Form';
import Loader from 'components/Loader';
import SelectSizeData from 'components/SelectSizeData';
import Table from 'components/Table/Table';
import { useAppSelector } from 'hooks/useAppSelector';

const App = () => {
    const { error } = useAppSelector(state => state.error);
    const { usersData } = useAppSelector(state => state.users);
    const { loading } = useAppSelector(state => state.users);

    if (error) {
        return <h1 className="error-mesage">{error}</h1>;
    }

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="app">
            {usersData.length ? (
                <>
                    <Form />
                    <Table />
                </>
            ) : (
                <SelectSizeData />
            )}
        </div>
    );
};

export default App;
