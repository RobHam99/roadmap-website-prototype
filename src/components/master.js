import { useState } from 'react';
import Card from "./card";
import Menu from "./menu";

export default function Master({ title, entries }) {
    const [buttonState, setButtonState] = useState(false);
    const [checkedCount, setCheckedCount] = useState(1);
    const len = 3;
    let progressValue = checkedCount * 100 / len;

    function buttonHandler() {
        if (buttonState === true) {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }

    function escapeMenu() {
        setButtonState(false);
    }

    return (
        <div className="master">
            <Card title={title} progressValue={progressValue} buttonHandler={buttonHandler} />   
            <div style={{display: buttonState ? 'block' : 'none' }}>
                <Menu title={title} entries={entries} progressValue={progressValue} escapeHandler={escapeMenu} setCheckedCount={setCheckedCount} checkedCount={checkedCount} />
            </div>  
        </div>

    );
}