import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-screen flex flex-col overflow-y-scroll bg-bg justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
