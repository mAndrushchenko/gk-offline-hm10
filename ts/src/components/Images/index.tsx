import React, { useState, useCallback, useMemo, useEffect, FC } from "react"
import { selectImage, getImages } from "../../store/imageSlice"
import { useDispatch, useSelector } from "react-redux"
import { randomImages } from "../../services/randomImages"
import {
    TAppDispatch,
    IImagesState,
    TImageState,
    TArrayImagesState
} from "../../store/store-types"
import image from "../../css/image-bg.jpg"


export const Images: FC = () => {
    const dispatch = useDispatch<TAppDispatch>()
    const images = useSelector<IImagesState, TArrayImagesState>(selectImage)

    const [res, setRes] = useState<TArrayImagesState | null>(null)
    const [text, setText] = useState<string>('Upload images')

    const data = useMemo(() => randomImages(res), [res])

    const handleClick = useCallback(() => {
        dispatch(getImages())
        setText('Upload another images')
    }, [res, images])

    useEffect(() => setRes(images), [images])

    return (
        <div className="box">
            <img
                src={image}
                draggable={false}
                className="bg bg-image"
                alt=""
            />
            <div className="images-wrapper">
                <div className="images-content">
                    <button
                        className="btn btn-images"
                        onClick={handleClick}>
                        {text}
                    </button>
                    <div
                        className="images-pictures">
                        {res && data.map((item: TImageState, index: number) => {
                            if (index <= 8) {
                                return (
                                    <div
                                        key={item.id}
                                        className="image-box">
                                        <img
                                            className="image-item"
                                            src={item.webformatURL}
                                            alt=""
                                            draggable={false}
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}



