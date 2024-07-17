import { tv } from "tailwind-variants";

export interface IProductCardSkeletonProps {
    btnSize: "full" | "fixed" | undefined
}

const card = tv({
    base: 'flex flex-col p-3 gap-3 shrink-0 border border-cinza-border/20 rounded-lg animate-pulse',
    variants: {
        size: {
            full: 'w-full h-full',
            fixed: 'w-[336px] min-w-[336px]'
        }
    }
})

export function ProductCardSkeleton({ btnSize }: IProductCardSkeletonProps) {
    return (
        <div className={card({ size: btnSize })}>
            <div className='h-[240px] w-full bg-cinza-border/20 rounded-md' />
            <div className="flex-1 py-6 bg-cinza-border/20 rounded-lg"></div>
            <div className="w-full flex flex-col gap-3">
                <div className="h-20 w-full bg-cinza-border/20 rounded-md"></div>
                <div className="w-full flex items-center gap-6">
                    <div className="flex-1 p-6 bg-cinza-border/20 rounded-lg"></div>
                    <div className="p-6 bg-cinza-border/20 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
