import {useState} from "react";
import "./FAQ.scss";

function Question(props) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (

        <div>
            <div className={"question"} onClick={() => setShowAnswer(!showAnswer)}>
                {props.id}. {props.que}
            </div>
            {showAnswer &&
            <div className={"answer"}>
                {props.ans}
            </div>}
        </div>

    )
}

export default Question