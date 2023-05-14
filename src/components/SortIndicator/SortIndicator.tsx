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
                <ArrowDown className="sort-indicator" />
            ) : (
                <ArrowUp className="sort-indicator" />
            )}
        </div>
    );
};

export default SortIndicator;
