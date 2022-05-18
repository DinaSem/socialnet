import React, {useState} from 'react';
import s from './Paginator.module.css'


export type PropsType = {

    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: 10

}
export const Paginator = ({pageSize, totalUsersCount, currentPage, onPageChanged, portionSize}: PropsType) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * pageSize;


    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p>=leftPortionNumber && p<=rightPortionNumber)
                .map(p => {
                    // @ts-ignore
                    return <span className={`${currentPage === p ? s.selectedPage : s.noSelectedPage }`}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>

    )

}