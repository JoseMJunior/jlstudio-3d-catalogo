import { Header } from '@/components/Header';
import { CategorySection } from '@/components/CategorySection';
import { produtosMock, CategoriaProduto } from '@/data/produtosMock';

export default function Home() {
  const categorias: CategoriaProduto[] = ['Chaveiros', 'Utilidades', 'Decoração'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {categorias.map((categoria) => {
          const produtosDaCategoria = produtosMock.filter(
            (p) => p.categoria === categoria
          );

          return (
            <CategorySection 
              key={categoria} 
              titulo={categoria} 
              produtos={produtosDaCategoria} 
            />
          );
        })}
      </main>

      <footer className="bg-black text-white py-8 text-center font-bold uppercase text-sm mt-12">
        <p>© 2026 JLStudio 3D - Catálogo de Exibição</p>
      </footer>
    </div>
  );
}