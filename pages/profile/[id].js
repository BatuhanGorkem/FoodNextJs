import { getSession } from "next-auth/react";
import React, { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Profile from "../../components/profile/Profile";
import axios from "axios";

const Index = ({ session, user }) => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="grid grid-cols-12 px-20 gap-2 my-20 min-h-screen">
      <div className="col-span-3 ">
        <Profile user={user} tabs={tabs} setTabs={setTabs}></Profile>
      </div>
      <div className="col-span-9">
        {0 === tabs ? <Account></Account> : null}
        {1 === tabs ? <Password /> : null}
      </div>
    </div>
  );
};
export async function getServerSideProps({ req, params }) {
  // const session = await getSession({ req });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth/login",
  //       permanent: false,
  //     },
  //   };
  // }
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );
  return {
    props: {
      user: user ? user.data : null,
    },
  };
}

export default Index;
