import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignupWithHabot from "./components/SignupWithHabot";
import VideoBuyer from "./components/VideoBuyer";
import GetVerified from "./components/GetVerified";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <main className="pt-[86px] h-screen">
          <Hero />
          <SignupWithHabot/>
          <VideoBuyer/>
          <GetVerified/>
          <HowItWorks/>
          <Footer/>
        </main>
      </div>
    </Router>
  );
}

export default App;
