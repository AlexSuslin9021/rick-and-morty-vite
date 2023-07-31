import s from './app.module.css';
import { Characters } from '../characters/characters.tsx';
import { Route, Routes } from 'react-router-dom';
import {Episodes} from "../episodes/Episodes.tsx";

function App() {
    return (
        <div className={s.app}>
            <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
                {/* Добавьте другие маршруты, если необходимо */}
            </Routes>
        </div>
    );
}

export default App;

