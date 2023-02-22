import Navbar from "./global/Navbar";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Team from "./components/OurTeam";
import LetterBox from "./components/LetterBox";

import Footer from "./global/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Team />
      <LetterBox />
      <Footer />
    </div>
  );
}

export default App;
