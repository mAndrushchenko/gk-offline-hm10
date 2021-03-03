import React, { useState, useCallback, useMemo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { randomImages } from "./randomImages"
import { getImages } from "../../store/imageSlice"
import image from '../../css/image-bg.jpg'


const Images = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => state.images)
    const [res, setRes] = useState(images)
    const [text, setText] = useState('Upload images')
    const data = useMemo(() => randomImages(res), [res])

    const handleClick = useCallback(() => {
        dispatch(getImages())
        setText('Upload another images')
    }, [res, images])

    useEffect(() => setRes(images),[images])

    return (
        <div className="box">
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
                                    alt=""
                                />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images


