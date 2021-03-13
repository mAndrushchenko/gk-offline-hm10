import React, { useState, useCallback, useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers, selectUser } from "../../store/userSlice"
import { User } from './User'
import {
    IUsersState,
    TAppDispatch,
    TArrayUsersState
} from "../../store/store-types"
import image from "../../css/list-bg.jpg"

export const Users: FC = () => {
    const users = useSelector<IUsersState, TArrayUsersState>(selectUser)
    const dispatch = useDispatch<TAppDispatch>()
    const [res, setRes] = useState<TArrayUsersState | null>(null)

    const handleClick = useCallback(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => setRes(users), [users])

    return (
        <div className="box">
            <img
                src={image}
                draggable={false}
                className="bg"
                alt=""
            />
            <div className="users-wrapper">
                <div className="images-content">
                    <button
                        className="btn btn-images"
                        onClick={handleClick}>
                        Upload users
                    </button>
                    <div className="users-cards">
                        {res && res.map((user) => {
                            return <User user={user} key={user.id}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


