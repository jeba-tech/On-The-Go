// import '../styles/globals.css'
import { useEffect, useState } from "react"
import "../assets/styles/globals.scss"

// import { AppContextProvider } from "@/context/AppContext";
// import { AuthContextProvider } from "@/context/AuthContext";
// import CartContextProvider from "@/context/CartContext";


// import { getProductGroups } from "@/services/query/products";


// import ShowModalContextProvider from "@/context/ShowModalContext";
// import PcBuildContextProvier from "@/context/PcBuildContext";
// import Welcome from "pages/Welcome/Welcome";


// import { axios } from "./../services/request/axiosConfig";
import https from "https";
import SiteHaeder from "../components/layout/SiteHeader"
import SiteFooter from "../components/layout/SiteFooter";
// axios.defaults.httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// })

function GprojuktiApp({ Component, pageProps }) {

  const [menuGroups, setMenuGroups] = useState([]);
  // const [welcome] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getProductGroups();
  //     setMenuGroups(data.splice(0,14));
  //   })();
  // }, []);

  return (
    <div id="page" className="hfeed site">
                 <SiteHaeder />
                <Component {...pageProps} />
               <SiteFooter/>
              </div>
  )
}

export default GprojuktiApp