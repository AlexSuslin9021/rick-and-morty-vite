import {List} from "./List.tsx";
import s from './style.module.css'

export const Home = () => {
    return (
        <div className={s.home}>
            <List  link={"/character"} name={'character'}/>
            <List link={"/episodes"} name={'episodes'}/>
            <List link={"/locations"} name={'locations'}/>
        </div>
    );
};

