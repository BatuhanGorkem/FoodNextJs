import axios from "axios";
import Campaigns from "../components/Campaigns";
import MenuWrapper from "../components/products/MenuWrapper";
import Reservation from "../components/Reservation";

export default function Home({ categoryList }) {
  return (
    <>
      <Campaigns></Campaigns>
      <MenuWrapper categoryList={categoryList}></MenuWrapper>
      <Reservation></Reservation>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};
