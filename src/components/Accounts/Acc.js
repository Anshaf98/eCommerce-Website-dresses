import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../style/Account.css";
import AboutMe from "./AboutMe";
import ChangePassword from "./ChangePassword";
import MyOrder from "./MyOrder";

const Acc = () => {
  return (
    <div className="a-container">
      <div className="a-row">
        <h2 className="s-title">My Account</h2>
      </div>
      <div className="a-row">
        <Tabs>
          <TabList>
            <Tab>About Me</Tab>
            <Tab>Orders</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanel>
            <AboutMe />
          </TabPanel>
          <TabPanel>
            <MyOrder />
          </TabPanel>
          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Acc;
