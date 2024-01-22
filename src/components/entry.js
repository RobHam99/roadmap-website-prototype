import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Entry({ entry, setCheckedCount, checkedCount }) {
    const [isChecked, setIsChecked] = useState(false);

    function checkHandler() {
        if (isChecked === true) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    };

    useEffect(() => {
        if (isChecked === true) {
            setCheckedCount(checkedCount+1);
        } 
        if (isChecked === false) {
            setCheckedCount(checkedCount-1);   
        }
    }, [isChecked, setCheckedCount]);

    return (
        <div className="entry">
            {console.log(entry["sub-topic"])}
            <div className="entry-status">
                <Checkbox 
                    icon={<Icon.FiCheck color="white" size={18} />}
                    checked={isChecked}
                    size={20}
                    borderColor="#8458B3"
                    style={{cursor: "pointer", marginLeft: 42, marginTop: 10}}
                    onChange={ checkHandler }
                />
            </div>
            <div className="entry-cell">
                <p>{entry["sub-topic"]}</p>
            </div>
            <div className="entry-cell">
                <a href={entry.notes}>Notes</a>
            </div>
            <div className="entry-cell">
                <a href={entry.videos}>Video</a>
            </div>
            <div className="entry-cell">
                <a href={entry.problems}>Problems</a>
            </div>

        </div>
    );
}