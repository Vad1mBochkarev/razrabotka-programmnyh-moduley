import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50/60 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-sky-900 px-8 py-3.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors duration-200 hover:opacity-90">
            Смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}
