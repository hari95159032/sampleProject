import React from "react";
import { useParams } from "react-router";
let UserInfo=()=>{
    const params =useParams()
    const userId=params.userId
    return <div>
        <h1>Details of User {userId}</h1>
    </div>
}

export default UserInfo;