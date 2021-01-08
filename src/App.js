import "./App.css";
import Header from "./components/Header";
import ExpenseInput from "./components/ExpenseInput.js";
// import ExpensesList from "./components/ExpensesList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseInput />
      <Footer />
    </div>
  );
}

export default App;
