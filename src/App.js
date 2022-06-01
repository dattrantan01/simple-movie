import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import MainContent from "./components/Layouts/MainContent";
import MoviesPageDetail from "./components/Movies/MoviesPageDetail";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<MainContent></MainContent>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
          <Route path="/movie/:movieId" element={<MoviesPageDetail></MoviesPageDetail>}></Route>
        </Route>

      </Routes>
    </Fragment>
  );
}

export default App;
