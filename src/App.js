import Home from "./Home";
import Section2 from "./Section2";
import Footer from "./components/footer"
import "./App.css"
import Steps from "./components/Steps";
import Testimonial from "./components/Testimonial";
import Manage from "./components/Manage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Section2/>
      <Steps/>
      <Testimonial/>
      <Manage/>
      <Footer/>
    </>
  );
}

export default App;
