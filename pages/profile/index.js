import { getSession } from "next-auth/react";
import React, { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Profile from "../../components/profile/Profile";

import Layout from "../../layout/Layout";

const Index = ({ session }) => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="grid grid-cols-12 px-20 gap-2 my-20 min-h-screen">
      <div className="col-span-3 ">
        <Profile session={session} tabs={tabs} setTabs={setTabs}></Profile>
      </div>
      <div className="col-span-9">
        {0 === tabs ? <Account></Account> : null}
        {1 === tabs ? <Password /> : null}
      </div>
    </div>
  );
};
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
export default Index;
