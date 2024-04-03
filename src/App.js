import './pages/Landing.css';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Services from './pages/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
