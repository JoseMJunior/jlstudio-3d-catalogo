import { Produto } from '../data/produtosMock';
import { ProductCard } from './ProductCard';

interface CategorySectionProps {
    titulo: string;
    produtos: Produto[];
}

export const CategorySection = ({ titulo, produtos }: CategorySectionProps) => {
    if (produtos.length === 0) return null;

    return (
        <section className="py-12 border-b-4 border-black last:border-b-0">
        <h2 className="text-4xl font-bold uppercase mb-8 border-l-8 border-black pl-4">
            {titulo}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
            ))}
        </div>
        </section>
    );
};