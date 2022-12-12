import axios from "axios";
import Campaigns from "../components/Campaigns";
import MenuWrapper from "../components/products/MenuWrapper";
import Reservation from "../components/Reservation";

export default function Home({ dataCat, dataProduct }) {
  return (
    <>
      <Campaigns></Campaigns>
      <MenuWrapper
        // productList={productList}
        // categoryList={categoryList}
        dataCat={dataCat}
        dataProduct={dataProduct}
      ></MenuWrapper>
      <div className="py-10">
        <Reservation></Reservation>
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  const category = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const dataCat = await category.json();

  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  const dataProduct = await product.json();

  return {
    props: {
      dataCat,
      dataProduct,
    },
  };
};
