import { useContext } from 'react'
import ButtonGo from '../../../assets/Categories/Button Go.png'
import Electronics from '../../../assets/Categories/electronics.jpg'
import Jewelry from '../../../assets/Categories/jewelery.jpg'
import MensClothing from '../../../assets/Categories/mens clothing.jpg'
import WomensClothing from '../../../assets/Categories/womens clothing.jpg'
import { useNavigate } from 'react-router-dom'
import { FilterContext } from '../../../context/filter-context'

export interface ICategoryButtonProps {
    title: string,
}

export function CategoryButton ({ title }: ICategoryButtonProps) {
  const { updateFilter } = useContext(FilterContext)

  const navigate = useNavigate()

  const goToCategory = () => {
    setFilters(title)
    navigate('/products')
  }

  const setFilters = (category: string) => {
    updateFilter({
      category: `${category}`,
      sort_by: 'Popularity',
      price: {
        min: undefined,
        max: undefined
      }
    })
  }

  return (
    <div onClick={goToCategory} className='group relative w-full p-2.5 flex flex-col items-center justify-center border border-branco hover:border-preto rounded-lg z-30 cursor-pointer'>
      <div className='absolute flex items-center gap-4 z-30'>
        <p className='text-2xl font-bold text-branco [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>{title.toLocaleUpperCase()}</p>
        <button className='hidden group-hover:block'>
            <img src={ButtonGo} alt="Go" />
        </button>
      </div>

      <img src={
        title === 'electronics' ? Electronics :
        title === 'jewelery' ? Jewelry :
        title === "men's clothing" ? MensClothing :
        title === "women's clothing" ? WomensClothing :
        'null'
      } alt={title} className='w-full h-[92px] object-cover md:h-[184px] lg:h-[504px] rounded-lg opacity-70' />
    </div>
  );
}
