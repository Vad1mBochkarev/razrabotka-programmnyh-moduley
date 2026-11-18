import { Product } from "@/data/products";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-[28px] p-5 flex flex-col">
            <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center">
                <Image
                    className="object-contain w-full h-full rounded-2xl"
                    src={product.image}
                    alt={product.title}
                    width={300} 
                    height={300}
                />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-5">{product.title}</h2>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">{product.description}</p>
            <p className="text-sm text-slate-800 mt-3">{product.price}</p>
            <button 
                className="w-fit rounded-full px-6 py-2.5 mt-5
                bg-sky-900 text-white uppercase text-xs font-medium tracking-wide
                hover:opacity-90 transition-colors duration-200"
            >в корзину</button>
        </div>
    );
}