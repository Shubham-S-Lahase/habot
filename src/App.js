import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-[86px]">
          <HomePage />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
