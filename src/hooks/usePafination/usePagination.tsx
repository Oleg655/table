/* eslint-disable no-unneeded-ternary */
import { useState } from 'react';

import { ReactComponent as Left } from 'assets/left-indicator.svg';
import { ReactComponent as Right } from 'assets/right-indicator.svg';

import './usePagination.css';

type UsePaginationPropsT = {
    contentPerPage: number;
    totalElements: number;
    pageNumberLimit: number;
};

interface UsePaginationReturnI {
    currentPage: number;
    totalPages: number;
    renderPageNumbers: (JSX.Element | null)[];
    pageDecrementBtn: null | JSX.Element;
    pageIncrementBtn: null | JSX.Element;
    leftIArrow: JSX.Element;
    rightArrow: JSX.Element;
}

export const usePagination = ({
    contentPerPage,
    totalElements,
    pageNumberLimit,
}: UsePaginationPropsT): UsePaginationReturnI => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = Math.ceil(totalElements / contentPerPage);

    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(pageNumberLimit);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(1);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const onSetPageHandler = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const arrayFromPage: Array<number> = [];

    for (let index = 1; index <= pageCount; index += 1) {
        arrayFromPage.push(index);
    }

    const renderPageNumbers = arrayFromPage.map(page => {
        if (page < maxPageNumberLimit + 1 && page >= minPageNumberLimit) {
            return (
                <button
                    className={currentPage === page ? 'btnActive' : 'btn'}
                    type="button"
                    onClick={() => onSetPageHandler(page)}
                    key={page}
                >
                    {page}
                </button>
            );
        }
        return null;
    });

    const leftIArrow = (
        <button
            disabled={currentPage === arrayFromPage[0] ? true : false}
            onClick={prevPage}
            type="button"
            className="btn"
        >
            <Left className="btnIcon" />
        </button>
    );

    const rightArrow = (
        <button
            disabled={currentPage === arrayFromPage[arrayFromPage.length - 1] ? true : false}
            onClick={nextPage}
            type="button"
            className="btn"
        >
            <Right className="btnIcon" />
        </button>
    );

    let pageIncrementBtn: null | JSX.Element = null;
    if (arrayFromPage.length > maxPageNumberLimit) {
        pageIncrementBtn = (
            <button
                className="btn"
                type="button"
                onClick={() => {
                    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
                    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
                }}
            >
                &hellip;
            </button>
        );
    }

    let pageDecrementBtn: null | JSX.Element = null;
    if (minPageNumberLimit > 1) {
        pageDecrementBtn = (
            <button
                className="btn"
                type="button"
                onClick={() => {
                    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
                }}
            >
                &hellip;
            </button>
        );
    }

    return {
        totalPages: pageCount,
        currentPage,
        renderPageNumbers,
        pageIncrementBtn,
        pageDecrementBtn,
        leftIArrow,
        rightArrow,
    };
};
