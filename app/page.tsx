import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';
import Navbar from '@/app/ui/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </main>
      <Footer />
    </div>
  );
}
