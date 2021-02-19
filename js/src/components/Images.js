import React, {useState, useCallback, useMemo} from "react"
import {request} from "../services/api/requests"
import image from '../css/image-bg.jpg'
import {images} from  '../services/api/url'
import {RandomImages} from "./custom-hooks/RandomImages";


const Images = () => {
    const [res, setRes] = useState(null)
    const [text, setText] = useState('Upload pictures')
    const data = useMemo(()=> RandomImages(res), [res])

    const handleClick = useCallback(() => {
        setText('Upload another pictures')
        request(images)
            .then(setRes)
    }, [res])

    return (<div className="box">
            <img src={image} className="bg bg-image" alt=""/>
            <div className="images-wrapper">
                <div className="images-content">
                    <button
                        className="btn btn-images"
                        onClick={handleClick}>
                        {text}
                    </button>
                    <div
                        className="images-pictures">
                        {res && data.map((item, index) => {
                            if (index <= 8) {
                                return <img
                                    className="image-item"
                                    src={item.webformatURL}
                                    key={item.id}
                                    alt=""/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images


