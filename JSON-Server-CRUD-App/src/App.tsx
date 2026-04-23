import { Outlet } from "react-router";
import Header from "./components/Header"; // Changed from Header
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      <div className="flex flex-1 flex-col ml-64">

        <main className="flex-1 p-6 lg:p-10">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}