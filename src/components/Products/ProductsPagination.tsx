import { Dispatch, SetStateAction } from 'react';

import ChevronLeft from '../../assets/Pagination/chevron-left.png'
import ChevronRight from '../../assets/Pagination/chevron-right.png'

export interface IPaginationProps {
    current: number
    setCurrent: Dispatch<SetStateAction<number>>
    itemsPerPage: number
    playlistLength: number | undefined
}

export function ProductsPagination ({ current, setCurrent, itemsPerPage, playlistLength }: IPaginationProps) {
    
    const total = Math.ceil(playlistLength! / itemsPerPage)

    // Go to next page
    const nextPage = () => {
        setCurrent(prevPage => Math.min(prevPage + 1, total));
    }

    // Go to previous page
    const prevPage = () => {
        setCurrent(prevPage => Math.max(prevPage - 1, 1));
    }

    const renderButtons = () => {
        let buttons = []

        for(let i = 1; i <= total; i++) {
            buttons.push(
                <button key={i} onClick={() => setCurrent(i)} className={`${i === current ? 'text-roxo' : 'text-cinza-100'} font-bold`}>{i}</button>
            )
        }

        return buttons
    }

  return (
    <nav className='w-full flex items-center justify-center gap-4 md:gap-8'>
      <button disabled={current === 1} onClick={prevPage} className='h-12 w-[50px] px-[18px] py-2.5 flex flex-col items-center justify-center bg-branco border rounded-md'>
        <img src={ChevronLeft} alt="" />
      </button>
        {renderButtons()}
      <button disabled={current === total} onClick={nextPage} className='h-12 w-[50px] px-[18px] py-2.5 flex flex-col items-center justify-center bg-roxo border border-roxo rounded-md'>
        <img src={ChevronRight} alt="" />
      </button>
    </nav>
  );
}