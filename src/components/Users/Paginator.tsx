import React from 'react';
import s from './Paginator.module.css.module.css'


export type PropsType = {

    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}
export const Paginator = ({pageSize,totalUsersCount,currentPage,onPageChanged}: PropsType) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
               <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={currentPage === p && s.selectedPage} onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>

            )

}