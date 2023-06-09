import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  useEffect(() => {
    document.body.classList.add('body');
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="math-magicians/"
            element={(
              <>
                <Header />
                <Home />
              </>
            )}
          />
          <Route
            path="/calculator"
            element={(
              <>
                <Header />
                <Calculator />
              </>
            )}
          />
          <Route
            path="/quote"
            element={(
              <>
                <Header />
                <Quotes />
              </>
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
