import Byilaclesen from '../../assets/TopBrands/biylaclesen.png'
import Fjall from '../../assets/TopBrands/fjallraven.png'
import SD from '../../assets/TopBrands/sandisk.png'
import WD from '../../assets/TopBrands/wd.png'

export function TopBrands () {
  return (
    <section className="w-full p-4 md:p-8 flex flex-col items-center gap-4 md:gap-8 lg:p-16">
        <h2 className="text-4xl font-bold">TOP BRANDS</h2>
        <div className='w-full grid grid-cols-2 grid- lg:grid-cols-4 gap-4 justify-items-center items-center'>
            <img src={Byilaclesen} alt="biylaclesen" className='w-[180px] md:w-[220px] lg:w-[240px] self-center' />
            <img src={Fjall} alt="fjallraven" className='w-[180px] md:w-[220px] lg:w-[240px] self-center' />
            <img src={SD} alt="sandisk" className='w-[180px] md:w-[220px] lg:w-[240px] self-center' />
            <img src={WD} alt="wd" className='w-[180px] md:w-[220px] lg:w-[240px] self-center' />
        </div>
    </section>
  );
}
