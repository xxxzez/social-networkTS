import React from 'react'
import { useState } from 'react'
import cn from 'classnames'
import styles from './Paginator.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}
export const Paginator = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
}: PropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount: number = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber: number = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 ? (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    Prev
                </button>
            ) : (
                false
            )}

            {pages
                .filter(
                    (p) =>
                        p >= leftPortionPageNumber &&
                        p <= rightPortionPageNumber
                )
                .map((p) => {
                    return (
                        <span
                            className={cn(
                                {
                                    [styles.selectedPage]: currentPage === p,
                                },
                                styles.pageNumber
                            )}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}
                        >
                            {p}
                        </span>
                    )
                })}

            {portionCount > portionNumber ? (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    Next
                </button>
            ) : (
                false
            )}
        </div>
    )
}
