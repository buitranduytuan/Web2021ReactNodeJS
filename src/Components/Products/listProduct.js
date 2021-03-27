import React, { Component, Fragment } from 'react'
import Banner from '../Layout/banner/banner'

export default class ListProduct extends Component {
    render() {
        return (
            <Fragment>
                {/* banner-2 */}
                <Banner />
                {/* //banner-2 */}
                {/* page */}
                <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <div className="container">
                            <ul className="w3_short">
                                <li>
                                    <a href="index.html">Home</a>
                                    <i>|</i>
                                </li>
                                <li>Electronics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* //page */}
                {/* top Products */}
                <div className="ads-grid py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        {/* tittle heading */}
                        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>M</span>obiles
                                <span>&amp;</span>
                            <span>C</span>omputers</h3>
                        {/* //tittle heading */}
                        <div className="row">
                            {/* product left */}
                            <div className="agileinfo-ads-display col-lg-9">
                                <div className="wrapper">
                                    {/* first section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <div className="row">
                                            <div className="col-md-4 product-men">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/m1.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Samsung Galaxy J7</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$200.00</span>
                                                            <del>$280.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Samsung Galaxy J7" />
                                                                    <input type="hidden" name="amount" defaultValue={200.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/m2.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">OPPO A37f</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$230.00</span>
                                                            <del>$250.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="OPPO A37f" />
                                                                    <input type="hidden" name="amount" defaultValue={230.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/m3.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Apple iPhone X</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$280.00</span>
                                                            <del>$300.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Apple iPhone X" />
                                                                    <input type="hidden" name="amount" defaultValue={280.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //first section */}
                                    {/* second section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <div className="row">
                                            <div className="col-md-4 product-men">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk1.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Infinix Hot S3</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$300.00</span>
                                                            <del>$320.00</del>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Infinix Hot S3" />
                                                                    <input type="hidden" name="amount" defaultValue={300.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk2.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Moto X4 (6 GB)</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$233.00</span>
                                                            <del>$240.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Moto X4 (6 GB)" />
                                                                    <input type="hidden" name="amount" defaultValue={233.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk3.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">iVooMi i Series</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$249.00</span>
                                                            <del>$260.00</del>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="iVooMi i Series" />
                                                                    <input type="hidden" name="amount" defaultValue={249.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //second section */}
                                    {/* 3rd section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                                        <div className="row">
                                            <div className="col-md-4 product-men">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk4.jpg" alt="" className="img-fluid" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Dell Vostro Laptop</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$252.00</span>
                                                            <del>$260.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Dell Vostro Laptop" />
                                                                    <input type="hidden" name="amount" defaultValue={252.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk5.jpg" alt="" className="img-fluid" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Acer Laptop</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$240.00</span>
                                                            <del>$260.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Acer Laptop" />
                                                                    <input type="hidden" name="amount" defaultValue={240.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk6.jpg" alt="" className="img-fluid" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Lenovo </a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$300.00</span>
                                                            <del>$320.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Alcatel Tablet" />
                                                                    <input type="hidden" name="amount" defaultValue={300.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //3rd section */}
                                    {/* fourth section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                                        <div className="row">
                                            <div className="col-md-4 product-men">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk7.jpg" alt="" className="img-fluid" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="product-new-top">New</span>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Intex Power Bank</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$100.00</span>
                                                            <del>$200.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Intex Power Bank" />
                                                                    <input type="hidden" name="amount" defaultValue={100.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk8.jpg" alt="" className="img-fluid" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="product-new-top">New</span>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">HP Wireless Printer</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$243.00</span>
                                                            <del>$250.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="HP Wireless Printer" />
                                                                    <input type="hidden" name="amount" defaultValue={243.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="/asset/images/mk9.jpg" alt="" className="img-fluid" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                                <a href="/productdetail" className="link-product-add-cart">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                            <a href="/productdetail">Alcatel Tablet</a>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$320.00</span>
                                                            <del>$350.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            <form action="#" method="post">
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                    <input type="hidden" name="add" defaultValue={1} />
                                                                    <input type="hidden" name="business" defaultValue=" " />
                                                                    <input type="hidden" name="item_name" defaultValue="Alcatel Tablet" />
                                                                    <input type="hidden" name="amount" defaultValue={320.00} />
                                                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                    <input type="hidden" name="return" defaultValue=" " />
                                                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* //fourth section */}
                                </div>
                            </div>
                            {/* //product left */}
                            {/* product right */}
                            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                                <div className="side-bar p-sm-4 p-3">
                                    <div className="search-hotel border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Brand</h3>
                                        <form action="#" method="post">
                                            <input type="search" placeholder="Search Brand..." name="search" required />
                                            <input type="submit" defaultValue=" " />
                                        </form>
                                        <div className="left-side py-2">
                                            <ul>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Samsung</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Red Mi</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Apple</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Nexus</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Motorola</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Micromax</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Lenovo</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Oppo</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Sony</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">LG</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">One Plus</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* ram */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Ram</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Less than 512 MB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">512 MB - 1 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">1 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">2 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">3 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">5 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">6 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">6 GB &amp; Above</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //ram */}
                                    {/* price */}
                                    <div className="range border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Price</h3>
                                        <div className="w3l-range">
                                            <ul>
                                                <li>
                                                    <a href="#">Under $1,000</a>
                                                </li>
                                                <li className="my-1">
                                                    <a href="#">$1,000 - $5,000</a>
                                                </li>
                                                <li>
                                                    <a href="#">$5,000 - $10,000</a>
                                                </li>
                                                <li className="my-1">
                                                    <a href="#">$10,000 - $20,000</a>
                                                </li>
                                                <li>
                                                    <a href="#">$20,000 $30,000</a>
                                                </li>
                                                <li className="mt-1">
                                                    <a href="#">Over $30,000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* //price */}
                                    {/* discounts */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Discount</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">5% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">10% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">20% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">30% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">50% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">60% or More</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //discounts */}
                                    {/* offers */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Offers</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Exchange Offer</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">No Cost EMI</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Special Price</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //offers */}
                                    {/* delivery */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Eligible for Cash On Delivery</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //delivery */}
                                    {/* arrivals */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Last 30 days</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Last 90 days</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="left-side py-2">
                                        <h3 className="agileits-sear-head mb-3">Availability</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Exclude Out of Stock</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //arrivals */}
                                </div>
                                {/* //product right */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* //top products */}
                {/* middle section */}
                <div className="join-w3l1 py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="join-agile text-left p-4">
                                    <div className="row">
                                        <div className="col-sm-7 offer-name">
                                            <h6>Smooth, Rich &amp; Loud Audio</h6>
                                            <h4 className="mt-2 mb-3">Branded Headphones</h4>
                                            <p>Sale up to 25% off all in store</p>
                                        </div>
                                        <div className="col-sm-5 offerimg-w3l">
                                            <img src="/asset/images/off1.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div className="join-agile text-left p-4">
                                    <div className="row ">
                                        <div className="col-sm-7 offer-name">
                                            <h6>A Bigger Phone</h6>
                                            <h4 className="mt-2 mb-3">Smart Phones 5</h4>
                                            <p>Free shipping order over $100</p>
                                        </div>
                                        <div className="col-sm-5 offerimg-w3l">
                                            <img src="/asset/images/off2.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* middle section */}
            </Fragment>
        )
    }
}
