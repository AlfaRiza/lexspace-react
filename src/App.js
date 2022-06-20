import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import Cart from "pages/Cart";
import Success from "pages/Success";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/categories/:idc/detail" element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
