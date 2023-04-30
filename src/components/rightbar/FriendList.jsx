import React from 'react'

function FriendList({person}) {
    console.log(person)
  return (
    <>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={person.profilePicture}
               alt="profile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{person.username}</span>
          </li>
    </>
  )
}

export default FriendList