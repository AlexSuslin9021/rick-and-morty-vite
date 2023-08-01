import s from './app.module.css';
import { Characters } from '../characters/characters.tsx';
import { Route, Routes } from 'react-router-dom';
import {Episodes} from "../episodes/Episodes.tsx";
import {Locations} from "../locations/locations.tsx";
import {Home} from "../common/component/Home.tsx";

function App() {
    return (
        <div className={s.app}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/locations" element={<Locations />} />
                {/* Добавьте другие маршруты, если необходимо */}
            </Routes>
        </div>
    );
}

export default App;

