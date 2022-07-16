import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/UIComponents/Footer";
import Navigation from "./components/UIComponents/Navigation";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/Home";
import Trash from "./pages/Trash";
import store from "./store/store";
import "./styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      
        <main className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
