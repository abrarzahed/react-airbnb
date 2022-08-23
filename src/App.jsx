import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

import PracticeCard from "../components/practice/PracticeCards";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="features">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <PracticeCard />
    </div>
  );
}

export default App;
