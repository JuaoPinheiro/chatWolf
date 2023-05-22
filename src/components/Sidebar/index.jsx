/* eslint-disable no-unused-vars */
import React from "react";
import SidebarHeader from "../SidebarHeader/index";
import SidebarChats from "../SidebarChats/index";

import * as C from "./style";

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
};

export default Sidebar;
