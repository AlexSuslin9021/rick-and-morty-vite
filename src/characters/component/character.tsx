import * as React from "react";
import s from './character.module.css'

export const Character: React.FC<CharacterType> = ({src, name, link}) => {
    return (
        <div className={s.character} >
            <a href={link}> <img className={s.image} src={src} alt=""/></a>
            <h4 className={s.name} >{name}</h4>
        </div>
    );
};

type CharacterType = {
    src: string
    name: string
    link:string
}