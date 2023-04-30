import "./leftbar.css";
import {
  RssFeed,
  People,
  Store,
  Group,
  LiveTv,
  CalendarToday,
  Star,
  Message,
  Bookmark,
} from "@material-ui/icons";
import Contact from "./Contact";
import { Users } from "../../dummyData";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <People className="leftbarIcon" />
            <span className="leftbarListItemText">Friends</span>
          </li>
          <li className="leftbarListItem">
            <Store className="leftbarIcon" />
            <span className="leftbarListItemText">Marketplace</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <LiveTv className="leftbarIcon" />
            <span className="leftbarListItemText">Watch</span>
          </li>
          <li className="leftbarListItem">
            <CalendarToday className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <Star className="leftbarIcon" />
            <span className="leftbarListItemText">Favorite</span>
          </li>
          <li className="leftbarListItem">
            <Message className="leftbarIcon" />
            <span className="leftbarListItemText">RielMessage</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Saved</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <span className="leftbarContact">Contacts</span>
        <ul className="leftbarFriendList">
          {Users.map((user) => (
            <Contact key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
