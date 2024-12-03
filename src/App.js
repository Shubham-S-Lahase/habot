import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignupWithHabot from "./components/SignupWithHabot";
import VideoBuyer from "./components/VideoBuyer";
import GetVerified from "./components/GetVerified";

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
        </main>
      </div>
    </Router>
  );
}

export default App;
