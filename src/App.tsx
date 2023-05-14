import React from 'react';

import './App.css';
import Form from 'components/Form';
import Table from 'components/Table/Table';
import { useAppSelector } from 'hooks/useAppSelector';

const App = () => {
    const { error } = useAppSelector(state => state.error);

    if (error) {
        return <h1 className="error-mesage">{error}</h1>;
    }

    return (
        <div className="app">
            <Form />
            <Table />
        </div>
    );
};

export default App;
