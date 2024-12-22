import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen px-20 py-12 bg-black overflow-hidden select-none">
      <About />
      <Footer />
    </div>
  );
}
