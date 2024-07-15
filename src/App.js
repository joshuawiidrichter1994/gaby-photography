import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import BlogListings from './pages/BlogListings';
import Blog from './pages/blogs/BlogDefault';
import Services from './pages/Services';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/blog-listings" element={<BlogListings />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about#contact-section" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
