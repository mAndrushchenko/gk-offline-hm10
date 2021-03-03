import React from "react"
import { IUser } from "./users-types"

export const User: React.FC<IUser> = ({ user }) => {
    return (
        <div className="user-item">
            <ul>
                <li><strong>Name: </strong>{user.name}</li>
                <li><strong>user name: </strong>{user.username}</li>
                <li><strong>Phone: </strong>{user.phone}</li>
                <li><strong>email: </strong>{user.email}</li>
                <li><strong>website: </strong>{user.website}</li>
            </ul>
        </div>
    )
}



