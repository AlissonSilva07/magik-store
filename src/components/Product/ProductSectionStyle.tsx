export interface IProductSectionStyleProps {
    title: string
    content: string | number | JSX.Element
}

export function ProductSectionStyle({ title, content }: IProductSectionStyleProps) {
    return (
        <div className="flex flex-col gap-4">
            <p className="w-fit p-1 pl-0 text-roxo/80 text-xs text-left font-bold border-b border-roxo/80">{title.toUpperCase()}</p>
            {content}
        </div>
    );
}
