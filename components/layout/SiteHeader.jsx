import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import Sticky from "react-stickynode"
import Logo from "../../assets/images/logo.png"
// import TopBar from "./header/TopBar"
// import { Drawer, Radio, Space } from "antd"

// import MainMenu from "./header/MainMenu"
// import NavigationMenu from "./header/NavigationMenu"
// import Cart from "./header/Cart"
import {
  CART_PATH,
  HOME_PATH,
  PRODUCT_DETAILS_PATH,
  GROUP_DETAILS_PATH,
  PRODUCT_LIST_PATH,
  PROFILE_PATH,
  ORDER_PATH,
  SAVED_PC,
  PC_BUIDLER,
  ON_THE_GO_PATH,
  CAMPAIGN_PATH,
  REPAIR_PATH,
  SPECIAL_DAY_PATH,
} from "../../constants/routes"
// import { AppContext } from "@/context/AppContext"
// import { CartContext } from "@/context/CartContext"
// import { getProducts } from "@/services/query/products"
// import { useOutsideClickAlerter } from "@/hooks/useOutsideClickAlerter"
// import { getDiscountedPrice } from "@/utils/components/products"
// import { getDecimalValue } from "@/utils/number"
// import { Dropdown, Toast } from "react-bootstrap"
// import { AuthContext } from "@/context/AuthContext"
// import BottomNavMenu from "./BottomNavMenu"
// import { en_locale, bn_locale } from "@/locales"
// import { getLocaleString } from "@/utils/locales"
// import Toggle from "../FormInput/Toggle"
// import { LocalStorage } from "@/services/storage/localstorage"
// import { PromptLoginModal } from "components/Login/PromptLoginModal"
// import on_the_go from "@/assets/gifs/on_the_go.gif"
// import pc_builder from "@/assets/gifs/pc_builder.gif"
import logo from "../../assets/images/logo.png"
const SiteHeader = () => {
  const router = useRouter()
  // const { isAuthorized, logout } = useContext(AuthContext)
  // const [show, setShow] = useState(false)
  // const { menuData } = useContext(AppContext)
  // const cartContext = useContext(CartContext)
  // const searchResultsContainerRef = useRef()
  // const [searchText, setSearchText] = useState("")
  // const [searchResults, setSearchResults] = useState([])
  // const [showSearchResults, setShowSearchResults] = useState(false)
  // const [isSearching, setIsSearching] = useState(false)
  // const [hideSearch, setHideSearch] = useState(false)
  // const [toggle, setToggle] = useState(false)
  // const [open, setOpen] = useState(false)
  // const showDrawer = () => {
  //   setOpen(true)
  // }
  // const onClose = () => {
  //   setOpen(false)
  // }
  // const { locale } = router
  // const locale_strings = router.locale === "en" ? en_locale : bn_locale

  // useEffect(() => {
  //   const localStorageData =
  //     String(LocalStorage.getData(localStorage, "LOCALE")) === "bn"
  //       ? "bn"
  //       : "en"
  //   setToggle(localStorageData === "bn" ? true : false)
  //   if (localStorageData === router.locale) return
  //   router.push(router.asPath, undefined, {
  //     locale: localStorageData,
  //     scroll: false,
  //   })
  // }, [router.asPath, router.locale])

  // useEffect(() => {
  //   LocalStorage.setData(localStorage, "LOCALE", toggle ? "bn" : "en")

  //   if ((router.locale === "bn") === toggle) return
  //   router.push(router.asPath, undefined, {
  //     locale: toggle ? "bn" : "en",
  //     scroll: false,
  //   })
  // }, [toggle])

  // const handleSearchClose = useCallback(() => {
  //   setShowSearchResults(false)
  // }, [])

  // const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  //   <div
  //     ref={ref}
  //     onClick={(e) => {
  //       e.preventDefault()
  //       onClick(e)
  //     }}
  //     className="avatar-font cursor-pointer"
  //   >
  //     <i className="fa fa-user-circle"></i>
  //     {/* <i className="fa fa-angle-down ml-2 mt-2"></i> */}
  //   </div>
  // ))

  // CustomToggle.displayName = "CustomToggle"

  // useOutsideClickAlerter(searchResultsContainerRef, handleSearchClose)

  // const handleSearch = useCallback(
  //   async (value, showAll = false) => {
  //     setSearchText(value)

  //     if (value?.length !== 0 && showAll) {
  //       router.push({
  //         pathname: PRODUCT_LIST_PATH,
  //         query: {
  //           search: value,
  //         },
  //       })
  //       setHideSearch(false)
  //       setSearchResults([])
  //       setShowSearchResults(false)
  //       setSearchText("")
  //       return
  //     }

  //     setIsSearching(true)
  //     const response = await getProducts({ search: value, page_size: 5 })
  //     setIsSearching(false)
  //     setHideSearch(false)
  //     setSearchResults(response)
  //   },
  //   [router]
  // )

  // const handleSearchFocus = useCallback(() => {
  //   if (searchText) handleSearch(searchText)
  //   setShowSearchResults(true)
  // }, [searchText, handleSearch])

  // useEffect(() => {
  //   if (searchResults.length) setShowSearchResults(true)
  // }, [searchResults])

  // console.log(searchResults, "stut shsin");

  return (
    <>
    

    
      <header
        id="masthead"
        className="site-header header-v2"
        // ref={searchResultsContainerRef}
      >
        <div className="desktop-only ">
          <Sticky
            enabled
            innerActiveClass={"z-index-l1 bg-white c-pt-2 pb-3"}
            activeClass={"w-100 sticky-remove-block"}
          >
            <div className="row col-full">
             

              <div className="site-branding">
                <Link href={HOME_PATH}   className="custom-logo-link"
                    style={{ position: "absolute", top: "-25px", left: 0 }}>
                  
                    <Image src={logo} alt={"Logo"} />
                  
                </Link>
              </div>
              {/* <MainMenu data={menuData} /> */}
            

       
            </div>
          </Sticky>
        </div>
        
        <div className="col-full handheld-only">
          <div className="handheld-header">
            <div className="row justify-content-between align-items-start">

          
              <div className="site-branding">
              
                {/* <Link href={HOME_PATH}>
                  <a className="custom-logo-link" rel="home">
                    <Image src={Logo} alt={"Logo"} />
                  </a>
                </Link> */}
              </div>
              {/* Lang Toggle Bar */}
              {/* <div className="lang_toggle_btn mr-3 mobile mt-2 d-flex align-items-center">
              
                <div className="" style={{ marginRight: "20px" }}>
                  {isAuthorized ? (
                    <Link href="/profile" passHref={true}>
                      <div className="mobile-bottom-nav__item">
                        <a className="mobile-bottom-nav__item-content">
                          <i className="fa fa-user" />
                          {getLocaleString("profile", router.locale)}
                        </a>
                      </div>
                    </Link>
                  ) : (
                    <PromptLoginModal>
                      <div className="mobile-bottom-nav__item">
                        <a className="mobile-bottom-nav__item-content">
                          <i className="fa fa-user" />
                          {getLocaleString("sign_in", router.locale)}
                        </a>
                      </div>
                    </PromptLoginModal>
                  )}
                </div>
                <Toggle
                  value={toggle}
                  setValue={setToggle}
                  onText="বাং"
                  offText="En"
                />
              </div> */}
            </div>
            <div className="sticky-wrapper">
              <div className="techmarket-sticky-wrap">
                <div className="row">
                  {/* <NavigationMenu categories={menuData} /> */}
                  {/* <div className="site-search">
                    <div className="widget woocommerce widget_product_search">
                      <form
                        role="search"
                        className="woocommerce-product-search"
                      >
                        <label
                          className="screen-reader-text"
                          htmlFor="woocommerce-product-search-field-0"
                        >
                          Search for:
                        </label>
                        <input
                          type="search"
                          id="woocommerce-product-search-field-0"
                          className="search-field"
                          placeholder={getLocaleString(
                            "search_product",
                            router.locale
                          )}
                          value={searchText}
                          onChange={({ target: { value } }) =>
                            handleSearch(value)
                          }
                          onFocus={handleSearchFocus}
                          autoComplete={"off"}
                        />

                        <span
                          onClick={() => {
                            handleSearch(searchText, true)
                          }}
                          className="mobile-searchbox-icon-area"
                        >
                          <i className="fa fa-search"></i>
                        </span>
                      </form>
                    </div>
                  </div> */}
                  {/* <Link href={CART_PATH}>
                    <a
                      className="handheld-header-cart-link has-icon"
                      title="View your shopping cart"
                    >
                      <i className="tm tm-shopping-bag"></i>
                      <span className="count">
                        {cartContext.getCartTotalQuantity()}
                      </span>
                    </a>
                  </Link> */}
                  {/* <BottomNavMenu /> */}
                </div>
                {/* {showSearchResults}
                {searchText &&
                !isSearching &&
                showSearchResults &&
                searchResults.length ? (
                  <div
                    className={`search-result-block px-5 mt-3  flex-column justify-content-between ${
                      hideSearch ? "d-none" : "d-block"
                    }`}
                  >
                    <div className="items">
                      {searchResults.map((i) => (
                        <Link
                          key={i.id}
                          href={{
                            pathname: PRODUCT_DETAILS_PATH,
                            query: {
                              product_slug: i.slug,
                            },
                          }}
                        >
                          <a
                            onClick={() => {
                              setHideSearch(true)
                              setSearchText("")
                            }}
                          >
                            <div className="item d-flex my-2">
                              <div className="mobile-searchbox-result-item-image ">
                                <Image
                                  src={i.images}
                                  alt={i.name}
                                  width={70}
                                  height={50}
                                  layout={"responsive"}
                                />
                              </div>

                              <div className="ml-2">
                                <p className="title m-0">{i.name}</p>
                                <p className="title m-0">
                                  <span className="price">
                                    {i?.selling_price ===
                                    i?.updated_selling_price ? (
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">
                                          ৳
                                        </span>
                                        {getDecimalValue(
                                          i?.updated_selling_price
                                        )}
                                      </span>
                                    ) : (
                                      <>
                                        <ins>
                                          <span className="amount">
                                            <span className="woocommerce-Price-currencySymbol">
                                              ৳
                                            </span>
                                            {getDecimalValue(
                                              i?.updated_selling_price
                                            )}
                                          </span>
                                        </ins>
                                        <del>
                                          <span className="amount">
                                            <span className="woocommerce-Price-currencySymbol">
                                              ৳
                                            </span>
                                            {getDecimalValue(i?.selling_price)}
                                          </span>
                                        </del>
                                      </>
                                    )}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                    <span
                      className="align-self-center btn btn-link p-0"
                      onClick={() => handleSearch(searchText, true)}
                    >
                      View All Results
                    </span>
                  </div>
                ) : null} */}
              </div>
            </div>
            
          </div>
        </div>
      </header>
    </>
  )
}

export default SiteHeader
