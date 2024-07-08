import CreditCards from '../../assets/Footer/cards.png'

export function Footer () {
  return (
    <div className="w-full h-[387px] md:h-[460px] md:p-8 lg:px-[120px] lg:py-16 lg:h-[460px] bg-preto p-4 flex flex-col justify-end">
      <div className='flex flex-col items-center gap-8 lg:gap-16'>
        <p className='text-5xl font-black text-branco'>MAGIK!</p>
        <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-[454px]'>
            <p className='text-branco'>Alisson Rego @ 2024</p>
            <img src={CreditCards} alt="Payment Methods" />
        </div>
      </div>
    </div>
  );
}
