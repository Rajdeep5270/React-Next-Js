import DisplayCitiesCard from "./DisplayCitiesCard";
import Footer from "./footer";
import Header from "./Header";
import RandomCity from "./RandomCity";

export default function App() {
  return <body className="bg-dark">
    <Header />
    <RandomCity />
    <DisplayCitiesCard />
    <Footer />
  </body>
} 