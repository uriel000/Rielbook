import "./topbar.css";
import { Search, Person, Chat, Notifications, Menu } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Rielbook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search a person or a post."
            className="searchInput"
          />
        </div>
        <div className="smallSearch">
          <Search className="searchIcon" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">10</span>
          </div>
        </div>
        <img src="/assets/people/1.jpg" alt="" className="topbarImg" />
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
