import "./css/style.css"

import Banner from "./components/banner";
import Header from "./components/header";
import FeaturedCategory from "./components/featuredCategory";
import FeaturedProducts from "./components/featuredProducts";
import Footer from "./components/footer";

export default function App() {
  return <>
    <Header />
    <Banner />
    <FeaturedCategory />
    <FeaturedProducts />
    <Footer />
  </>
}