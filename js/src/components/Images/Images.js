import React, { useState, useCallback, useMemo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { randomImages } from "../../services/randomImages"
import { getImages } from "../../store/imageSlice"
import image from '../../css/image-bg.jpg'


const Images = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => state.images)
    const [res, setRes] = useState(images)
    const [text, setText] = useState('Upload images')
    const data = useMemo(() => randomImages(res), [res])

    const handleClick = useCallback(async () => {
        dispatch(getImages())
        const url = 'https://api.gismeteo.net/v2/search/cities/?lang=en&query=cherakasy &appid=56b30cb255.3443075'
        try {
            const response = await fetch(url,{method: "GET"}).then(data => data.json()).then(data => data)
            console.log(response)

        } catch (err) {
            console.log(err)
        }


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
                                return (
                                    <div
                                        key={item.id}
                                        className="image-box">
                                        <img
                                            className="image-item"
                                            src={item.webformatURL}
                                            alt=""
                                        />
                                    </div>
                                )}
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images


