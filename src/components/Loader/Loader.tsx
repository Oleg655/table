import { ReactComponent as Spinner } from 'assets/spinner.svg';

import './loader.css';

const Loader = () => {
    return (
        <div className="spinner">
            <Spinner className="spinner-svg" />
        </div>
    );
};

export default Loader;
