import React, { useState } from "react";
import styles from "./MainPage.module.css";
import Sidebar from "../Components/Sidebar/Sidebar";
// import Dashboard from "../Components/Dashboard/Dashboard";
// import Members from "../Components/Members/Members";
import EventsPage from "./Events/EventsPage";
// import Profile from "../Components/Profile/Profile";
// import Feedback from "../Components/Feedback/Feedback";

const componentMapping: Record<string, React.ReactNode> = {
//   Dashboard: <Dashboard />,
//   Members: <Members />,
  Events: <EventsPage />,
//   Profile: <Profile />,
//   Feedback: <Feedback />,
};  

const MainPage: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("Dashboard");

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar onSelect={setActiveComponent} />
      </div>
      <div className={styles.content}>
        {componentMapping[activeComponent] || <p>Component not found!</p>}
      </div>
    </div>
  );
};

export default MainPage;
