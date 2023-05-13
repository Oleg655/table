import { usePagination } from 'hooks/usePafination';
import './pagination.css';

const Pagination = () => {
    const {
        currentPage,
        totalPages,
        renderPageNumbers,
        pageDecrementBtn,
        pageIncrementBtn,
        leftIArrow,
        rightArrow,
    } = usePagination({
        contentPerPage: 10,
        totalElements: 100,
        pageNumberLimit: 10,
    });
    return (
        <div className="pagination">
            <p>
                {currentPage}/{totalPages}
            </p>
            {leftIArrow}
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            {rightArrow}
        </div>
    );
};

export default Pagination;
