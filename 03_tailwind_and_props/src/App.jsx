import Card from "../components/Card"
import "./App.css";

function App() {

  let newArray = [1,2,3,4,5];

  return (
    <>
      <h1 className="text-3xl bg-amber-300 p-5 rounded-md">Hey there</h1> 
      <Card username="Ashutosh" myArr={newArray} />     
      <Card username="Geeta" />     
      <Card username="Ramesh" />     
      <Card />     
    </>
  )
}

export default App
