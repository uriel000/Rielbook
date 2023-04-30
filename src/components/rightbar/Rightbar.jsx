import "./rightbar.css";
import FriendList from "./FriendList";
import { Users } from "../../dummyData";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="assets/gift.png"
            alt="birthday gift icon"
          />
          <span className="birthdayText">
            <b>Jesriel Ledesma</b> and <b>2 other friends</b> are celebrating
            their birthday today!
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad2.jpg" alt="Advertisement" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.filter((user) => user.online === true).map((user) => (
            <FriendList key={user.id} person={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Antipolo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">It's complicated</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/people/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beyonce Knowles</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beyonce Knowles</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beyonce Knowles</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beyonce Knowles</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beyonce Knowles</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/people/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beyonce Knowles</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
