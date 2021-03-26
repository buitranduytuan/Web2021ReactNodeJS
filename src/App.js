import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header.js';
import Footer from './Components/footer/footer.js';
import Content from './Components/Content/content.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />

      <Footer />
    </div>
  );
}

export default App;
