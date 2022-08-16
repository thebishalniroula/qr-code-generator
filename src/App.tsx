import "./App.css";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Hero />
      <Form />
    </div>
  );
}

export default App;
