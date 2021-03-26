import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header.js';
import Footer from './Components/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Footer />
    </div>
  );
}

export default App;
