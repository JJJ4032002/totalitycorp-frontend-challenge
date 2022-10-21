import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Ipad from "./Components/iPad/Ipad";
import IpadPro from "./Components/iPadPro/IpadPro";
import AppleTv from "./Components/AppleTv/AppleTv";
import Gallery from "./Components/Gallery/Gallery";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Ipad></Ipad>
      <IpadPro></IpadPro>
      <AppleTv></AppleTv>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
