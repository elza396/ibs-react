import React, {useEffect, useState} from 'react';
import styles from './Product.module.css';
import axios from "axios";
import {Counter} from "./Counter/Counter";
import {Button} from "../Button/Button";
import {FavoriteIcon} from "../FavoriteIcon/FavoriteIcon";
import {API_URL} from "../../constants/API";
import {CURRENCY} from "../../constants/currency";
import {IProductDiscription} from "../../models/IProductDiscription";
import {useParams} from "react-router";

export const Product = () => {

    const {productId} = useParams<{productId: string}>();

    const [product, setProduct] = useState<IProductDiscription | null>(null);

    useEffect(() => {
        const loadItem = async () => {
            try {
                const response = await axios.get(`${API_URL}item/${productId}`);
                setProduct(response.data.content);
            } catch (error) {
                console.error(error);
            }
        }
        void loadItem();
    }, [productId])


    if(!product) {
        return <p>Loading...</p>;
    }

    return(
        <div className={`${styles.product} ${product.like ? styles.liked : ''}`}>
            <div className={styles.image}>
                <img src={API_URL + product.picture.path} alt={product.picture.alt} />
            </div>
            <div>
                <p className={styles.title}>{product.name}</p>
                <p className={styles.text}>{product.info}</p>
                <p className={styles.subtitle}>Details</p>
                <p className={styles.text}>{product.details}</p>
                <div className={styles.details}>
                    <p className={styles.price}>{CURRENCY[product.price.currency]}{product.price.value}</p>
                    <Counter />
                    <Button className={styles.button}>Add to cart</Button>
                    <FavoriteIcon isLiked={product.like} />
                </div>
            </div>
        </div>
    )

}
