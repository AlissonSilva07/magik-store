import { Search } from "lucide-react";

export interface IModalSearchProps {
    showSearch: boolean
    onCloseSearch: () => void
}

export function ModalSearch ({ showSearch, onCloseSearch }: IModalSearchProps) {
  return (
    <div className={`${showSearch ? 'fixed' : 'hidden'} top-0 right-0 left-0 bottom-0 bg-preto/30 flex flex-col items-center justify-between z-30`}>
        <div className="absolute top-4 w-4/6 lg:w-3/6 flex flex-col bg-branco rounded-md shadow-lg p-8 gap-4">
            <div className='w-full'>
              <div className='relative'>
                  <input type="text" placeholder='Search' className='w-full p-3 bg-white border border-cinza-border/20 rounded-full z-30' />
                  <Search className='absolute right-2 p-4 z-40' />
              </div>
            </div>
            <button onClick={() => onCloseSearch()} className="p-2">
                <p className="font-bold text-roxo">Cancel search</p>
            </button>
        </div>
    </div>
  );
}
