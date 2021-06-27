import React from 'react';
import s from './Card.module.css';
import {FavoriteIcon} from "../../FavoriteIcon/FavoriteIcon";
import {API_URL} from "../../../constants/API";
import {CURRENCY} from "../../../constants/currency";
import {Link} from "react-router-dom";
import {IProduct} from "../../../models/IProduct";
import {NAV_ITEMS} from "../../../constants/navigation";

interface ICardProps {
    key: string;
    product: IProduct;
}

export const Card = (props: ICardProps): JSX.Element  => {
    const {product} = props;

    return(
        <Link to={`${NAV_ITEMS.path}/${product.id}`} className={s.card}>
            <FavoriteIcon classes={s.icon} isLiked={product.like} />
            <img className={s.image} src={API_URL + product.picture.path} alt={product.picture.alt}/>
            <p className={s.title}>{product.name}</p>
            <p className={s.price}>{CURRENCY[product.price.currency] + product.price.value}</p>
        </Link>
    )
}
