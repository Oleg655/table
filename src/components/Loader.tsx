import { ReactComponent as Spinner } from 'assets/spinner.svg';

import './loader.css';

const Loader = () => {
    return (
        <div className="spinner">
            <Spinner />
        </div>
    );
};

export default Loader;
