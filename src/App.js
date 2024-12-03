import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <main className="pt-[86px] h-screen">
          <Hero />
        </main>
      </div>
    </Router>
  );
}

export default App;
