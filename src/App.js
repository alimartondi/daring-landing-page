import Hero from "./components/sections/hero";
import Navbar from "./components/elements/navbar";
import Advantages from "./components/sections/advantages";
import Application from "./components/sections/application";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container-lg px-4">
        <Advantages />
        {/* <Application /> */}
      </div>
    </div>
  );
}

export default App;
