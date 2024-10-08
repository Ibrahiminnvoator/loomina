import Header from '@/components/Header';
import ImageGenerator from '@/components/ImageGenerator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24 bg-background">
      <Header />
      <ImageGenerator />
      <Footer />
    </main>
  );
}