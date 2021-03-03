import React from "react"

const User = ({user}) => {
    return (
        <div className="user-item">
            <ul>
                <li><strong>Name: </strong>{user.name}</li>
                <li><strong>user name: </strong>{user.username}</li>
                <li><strong>Phone: </strong>{user.phone}</li>
                <li><strong>email: </strong>{user.name}</li>
                <li><strong>website: </strong>{user.website}</li>
            </ul>
        </div>
    )
}

export default User


