import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Footer from "./components/footor/page";
import Body from "./components/Body/body";
import Product from "./components/Products/Products";
import Ceramics from "./components/ceramics/ceramics";
import Bnew from "./components/bnew/page";
import Singup from "./components/singup/page";
import Global from "./components/Global/page";
export default function Home() {
  return (
   <div>
    <Navbar />
    <Body/>
    < Bnew />
    <Ceramics />
    <Product />
    <Singup />
    <Global />
    <Footer />
  
   </div>
  );
}
