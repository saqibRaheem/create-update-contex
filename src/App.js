// import logo from './logo.svg';
import './App.css';
import Navb from './component/Nav';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './component/About';
import Cont from './component/Cont';
import Search from './component/Search';
import { CartProvider } from './contex/nodes/NoteContext';

function App() {

  return (
    < >
         <CartProvider>
      <Navb />
      {/* <About> */}

        <Routes>
          <Route exect path="/home" element={<Home />} />
          <Route exect path="/about" element={<About />} />
          <Route exect path="/search" element={<Search />} />
          <Route exect path="/contact/:name" element={<Cont />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
</Routes>
</CartProvider>
        {/* </NoteState> */}
    </>

  );
}

export default App;
