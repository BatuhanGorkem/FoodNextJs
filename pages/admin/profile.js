import React, { useState } from "react";
import Category from "../../components/admin/Category";
import Footer from "../../components/admin/Footer";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";
import Profile from "../../components/admin/Profile";

const AdminProfile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="grid grid-cols-12 px-20 gap-2 my-20 min-h-screen">
      <div className="col-span-3 ">
        <Profile tabs={tabs} setTabs={setTabs}></Profile>
      </div>
      <div className="col-span-9">
        {0 === tabs ? <Products></Products> : null}
        {1 === tabs ? <Order></Order> : null}
        {2 === tabs ? <Category></Category> : null}
        {3 === tabs ? <Footer></Footer> : null}
      </div>
    </div>
  );
};
// export const getServerSideProps = async (ctx) => {
//   const { token } = ctx.req.cookies;
//   if (token === process.env.ADMIN_TOKEN) {
//     return {
//       redirect: {
//         destination: "/admin/profile",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };
export default AdminProfile;
