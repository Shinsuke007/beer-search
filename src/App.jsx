// App.jsx

// π½ Link γθΏ½ε 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* π½ θΏ½ε  */}
      <ul>
        <li>
          <Link to="/omikuji">γγΏγγ</Link>
        </li>
        <li>
          <Link to="/janken">γγγγγ</Link>
        </li>
        <li>
          <Link to="/book-create">ζη¨Ώγγ</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
