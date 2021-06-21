import React from 'react';
import styles from './Card.module.css';
import {FavoriteIcon} from "../../FavoriteIcon/FavoriteIcon";
import {API_URL} from "../../../constants/API";
import {CURRENCY} from "../../../constants/currency";

export class Card extends React.Component {
    render() {
        const product = this.props.product;
        return(
            <div onClick={this.props.onClick} className={styles.card}>
                <FavoriteIcon classes={styles.icon} isLiked={product.like} />
                <img className={styles.image} src={API_URL + product.picture.path} alt={product.picture.alt}/>
                <p className={styles.title}>{product.name}</p>
                <p className={styles.price}>{CURRENCY[product.price.currency] + product.price.value}</p>
            </div>
        )
    }
}
