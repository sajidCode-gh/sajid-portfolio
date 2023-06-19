import "./assets/font/stylesheet.css";
import "./App.css";
import Header from "./layout/header/Header.layout";
import Main from "./layout/main/main.layout";

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;
