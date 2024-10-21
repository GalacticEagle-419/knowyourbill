import React from "react";

import { PromptContainer, ChatWindow } from "../Components";
import AppContextProvider from "../Context/AppContext";

const Home = () => {

  return (
    <AppContextProvider>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full lg:w-2/6 bg-white shadow-md rounded-lg p-4">
          <PromptContainer />
        </div>
        <div className="w-full lg:w-4/6 bg-[#efeae2db] shadow-md rounded-lg p-4">
          <ChatWindow />
        </div>
      </div>
    </AppContextProvider>
  );
};

export default Home;
