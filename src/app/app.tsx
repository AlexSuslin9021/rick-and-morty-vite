import s from './app.module.css';
import { Characters } from '../characters/characters.tsx';
import { Route, Routes } from 'react-router-dom';
import {Episodes} from "../episodes/Episodes.tsx";
import {Locations} from "../locations/locations.tsx";

function App() {
    return (
        <div className={s.app}>
            <Routes>
                <Route path="/character" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/locations" element={<Locations />} />
                {/* Добавьте другие маршруты, если необходимо */}
            </Routes>
        </div>
    );
}

export default App;

