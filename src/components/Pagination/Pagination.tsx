import { useEffect } from 'react';

import { setPage } from 'actions';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { usePagination } from 'hooks/usePafination';
import './pagination.css';

const Pagination = () => {
    const contentPerPage = useAppSelector(state => state.pagination.contentPerPage);
    const totalElements = useAppSelector(state => state.pagination.totalElements);
    const pageNumberLimit = useAppSelector(state => state.pagination.pageNumberLimit);

    const dispatch = useAppDispatch();

    const {
        currentPage,
        totalPages,
        renderPageNumbers,
        pageDecrementBtn,
        pageIncrementBtn,
        leftIArrow,
        rightArrow,
    } = usePagination({
        contentPerPage,
        totalElements,
        pageNumberLimit,
    });

    useEffect(() => {
        dispatch(setPage(currentPage));
    }, [currentPage]);

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
