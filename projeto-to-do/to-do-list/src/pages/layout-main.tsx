import { Outlet } from "react-router-dom";
import Container from "../components/container";
import Text from "../components/text";
import Header from "../core-components/header";
import Main from "../core-components/main-content";
import Footer from "../core-components/footer";

export default function LayoutMain(){
  return <>
    <Header/>
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </>
}