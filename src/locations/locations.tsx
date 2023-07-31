import {useAppDispatch} from "../app/store.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {getLocations} from "./slice.locations.ts";


export const Locations = () => {
    const dispatch = useAppDispatch()
    const locations = useAppSelector(state => state.locations.results)
  useEffect(()=>{
      dispatch(getLocations())
  },[dispatch])
    return (
        <div >
            {locations===undefined ? 'loading' : locations.map(el=><div key={el.id}>
              <h3>{el.name}</h3>
              <p>{el.type}</p>
            </div>)}
        </div>
    );
};

