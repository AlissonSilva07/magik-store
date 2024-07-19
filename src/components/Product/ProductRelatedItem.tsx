import { useNavigate } from 'react-router-dom';
import { Product } from '../../@types/Product';

export interface IProductRelatedItemProps {
    rp: Product
}

export function ProductRelatedItem({ rp }: IProductRelatedItemProps) {
    const navigate = useNavigate()

    const goToProduct = (newProduct: number) => {
        navigate(`/products/${newProduct}`)
        window.location.reload()
    }

    return (
        <div key={rp.id} className="flex flex-col p-3 gap-3 shrink-0 border border-cinza-border/20 rounded-lg">
            <img src={rp.image} alt={rp.title} className="h-40 w-full object-contain" />
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">${rp.price}</p>
                <button onClick={() => goToProduct(rp.id)} className="py-1 px-2.5 flex items-center justify-center gap-2.5 bg-roxo/20 hover:bg-roxo/40 text-roxo rounded-full">Details</button>
            </div>
        </div>
    );
}
