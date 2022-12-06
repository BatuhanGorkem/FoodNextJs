import Campaigns from "../components/Campaigns";
import MenuWrapper from "../components/products/MenuWrapper";
import About from "../components/About";
import Reservation from "../components/Reservation";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <>
      <Campaigns></Campaigns>
      <MenuWrapper></MenuWrapper>
      <Reservation></Reservation>
    </>
  );
}
