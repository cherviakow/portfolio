import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Button />
      </div>
    </>
  );
}

export default App;
