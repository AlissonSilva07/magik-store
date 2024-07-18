export interface IProductSectionStyleProps {
    title: string
    content: string | number | JSX.Element
}

export function ProductSectionStyle({ title, content }: IProductSectionStyleProps) {
    return (
        <div className="flex flex-col gap-2">
            <p className="w-fit p-2.5 pl-0 text-cinza-800 text-xs text-left font-bold border-b border-cinza-800">{title.toUpperCase()}</p>
            <p className="text-base text-preto">{content}</p>
        </div>
    );
}
