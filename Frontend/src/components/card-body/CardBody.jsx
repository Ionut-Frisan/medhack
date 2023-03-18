import "./CardBody.scss";

const CardBody = (props) => {
    return <div className={"card-body"}>
        {props.children}
    </div>
}

export default CardBody;