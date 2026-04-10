import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/footer";

export default function App() {
  return <>
    <Header />

    <Outlet />

    <Footer />
  </>
}