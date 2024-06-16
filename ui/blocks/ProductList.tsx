import List from '@/ui/components/List';
import ProductCard from '@/ui/components/ProductCard';
import { fetchProducts } from '@/lib/data';

const ProductList = async () => {
  const mockData = await fetchProducts();

  return (
    <List
      items={mockData}
      layout={'grid'}
      renderItem={item => <ProductCard key={item.id} product={item} />}
    />
  );
};

export default ProductList;
