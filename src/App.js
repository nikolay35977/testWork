import React from 'react';
import List from "./List";
import Promise from "./Promise";
import {ProtoType} from "./PrototypeTast";

const App = () => {
    let styleForDivInner = {
        'display': 'flex',
        'justifyContent': 'space-between',
        'flexWrap': 'wrap',
        'margin': '0 100px'
    }
    return (
        <div style={styleForDivInner}>
            <div>
                Задание 1. Список
                <List/>
            </div>  
            <div>
                Задание 2. IIFE функции
                <p>Смотрите в файле IIFEtask.js</p>
            </div>
            <div>
                Задание 3. Прототипы
                <p>Смотрите в файле PrototypeTast.js</p>
                {ProtoType()}
            </div>
            <div>
                Задание 4. Промисы 
                <Promise/>
            </div>
        </div>
    );
}

export default App;
