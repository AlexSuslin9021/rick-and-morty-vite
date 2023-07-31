import {useAppDispatch} from "../app/store.ts";
import {getCharacters} from "./slice.characters.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useEffect} from "react";
import s from './style.module.css'
import {Character} from "./component/character.tsx";


export const Characters = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.characters.results)
    console.log(characters)
    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])
    return (<>
            <h3 className={s.header}>Characters</h3>
            <div className={s.characters}>

                {characters === undefined ? 'loader' : characters.map(c => <Character
                    key={c.id}
                    name={c.name}
                    src={c.image}
                    link={c.url}
                />)}
            </div>
        </>
    );
};

