import React, {useState, useCallback} from "react";
import {request} from "../services/api/requests";
import {users} from "../services/api/url";
import image from "../css/list-bg.jpg";

const Users = () => {
    const [res, setRes] = useState(null)

    const handleClick = useCallback(() => {
        request(users)
            .then(setRes)
    }, [])

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
                    <div className="users-cards">{res && res.map(item => {
                        return (
                            <div key={item.id} className="user-item">
                                <ul>
                                    <li><strong>Name: </strong>{item.name}</li>
                                    <li><strong>user name: </strong>{item.username}</li>
                                    <li><strong>Phone: </strong>{item.phone}</li>
                                    <li><strong>email: </strong>{item.name}</li>
                                    <li><strong>website: </strong>{item.website}</li>
                                </ul>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users


