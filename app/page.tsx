import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';
import Navbar from '@/app/ui/Navbar';
import ProductList from '@/app/ui/ProductList';

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
