import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Quizes from './components/Quizes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Quizes></Quizes>
      <Footer></Footer>
    </div>
  );
}

export default App;
