import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/itemList";
import BrowseStyles from "./components/BrowseStyles/BrowseStyles";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ItemList />
      <BrowseStyles />
      <Footer/>
    </>
  );
}

export default App;
