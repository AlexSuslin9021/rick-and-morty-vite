import {Link} from "react-router-dom";
import s from './style.module.css'

export const List:React.FC<ListType> = ({name, link}) => {
    return (
        <Link className={s.list} to={link} >
            {name}
        </Link>
    );
};
type ListType={
    name:string
    link:string
}