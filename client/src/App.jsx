//import './App.css'
import Footer from "./core/components/layouts/Footer";
import Header from "./core/components/layouts/Header";
import RootRouter from "./RootRouter";

function App() {
  const appName = "MyConnector";

  return (
    <>
      <Header appName={appName} />
      <RootRouter /> <Footer />
    </>
  );
}

export default App;
