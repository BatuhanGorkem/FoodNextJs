import React from "react";
import About from "../../components/About";
const Index = ({ data }) => {
  return (
    <>
      <About data={data}></About>
    </>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
export default Index;
