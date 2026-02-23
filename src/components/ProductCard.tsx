import { ShoppingBag } from 'lucide-react';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-green-200">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.is_available && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            Disponible
          </div>
        )}
        {product.stock > 0 && product.stock < 10 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Últimas unidades
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 min-h-[3rem]">
          {product.description}
        </p>
        {product.price > 0 && (
          <div className="mb-4">
            <p className="text-2xl font-bold text-green-700">
              ${product.price.toFixed(2)}
            </p>
            {product.wholesale_price && (
              <p className="text-sm text-gray-600">
                Mayorista: ${product.wholesale_price.toFixed(2)}
              </p>
            )}
          </div>
        )}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
          Consultar Precio
        </button>
      </div>
    </div>
  );
}

export function ProductPlaceholder() {
  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-8 border-2 border-dashed border-green-300 flex items-center justify-center">
      <div className="text-center text-gray-500">
        <ShoppingBag size={48} className="mx-auto mb-4 text-green-400" />
        <p className="font-semibold">Más productos</p>
        <p className="text-sm">próximamente</p>
      </div>
    </div>
  );
}
