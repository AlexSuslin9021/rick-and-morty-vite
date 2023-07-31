import {useAppDispatch} from "../app/store.ts";
import {getEpisode} from "./slice.episode.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {Link} from "react-router-dom";


export const Episodes = () => {
    const dispatch = useAppDispatch()
    const episode = useAppSelector(state => state.episode.results)
    useEffect(() => {
        dispatch(getEpisode())
    }, [dispatch])


    return (
        <div>
            {episode===undefined ? 'loader' : episode.map(el => <div>
                <Link to={el.url}>{el.name}</Link>
            </div>)}
        </div>
    );
};

