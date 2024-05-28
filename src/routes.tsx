import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import { loadDataPokemon, loadDetailPokemon } from "./services/PokeomServices";
import PokemonDetail from "./pages/PokemonDetail";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard loadDataPokemon={loadDataPokemon} />}/>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/pokemon-detail/:id" element={<PokemonDetail loadDetailPokemon={loadDetailPokemon} />}/>
      
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
