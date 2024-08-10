import { Routes, Route } from 'react-router-dom';
import CharactersPage from './components/Characters-page';
import CharacterPage from './components/Character-page';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CharactersPage />} />
      <Route path='/:id' element={<CharacterPage />} />
    </Routes>
  );
}

export default App;
