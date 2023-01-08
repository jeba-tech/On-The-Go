import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import { AppContext } from "@/context/AppContext"
// import { AuthContext } from "@/context/AuthContext"
// import { useContext } from "react"
// import { GROUP_DETAILS_PATH } from "@/constants/routes"
// import { toast } from "react-toastify"
// import { subscribeNewsletter } from "@/services/query/subscribe"
import { useRouter } from "next/router"
// import { getLocaleString, getLocaleStringFromObject } from "@/utils/locales"
import SSLLogo from "../../assets/images/SSLLogo.png"
import logo from "../../assets/images/logo.png"
function SiteFooter() {
//   const { menuData } = useContext(AppContext)
//   const { isAuthorized } = useContext(AuthContext)
  const [inputText, setInputText] = useState("")
  const router = useRouter()

//   const onSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       if (inputText) {
//         const res = await subscribeNewsletter(inputText)
//         if (res.data.success) {
//           toast.success(res.data.message, {
//             position: toast.POSITION.TOP_RIGHT,
//           })
//         }
//       }
//     } catch (error) {
//       toast.warn(error.response.data.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       })
//     }
//     setInputText("")
//   }

  return (
    <div >
      <footer className="site-footer footer-v1">
        <div className="col-full" >
          <div className="before-footer-wrap" style = {{background: '#EFFFB2'}} >
            <div className="col-full">
              <div className="footer-newsletter">
                <div className="media">
                  <i className="footer-newsletter-icon tm tm-newsletter"></i>
                  <div className="media-body">
                    <div className="clearfix">
                      <div className="newsletter-header">
                        <h5 className="newsletter-title">
                        Sign up to Newsletter
                          {/* {getLocaleString("newsletter_signup", router.locale)} */}
                        </h5>
                        <span className="newsletter-marketing-text">
                        ...get weekly access to our best deals,
                          {/* {getLocaleString(
                            "newsletter_signup_subtitle",
                            router.locale
                          )} */}
                          <strong>
                            {" "}
                            tips and tricks
                            {/* {getLocaleString("tips_and_tricks", router.locale)} */}
                          </strong>
                        </span>
                      </div>
                      <div className="newsletter-body">
                        <form
                          className="newsletter-form d-flex"
                          method="POST"
                          onSubmit={(e) => onSubmit(e)}
                        >
                          <input
                            type="email"
                            // placeholder={getLocaleString(
                            //   "enter_your_email_address",
                            //   router.locale
                            // )}
                            placeholder="enter your email address"
                            name="subs"
                            value={inputText}
                            onChange={({ target: { value } }) =>
                              setInputText(value)
                            }
                          />
                          <button className="button desktop" type="submit">
                            {/* {getLocaleString("subscribe", router.locale)} */}
                            subscribe
                          </button>
                          <button className="button mobile" type="submit">
                            <i className="fa fa-bell"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="footer-widgets-block"  style = {{paddingTop:'15px'}} >
            <div className="row footer-logo-responsive">
              <div className="footer-contact mw-50 " style = {{paddingLeft:'55px'}}>
                <div className="footer-logo">
                  <Image
                     src={logo}
                    alt="Logo"
                    layout="intrinsic"
                    height={56}
                    width={200}
                  />
                </div>
                <div className="contact-payment-wrap">
                  <div className="footer-contact-info">
                    <div className="media">
                      <span className="media-left icon media-middle">
                        <i className="tm tm-call-us-footer"></i>
                      </span>
                      <div className="media-body">
                        <span className="call-us-title">
                          {/* {getLocaleString("call_us", router.locale)} */}
                          
                         GOT QUESTIONS? CALL US
                        </span>
                        <span className="call-us-text"  style = {{fontSize:'16px'}}>+88 09612483247</span>
                        <address className="footer-contact-address">

                        House No: 156, Road-12, Block E, level 9,Kemal Ataturk Avenue, Banani, Dhaka -1212, Bangladesh
                          {/* {getLocaleString("address", router.locale)} */}
                        </address>


                        <div className="footer-social-icons" >
                <ul className="social-icons nav d-block">
                <h6>Find us on:</h6>
                   
                  <div className="row pb-3 mx-auto">
                    
                  <li className="nav-item" >
                    <Link className="sm-icon-label-link nav-link" href="https://www.facebook.com/gprojukti.com.bd">
                      <i className="fa fa-facebook-square" style={{fontSize:"28px",color:"rgb(31, 176, 219)"}}></i>
                      {/* {getLocaleString("facebook", router.locale)} */}
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="sm-icon-label-link nav-link" href="https://www.youtube.com/@GProjukti">
                    <i class="fa fa-youtube-play" style={{fontSize:"28px",color:"red"}}></i>
                      {/* {getLocaleString("facebook", router.locale)} */}
                    </Link>
                  </li>

               



                  </div>
                 
            
               
                </ul>
              </div>
                       
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="footer-widgets footer-links" style={{paddingLeft: '47px'}}>
                <div >
                  <aside className="widget clearfix">
                    <div className="body">
                      <h4 className="widget-title">
                        {/* {getLocaleString("find_it_fast", router.locale)} */}

                        FIND IT FAST
                      </h4>
                      <div className="menu-footer-menu-1-container">
                        {/* <ul id="menu-footer-menu-1" className="menu">
                          {menuData?.map(
                            (i, idx) =>
                              idx < 5 && (
                                <li
                                  key={i.slug}
                                  className="menu-item animate-dropdown"
                                >
                                  <Link
                                    href={{
                                      pathname: GROUP_DETAILS_PATH,
                                      query: {
                                        group_slug: i.slug,
                                      },
                                    }}
                                  >
                                    <a title={i.name}>
                                      {getLocaleStringFromObject(
                                        i,
                                        router.locale
                                      )}
                                    </a>
                                  </Link>
                                </li>
                              )
                          )}
                        </ul> */}
                        <ul id="menu-footer-menu-1" className="menu">
                         
                                <li
                                
                                  className="menu-item animate-dropdown"
                                >
                                  <Link href="" >
                                  Computers & Tablets
                                  </Link>
                                </li>
                                <li
                                
                                  className="menu-item animate-dropdown"
                                >
                                  <Link href="" >
                                  Wearable Technology
                                  </Link>
                                </li>
                                <li
                                
                                  className="menu-item animate-dropdown"
                                >
                                  <Link href="" >
                                  Audio
                                  </Link>
                                </li>
                                <li
                                
                                  className="menu-item animate-dropdown"
                                >
                                  <Link href="" >
                                  Phones & Video Conferencing
                                  </Link>
                                </li>
                                <li
                                
                                  className="menu-item animate-dropdown"
                                >
                                  <Link href="" >
                                  TV & Home Theatre System
                                  </Link>
                                </li>
                            
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>

                <div >
                  <aside className="widget clearfix">
                    <div className="body">
                      <h4 className="widget-title">
                      CUSTOMER CARE
                        {/* {getLocaleString("customer_care", router.locale)} */}
                      </h4>
                      <div className="menu-footer-menu-3-container">
                        <ul id="menu-footer-menu-3" className="menu">
                          {/* {isAuthorized && ( */}
                            {/* <> */}
                              {/* <li className="menu-item"> */}
                                {/* <Link href={`/orders`}> */}
                                  {/* <a title="ORDERS"> */}
                                    {/* {getLocaleString(
                                      "my_orders",
                                      router.locale
                                    )} */}
                                  {/* </a> */}
                                {/* </Link> */}
                              {/* </li> */}
                              {/* <li className="menu-item"> */}
                                {/* <Link href={`/profile`}> */}
                                  {/* <a title="ACCOUNT"> */}
                                    {/* {getLocaleString(
                                      "my_account",
                                      router.locale
                                    )} */}
                                  {/* </a> */}
                                {/* </Link> */}
                              {/* </li> */}
                            {/* </> )} */}

                          

                         
                          <li className="menu-item">
                            <Link href={`/faq`} title="FAQ">
                            FAQ
                                {/* {getLocaleString("faq", router.locale)} */}
                             
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link href={`/about-us`} title="About-Us">
                            About Us
                                {/* {getLocaleString("about_us", router.locale)} */}
                            
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link href={`/refund-and-return-policy`} title="Return-&-Refund-policy">
                            Refund and return policy
                                {/* {getLocaleString("refund_and_return_policy", router.locale)} */}
                             
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link href={`/privacy-policy`} title="Privacy-policy">
                            Privacy policy
                                {/* {getLocaleString("privacy_policy", router.locale)} */}
                            
                            </Link>
                          </li>

                          <li className="menu-item">
                            <Link href={`/terms-and-conditions` } title="Terms And Conditions">
                            Terms & Conditions
                                {/* {getLocaleString(
                                  "terms_and_conditions",
                                  router.locale
                                )} */}
                             
                            </Link>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>

              
              <div className="footer-payment-info">
                    <div className="media">
                     
                      <div className="media-body">
                      
                        <div className="footer-payment-icons">
                          <Image
                            className="payment-icon-image" style = {{width:'100%',paddingTop:'100px'}} width={190} height={190}
                            src={SSLLogo}
                          />

    
                        </div>
                      </div>
                    </div>
                  </div>

            </div>
          </div>
          <div className="site-info">
            <div className="col-full">
              <div className="copyright" >
                Copyright &copy; 2022. Gprojukti.com Limited. All rights reserved.
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter


