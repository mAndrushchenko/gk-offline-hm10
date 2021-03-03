import React, { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../store/userSlice"
import User from './User'
import image from "../../css/list-bg.jpg"

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [res, setRes] = useState(null)

    const handleClick = useCallback(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => setRes(users), [users])

    return (
        <div className="box">
            <img src={image} className="bg" alt=""/>
            <div className="users-wrapper">
                <div className="images-content">
                    <button
                        className="btn btn-images"
                        onClick={handleClick}>
                        Upload users
                    </button>
                    <div className="users-cards">
                        {res && res.map(user => {
                            return <User user={user} key={user.id}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users


