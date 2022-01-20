import Herosection from "./components/herosection/Herosection";
import About from "./components/about/About";
import "./style.css";
import Interior from "./components/interior/Interior";
import Menu from "./components/menu/Menu";
import Advantages from "./components/advantages/Advantages";
import News from "./components/news/News";
import Rest from "./components/restaurant/Rest";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="App">
      <Herosection />
      <About />
      <Interior />
      <Menu />
      <Advantages />
      <News />
      <Rest />
      <Contact />
    </div>
  );
}

export default App;
