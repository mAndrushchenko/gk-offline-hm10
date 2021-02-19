import React, {useState, useEffect} from "react";
import {request} from "../services/api/request";

const Images = (): JSX.Element => {
    const [res, setRes] = useState(null)
    const [result, setResult] = useState([])


    const handleClick = () => {
        request(2)
            .then(setRes)
    }
    useEffect(()=>{
        if (res) {
            // @ts-ignore
            setResult(res.hits)
            // @ts-ignore
            console.log(res.hits);
        }
    },[res])

    return (<div>
                    <button className="button" onClick={handleClick}>click</button>
                    <ul>
                        {result.map((item, index) => {
                            return <li key={item['id']}><img src={item['webformatURL']} alt=""/></li>
                        })}
                    </ul>
            </div>
    )
}

export default Images


