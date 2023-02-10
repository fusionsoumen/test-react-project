import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BannerComponent from './components/BannerComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BannerComponent></BannerComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
