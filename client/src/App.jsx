import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import BrandStory from "./components/BrandStory";
import Lookbook from "./components/Lookbook";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <div className="bg-ink">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <CartDrawer />
        <Hero />
        <MarqueeStrip />
        <Categories />
        <FeaturedProducts />
        <BrandStory />
        <Lookbook />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
