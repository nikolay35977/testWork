import React, {useState} from "react";
import './List.css'

const List = () => {
    
    let [list, setList] = useState(['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'])

    let changeList = () => {
        setList(list.slice().reverse());
    }
    return <div className={"inner"}>
        <ol className="rounded">
                {list.map((e,id) => <li key={id}>{e}</li>)}
            </ol>
            <button onClick={changeList}>CHANGE</button>
    </div>
}

export default List;