import ButtonGo from '../../assets/Categories/Button Go.png'
import Electronics from '../../assets/Categories/image 11.png'
import Jewelry from '../../assets/Categories/image 10.png'
import MensClothing from '../../assets/Categories/image 8.png'
import WomensClothing from '../../assets/Categories/image 9.png'

export interface ICategoryButtonProps {
    title: string,
}

export function CategoryButton ({ title }: ICategoryButtonProps) {
  return (
    <div className='group relative w-full p-2.5 flex flex-col items-center justify-center hover:border hover:border-preto rounded-lg z-30'>
      <div className='absolute flex items-center gap-4 z-40'>
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
      } alt={title} className='opacity-70' />
    </div>
  );
}
