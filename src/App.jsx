import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import data from "../data";

function App() {
  const dataJSX = data.map((d) => {
    return <Card key={d.id} item={d} />;
  });
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="features">{dataJSX}</div>
      <Footer />
    </div>
  );
}

export default App;
