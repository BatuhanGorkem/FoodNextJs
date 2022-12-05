import React, { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Profile from "../../components/profile/Profile";

import Layout from "../../layout/Layout";

const Index = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <Layout>
      <div className="grid grid-cols-12 px-20 gap-2 my-20 min-h-screen">
        <div className="col-span-3 ">
          <Profile tabs={tabs} setTabs={setTabs}></Profile>
        </div>
        <div className="col-span-9">
          {0 === tabs ? <Account></Account> : null}
          {1 === tabs ? <Password /> : null}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
