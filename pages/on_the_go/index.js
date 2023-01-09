/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { PageMeta } from "../../components/PageMeta"
import { useRouter } from "next/router"
// import { getLocaleString } from "@/utils/locales"
// import { getOnTheGoProducts } from "services/query/products"
// import { getDecimalValue } from "utils/number"
// import { getLocaleStringFromObject } from "utils/locales"
// import { PromptLoginModal } from "@/components/Login/PromptLoginModal"
// import { CHECKOUT_PATH } from "@/constants/routes"
// import LazyLoad from "react-lazy-load"
// import Image from "next/image"
// import { CartContext } from "context/CartContext"
// import { Loader } from "@/components/layout/Loader"
// import InfiniteScroll from "react-infinite-scroll-component"
import logo from "../../assets/images/logo.png"
import Image from "next/image"

const ON_THE_GO = () => {
  // const router = useRouter()
  // const [products, setProducts] = useState([])
  // const [visible, setVisible] = useState(false)
  // const cartContext = useContext(CartContext)
  // const [addToCartModal, setAddToCartModal] = useState(false)
  // const [selectedProduct, setSelectedProduct] = useState()
  // const [isLoading, setIsLoading] = useState(false)
  // const handleCartModalClose = () => setAddToCartModal(false)
  // const handleCartModalShow = () => setAddToCartModal(true)
  // const [hasMore, setHasMore] = useState(true)
  // const [currentPage, setCurrentPage] = useState(1)
  // const handleQuantityChange = (quantity) => {
  //   cartContext.handleQuantityChange(selectedProduct, quantity)
  // }

  // const getProductData = async () => {
  //   setCurrentPage(currentPage + 1)
  //   // setIsLoading(true)
  //   const data = await getOnTheGoProducts(currentPage)
  //   var currentPage = currentPage + 1
  //   // setProducts(data)
  //   // console.log(data.length)
  //   if (data) {
  //     setProducts((product) => [...product, ...data])
  //   } else {
  //     // setProducts([])
  //     setIsLoading(false)
  //     setHasMore(false)
  //     return
  //   }
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   getProductData()
  // }, [])

  return (
    <div className="col-full">
      <PageMeta title={"Deals & offers"} />
      <nav className="woocommerce-breadcrumb">
        <Link href={`/`}>
          Home
          {/* <a>{getLocaleString("home", router.locale)}</a> */}
        </Link>
        <span className="delimiter">
          <i className="tm tm-breadcrumbs-arrow-right"></i>
        </span>
        ON THE GO
        {/* {getLocaleString("on_the_go", router.locale)} */}
      </nav>
      {/* {!isLoading ? ( */}
      <div className="scrollableDiv">
        <div
          endMessage={<p>Nothing more to show</p>}
          style={{ overflow: "hidden !important" }}
        >
          <div style={{ minHeight: "80vh" }}>
            <div className={`tab-content container-fluid mb-5`}>
              <div id="grid" className="tab-pane active" role="tabpanel">
                <div className="col-lg-12">
                  <div id="store" className="products">
                   
                      <div  className="product">
                        <Link href={``}>
                          <div className="woocommerce-LoopProduct-link">
                            <div>
                            <Image src={logo} alt={"Logo"}   className="wp-post-image product_img fit-contain"/>
                              {/* <
                                src={logo}
                                className="wp-post-image product_img fit-contain"
                                // alt={productData?.name}
                              /> */}
                            </div>
                            <span className="price">
                             
                                {/* <span className="amount">
                                  ৳{" "}
                                  677,897
                                  {getDecimalValue(
                                    productData?.updated_selling_price.toLocaleString(
                                      router.locale
                                    )
                                  )}
                                </span> */}
                             
                                <>
                                  <span className="amount">
                                    ৳{" "}
                                    677,897
                                    {/* {getDecimalValue(
                                      productData?.updated_selling_price.toLocaleString(
                                        router.locale
                                      )
                                    )}{" "} */}
                                  </span>
                                  {/* <del>
                                    {" "}
                                    <span className="amount woocommerce-Price-currencySymbol">
                                      {" "}
                                      ৳
                                      {getDecimalValue(
                                        productData?.selling_price.toLocaleString(
                                          router.locale
                                        )
                                      )}
                                      1977,889
                                    </span>
                                  </del> */}
                                </>
                            
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              {/* {getLocaleStringFromObject(
                                productData,
                                router.locale
                              )} */}

                              gsdjhfgdjsfjkdsjkjkdfhgjk
                            </h2>
                          </div>
                        </Link>

                        <div className="">
                          <button
                            // disabled={
                            //   productData?.stock_available ? false : true
                            // }
                            // onClick={() => {
                            //   handleCartModalShow()
                            //   cartContext.addToCart(productData)
                            //   setSelectedProduct(productData.sku)
                            // }}
                            className="button add_to_cart_button col-12"
                            rel="nofollow"
                          >
                            {/* {productData?.stock_available
                              ? getLocaleString("add_to_cart", router.locale)
                              : getLocaleString("out_of_stock", router.locale)} */}

                              Add to Cart
                          </button>
                        
                            <button
                             
                              className="button add_to_cart_button col-12"
                              rel="nofollow"
                            >
                              {/* {getLocaleString("checkout", router.locale)} */}
                              Quick Checkout
                            </button>
                       
                        </div>
                      </div>
                   
                  </div>
                </div>
                <div className="col-lg-12">
                  <div id="store" className="products">
                   
                      <div  className="product">
                        <Link href={``}>
                          <div className="woocommerce-LoopProduct-link">
                            <div>
                            <Image src={logo} alt={"Logo"}   className="wp-post-image product_img fit-contain"/>
                              {/* <
                                src={logo}
                                className="wp-post-image product_img fit-contain"
                                // alt={productData?.name}
                              /> */}
                            </div>
                            <span className="price">
                             
                                {/* <span className="amount">
                                  ৳{" "}
                                  677,897
                                  {getDecimalValue(
                                    productData?.updated_selling_price.toLocaleString(
                                      router.locale
                                    )
                                  )}
                                </span> */}
                             
                                <>
                                  <span className="amount">
                                    ৳{" "}
                                    677,897
                                    {/* {getDecimalValue(
                                      productData?.updated_selling_price.toLocaleString(
                                        router.locale
                                      )
                                    )}{" "} */}
                                  </span>
                                  {/* <del>
                                    {" "}
                                    <span className="amount woocommerce-Price-currencySymbol">
                                      {" "}
                                      ৳
                                      {getDecimalValue(
                                        productData?.selling_price.toLocaleString(
                                          router.locale
                                        )
                                      )}
                                      1977,889
                                    </span>
                                  </del> */}
                                </>
                            
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              {/* {getLocaleStringFromObject(
                                productData,
                                router.locale
                              )} */}

                              gsdjhfgdjsfjkdsjkjkdfhgjk
                            </h2>
                          </div>
                        </Link>

                        <div className="">
                          <button
                            // disabled={
                            //   productData?.stock_available ? false : true
                            // }
                            // onClick={() => {
                            //   handleCartModalShow()
                            //   cartContext.addToCart(productData)
                            //   setSelectedProduct(productData.sku)
                            // }}
                            className="button add_to_cart_button col-12"
                            rel="nofollow"
                          >
                            {/* {productData?.stock_available
                              ? getLocaleString("add_to_cart", router.locale)
                              : getLocaleString("out_of_stock", router.locale)} */}

                              Add to Cart
                          </button>
                        
                            <button
                             
                              className="button add_to_cart_button col-12"
                              rel="nofollow"
                            >
                              {/* {getLocaleString("checkout", router.locale)} */}
                              Quick Checkout
                            </button>
                       
                        </div>
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <InfiniteScroll
          dataLength={products.length}
          next={getProductData}
          hasMore={hasMore}
          // loader={<h3> Loading...</h3>}
          loader={<Loader />}
          endMessage={<p>Nothing more to show</p>}
          style={{ overflow: "hidden !important" }}
        >
          <div style={{ minHeight: "80vh" }}>
            <div className={`tab-content container-fluid mb-5`}>
              <div id="grid" className="tab-pane active" role="tabpanel">
                <div className={`columns-6`}>
                  <div id="store" className="products">
                    {products.map((productData, idx) => (
                      <div key={idx} className="product">
                        <Link href={`/products/${productData?.slug}`}>
                          <a className="woocommerce-LoopProduct-link">
                            <div>
                              <img
                                src={productData?.images}
                                className="wp-post-image product_img fit-contain"
                                alt={productData?.name}
                              />
                            </div>
                            <span className="price">
                              {productData?.updated_selling_price ===
                              productData?.selling_price ? (
                                <span className="amount">
                                  ৳{" "}
                                  {getDecimalValue(
                                    productData?.updated_selling_price.toLocaleString(
                                      router.locale
                                    )
                                  )}
                                </span>
                              ) : (
                                <>
                                  <span className="amount">
                                    ৳{" "}
                                    {getDecimalValue(
                                      productData?.updated_selling_price.toLocaleString(
                                        router.locale
                                      )
                                    )}{" "}
                                  </span>
                                  <del>
                                    {" "}
                                    <span className="amount woocommerce-Price-currencySymbol">
                                      {" "}
                                      ৳
                                      {getDecimalValue(
                                        productData?.selling_price.toLocaleString(
                                          router.locale
                                        )
                                      )}
                                    </span>
                                  </del>
                                </>
                              )}
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              {getLocaleStringFromObject(
                                productData,
                                router.locale
                              )}
                            </h2>
                          </a>
                        </Link>

                        <div className="hover-area">
                          <button
                            disabled={
                              productData?.stock_available ? false : true
                            }
                            onClick={() => {
                              handleCartModalShow()
                              cartContext.addToCart(productData)
                              setSelectedProduct(productData.sku)
                            }}
                            className="button add_to_cart_button col-12"
                            rel="nofollow"
                          >
                            {productData?.stock_available
                              ? getLocaleString("add_to_cart", router.locale)
                              : getLocaleString("out_of_stock", router.locale)}
                          </button>
                          <PromptLoginModal
                            redirectTo={CHECKOUT_PATH}
                            setVisible={setVisible}
                            onClick={() => {
                              cartContext.addToCart(productData)
                            }}
                          >
                            <button
                              disabled={
                                productData?.stock_available ? false : true
                              }
                              className="button add_to_cart_button col-12"
                              rel="nofollow"
                            >
                              {getLocaleString("checkout", router.locale)}
                            </button>
                          </PromptLoginModal>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InfiniteScroll> */}
      </div>
      {/* ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <Loader />
        </div>
      )} */}
    </div>
  )
}

export default ON_THE_GO
