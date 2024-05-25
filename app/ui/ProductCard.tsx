import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold mb-2">${product.price}</p>
      <div className="flex items-center">
        {/* Render stars based on rating */}
        <div className="flex text-yellow-400">
          {[...Array(product.rating)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.55 5.938H18.99l-4.295 3.5 1.5 6.562L10 14.22 5.805 17.5l1.5-6.563L1.01 6.938h6.44L10 1z"
              />
            </svg>
          ))}
        </div>
        <span className="text-gray-600 ml-1">{product.rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;
