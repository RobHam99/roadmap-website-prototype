import ProgressBar from "@ramonak/react-progress-bar";
import MenuList from "./menu-list";

export default function Menu({ title, entries, escapeHandler, progressValue, setCheckedCount, checkedCount }) {
    return (
        <div className="menu-layer">
            <button onClick={ escapeHandler } className="menu-transparent"></button>
            <div className="menu">
                <button onClick={ escapeHandler } className="menu-escape-button">Esc</button>
                <div className="menu-contents">
                    <h1 className="menu-title">{ title }</h1>
                    <ProgressBar className="progress-bar" completed={ progressValue } customLabel=" " height="15px" bgColor="#8458B3"/>
                    <MenuList entries={entries} setCheckedCount={setCheckedCount} checkedCount={checkedCount}/>
                </div>
            </div>
        </div>
    );
}