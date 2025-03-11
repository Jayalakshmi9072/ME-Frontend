/*import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="https://mind-empowered.org/logo192.png" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">
            <span className={styles.icon + " " + styles.dashboardIcon}></span> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon + " " + styles.membersIcon}></span> Members
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon + " " + styles.eventsIcon}></span> Events
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon + " " + styles.profileIcon}></span> Profile
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon + " " + styles.feedbackIcon}></span> Feedback
          </a>
        </li>
        <div className={styles.logoutLink}>
          <a href="#">
            <span className={styles.icon + " " + styles.logoutIcon}></span> Logout
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;*/




import React from "react";
import styles from "./Sidebar.module.css";
import { FaTachometerAlt, FaRegSmile, FaCalendarAlt, FaUser, FaPen, FaSignOutAlt } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="https://mind-empowered.org/logo192.png" alt="Logo" />
      </div>

      {/* Sidebar Menu */}
      <ul className={styles.navLinks}>
        <li>
          <a href="#">
            <FaTachometerAlt className={styles.icon} />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegSmile className={styles.icon} />
            <span>Members</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaCalendarAlt className={styles.icon} />
            <span>Events</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaUser className={styles.icon} />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaPen className={styles.icon} />
            <span>Feedback</span>
          </a>
        </li>
        <li className={styles.logout}>
          <a href="#">
            <FaSignOutAlt className={styles.icon} />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;




