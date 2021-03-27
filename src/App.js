import './App.css';
import Header from './Components/Layout/header/header.js';
import Footer from './Components/Layout/footer/footer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router/router.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
