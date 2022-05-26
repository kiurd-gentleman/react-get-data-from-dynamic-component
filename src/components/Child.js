import React, {useEffect} from 'react';


function SearchLocation({setTextChange, sKey, text}) {

    const fetchData = async () => {
        // setWeatherData(data);
    };

    return (
        <div>
            <form>
                <input
                    onChange={e => {
                        console.log(sKey)
                        text[sKey] = e.target.value;
                    }}
                />
            </form>
        </div>
    );
}

export default SearchLocation;