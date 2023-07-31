import { useAppSelector } from "../../../common/hooks/useAppSelector.ts";
import {getCharactersPage} from "../../slice.characters.ts";
import {useAppDispatch} from "../../../app/store.ts";

export const Paginator = () => {
    const pageInfo = useAppSelector((state) => state.characters.info);
    const pages = [];
    const dispatch = useAppDispatch()
    const onClick=(id:number)=>{
        dispatch(getCharactersPage(id))
    }
    if (pageInfo && pageInfo.pages !== undefined) {
        for (let i = 1; i <= pageInfo.pages; i++) {
            pages.push(i);
        }
    }

    console.log('pages', pages);
    return (
        <div>
            {pages.map(el=><span style={{cursor:'pointer', marginRight:'10px'}} onClick={()=>onClick(el)}>
                {el}
            </span>)}
        </div>
    );
};


