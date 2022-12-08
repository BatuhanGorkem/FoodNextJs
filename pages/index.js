import axios from "axios";
import Campaigns from "../components/Campaigns";
import MenuWrapper from "../components/products/MenuWrapper";
import Reservation from "../components/Reservation";

export default function Home({ categoryList, productList }) {
  return (
    <>
      <Campaigns></Campaigns>
      <MenuWrapper
        productList={productList}
        categoryList={categoryList}
      ></MenuWrapper>
      <Reservation></Reservation>
    </>
  );
}
export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};
