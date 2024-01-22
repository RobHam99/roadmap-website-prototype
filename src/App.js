import './App.css';
import React from "react";
import Master from './components/master';
import SideBar from './components/sidebar';
import NavBar from './components/navbar';
import Draggable from 'react-draggable';
import {useRef} from "react";
import Xarrow from "react-xarrows";
import database from './content/data.json';


function App() {

    let topicsList = [];
    database.topics.forEach((topic, index) => {
        topicsList.push(<Master title={topic.title} entries={topic.entries} />)
    });

    return (
    <div id="App"> 
        <div className="main-graph">
            {topicsList}
        </div>
    </div>
    );
}

export default App;
