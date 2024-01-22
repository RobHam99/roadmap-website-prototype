import Entry from "./entry";
import { useState } from "react";

export default function MenuList({ setCheckedCount, checkedCount, entries}) {
    let entriesList = [];
    entries.forEach((entry, index) => {
        entriesList.push(<Entry entry={entry} setCheckedCount={setCheckedCount} checkedCount={checkedCount} />)
    });
    return (
        <div className="menu-list">
            <div className="menu-list-header">
                <h3 className="status-header">Status</h3>
                <h3 className="header-cell">Topic</h3>
                <h3 className="header-cell">Learning Material</h3>
                <h3 className="header-cell">Video Explanation</h3>
                <h3 className="header-cell">Problems</h3>
            </div>
            {entriesList}
            <table>
            <tr>
                <th>Status</th>
                <th>Topic</th>
                <th>Learning Material</th>
                <th>Video Explanation</th>
                <th>Problems</th>
            </tr>
            <tr>
                <td>Box</td>
                <td>Addition</td>
                <td>Notes</td>
                <td>Video</td>
                <td>Problems</td>
            </tr>
            <tr>
                <td>Box</td>
                <td>Addition</td>
                <td>Notes</td>
                <td>Video</td>
                <td>Problems</td>
            </tr>
            <tr>
                <td>Box</td>
                <td>Addition</td>
                <td>Notes</td>
                <td>Video</td>
                <td>Problems</td>
            </tr>
        </table>
        </div>


    );
}