import React from 'react';
import { useState } from 'react';
import Child from './Child';

function App() {
    const [weatherData, setWeatherData] = useState([
        {
            type:'text',
            required : true
        },
        {
            type: 'password',
            required: false
        }
    ]);

    const [text, setTextChange] = useState([]);

    const handleSubmit =() =>{
        console.log(text);
    }

    return (
        <div className="App">
            {weatherData.map((index , key) =>{
                return (
                    <Child
                        key={key}
                        textChange={setTextChange}
                        text={text}
                        sKey={key}

                    />
                )
            })}
            <button onClick={handleSubmit}>submit</button>

        </div>
    );
}

export default App;