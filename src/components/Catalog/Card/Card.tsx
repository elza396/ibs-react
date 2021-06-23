import React from 'react';
import styles from './Card.module.css';
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
    const product: IProduct = props.product;
    return(
        <Link to={`${NAV_ITEMS}/${product.id}`} className={styles.card}>
            <FavoriteIcon classes={styles.icon} isLiked={product.like} />
            <img className={styles.image} src={API_URL + product.picture.path} alt={product.picture.alt}/>
            <p className={styles.title}>{product.name}</p>
            <p className={styles.price}>{CURRENCY[product.price.currency] + product.price.value}</p>
        </Link>
    )
}
