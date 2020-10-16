import React from 'react';
import ReactDOM from 'react-dom';
import treeData from "../data/tree";
import FoldableTreeStyle from "./FoldableTree.css";

export const FoldableTree = () => {

    const onListItemOver = (e, itemId, index) => {
        let selectedListItem = treeData.find(item => item.id === itemId).children1;
        let childrenList = selectedListItem.map((item, index) => {
            return (
                <li key={index}>
                    {item.title}
                </li>
            )
        });

        document.getElementById('container').style.marginTop = index * 24 + 'px';
        ReactDOM.render(<ul className='ulContainer'>{childrenList}</ul>, document.getElementById('container'));
    };

    const onListItemOut = () => {
        ReactDOM.render(null, document.getElementById('container'));
    };

    const tree = treeData.map((item, index) => {
        return (
            <li key={item.id}
                id={item.id}
                onMouseOver={(e) => onListItemOver(e, item.id, index)}
                onMouseOut={() => onListItemOut()}
                className='liItems'
            >
                {item.title}
            </li>
        )
    });

    return (
        <div>
            <h1>Tree view</h1>
            <p>Given the linear data structure (array of objects). Each object contains properties:</p>
            <p><b>id</b> - unique ID of record </p>
            <p><b>title</b> - title of record </p>
            <p><b>parent</b> - ID of parent item, 0 - means that this item is root </p>

            <p>Convert given array to tree structure (add <b>children</b> property to each object) and output it as interactive dropdown menu (dropdown on hover). Child menu should appear to the right fo the parent.</p>

            <h2>The result goes here:</h2><br/><br/>

            <ul id='mainUL'>{tree}</ul>
            <div id="container"></div>

        </div>
    );
};

export default FoldableTree;