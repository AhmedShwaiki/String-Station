import Footer from '@/ui/components/Footer';
import Header from '@/ui/components/Header';
import Navbar from '@/ui/components/Navbar';
import ProductList from '@/ui/blocks/ProductList';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 overflow-y-auto">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
