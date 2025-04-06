import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Blog />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
