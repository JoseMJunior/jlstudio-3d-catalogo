import { Produto } from '../data/produtosMock';
import { ProductMediaManager } from './ProductMediaManager';

interface ProductCardProps {
  produto: Produto;
}

export const ProductCard = ({ produto }: ProductCardProps) => {
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(produto.preco);

    return (
        <article className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">

        <ProductMediaManager 
        images={produto.imagens} 
        videoUrl={produto.videoUrl} 
        altText={produto.nome} 
        />
        
        <div className="p-4 flex flex-col gap-2">
            <h3 className="text-xl font-bold uppercase leading-tight line-clamp-2">
            {produto.nome}
            </h3>
            <p className="text-2xl font-bold mt-auto">
            {precoFormatado}
            </p>
        </div>
        </article>
    );
};