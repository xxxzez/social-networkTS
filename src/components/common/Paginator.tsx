import React from 'react'
import { useState } from 'react'
import cn from 'classnames'
import styles from './Paginator.module.css'
import Button from '@material-ui/core/Button'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator: React.FC<PropsType> = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages: number[] = []
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
                <Button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    Prev
                </Button>
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
                        <Button
                            variant="outlined"
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
                        </Button>
                    )
                })}

            {portionCount > portionNumber ? (
                <Button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    Next
                </Button>
            ) : (
                false
            )}
        </div>
    )
}
