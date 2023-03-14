import {useMemo} from "react";

const Burger = ({open, onClick}) => {
    const className = useMemo(
        () => `burger-menu${open ? ' burger-menu__open' : ''}`
        ,[open]);
    return (
        <ul className={className} onClick={onClick}>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default Burger;