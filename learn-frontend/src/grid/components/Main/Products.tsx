import React from 'react';

import Product from "./Product";

// images
import productImg from '../../img/productImg.png'

const Products = () => {
    return (
        <section className="content__products products">
            <h2 className="products__title">Товары</h2>
            <div className="products__items">
                <Product name={"Худи Series 400"} price={6500}  productImg={productImg} />
                <Product name={"Худи Series 400"} price={6500}  productImg={productImg} />
                <Product name={"Худи Series 400"} price={6500}  productImg={productImg} />
                <Product name={"Худи Series 400"} price={6500}  productImg={productImg} />
                <Product name={"Худи Series 400"} price={6500}  productImg={productImg} />
            </div>
        </section>
    );
};

export default Products;