import { ReactComponent as ArrowDown } from 'assets/down-indicator.svg';
import { ReactComponent as ArrowUp } from 'assets/up-indicator.svg';
import './sortIndicator.css';

type SortIndicatorProsT = {
    isSorted: boolean;
};

const SortIndicator = ({ isSorted }: SortIndicatorProsT) => {
    return (
        <div>
            {isSorted ? (
                <ArrowUp className="sort-indicator" />
            ) : (
                <ArrowDown className="sort-indicator" />
            )}
        </div>
    );
};

export default SortIndicator;
