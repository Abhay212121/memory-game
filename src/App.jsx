import Card from "./components/card";
import getData from "./utills/data";

function App() {
  getData("11061");

  return (
    <div className="flex gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
