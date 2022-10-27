import React, {FC} from 'react';

interface ProductProps {
    price: number,
    name: string,
    productImg: any,
}

const Product: FC<ProductProps> = ({price, name, productImg}) => {
    return (
        <div className="products__item">
            <div className="products__image">
                <img src={productImg} alt=""/>
            </div>
            <div className="products__name">{name}</div>
            <span className="products__price">{price}₽</span>
            <a href="" className="products__button">Купить</a>
        </div>
    );
};

export default Product;