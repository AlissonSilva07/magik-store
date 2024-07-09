import { Dispatch, SetStateAction } from 'react';

import { ChevronLeft, ChevronRight} from 'lucide-react'

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
      <button disabled={current === 1} onClick={prevPage} className='group h-12 w-[50px] px-[18px] py-2.5 flex flex-col items-center justify-center bg-roxo border border-roxo disabled:bg-branco disabled:border-cinza-100 rounded-md'>
        <ChevronLeft className='text-branco group-disabled:text-cinza-100' />
      </button>
        {renderButtons()}
      <button disabled={current === total} onClick={nextPage} className='group h-12 w-[50px] px-[18px] py-2.5 flex flex-col items-center justify-center bg-roxo border border-roxo disabled:bg-branco disabled:border-cinza-100 rounded-md'>
        <ChevronRight className='text-branco group-disabled:text-cinza-100' />
      </button>
    </nav>
  );
}