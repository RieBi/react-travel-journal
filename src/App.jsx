import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(d => 
    <Card {...d} />
  )

  return (
    <>
      <Header />
      <div className="cards">
        {cards}
      </div>
    </>
  )
}

export default App
