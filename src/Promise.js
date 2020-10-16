import React, {useState} from "react";
import {getAPI} from "./PromiseFunc";

const Promise = () => {

    const [weather, setWeather] = useState(null);

    const handleClick = () => {
        getAPI().then(data => JSON.parse(data)['main']['temp']).then(data => convertToC(data))
            .then(data => setWeather(data)).catch((err) => console.error('SERVER ERROR', err))
    }
    const convertToC = (temperature) => {
        return Math.floor((temperature - 32) * 5 / 9);
    }

    return <div>
        {!weather ? 'PUSH THE BUTTON' : `Погода в Ростове: ${weather}`}
        <div>
            <button onClick={handleClick}>PUSH ME</button>
        </div>
    </div>
}

export default Promise