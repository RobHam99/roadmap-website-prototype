import ProgressBar from "@ramonak/react-progress-bar";
import Draggable from "react-draggable";

export default function Card({ title, progressValue, buttonHandler}) {

    return (
        <button onClick={ buttonHandler } className="card">
            <h2 className="card-title">{ title }</h2>
            <ProgressBar className="card-progress-bar" completed={ progressValue } customLabel=" " height="15px" bgColor="#A0D2EB"/>
        </button>
    );
}