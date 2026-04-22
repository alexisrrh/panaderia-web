import "./App.css";
import { AppRoutes } from "./Routes/AppRoutes";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;