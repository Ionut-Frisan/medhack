import "./CardHeader.scss";

const CardHeader = (props) => {
    return <div className={"card-header"}>
        {props.children}
    </div>
}

export default CardHeader;