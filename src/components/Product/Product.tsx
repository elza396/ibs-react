import React, {useCallback, useEffect, useState} from 'react';
import s from './Product.module.css';
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

    const loadItem = useCallback(
        async () => {
            try {
                const response = await axios.get(`${API_URL}item/${productId}`);
                setProduct(response.data.content);
            } catch (error) {
                console.error(error);
            }
        }, [productId]
    )

    useEffect(() => {
        void loadItem();
    }, [loadItem])


    if(!product) {
        return <p>Loading...</p>;
    }

    return(
        <div className={`${s.product} ${product.like ? s.liked : ''}`}>
            <div className={s.image}>
                <img src={API_URL + product.picture.path} alt={product.picture.alt} />
            </div>
            <div>
                <p className={s.title}>{product.name}</p>
                <p className={s.text}>{product.info}</p>
                <p className={s.subtitle}>Details</p>
                <p className={s.text}>{product.details}</p>
                <div className={s.details}>
                    <p className={s.price}>{CURRENCY[product.price.currency]}{product.price.value}</p>
                    <Counter />
                    <Button className={s.button}>Add to cart</Button>
                    <FavoriteIcon isLiked={product.like} />
                </div>
            </div>
        </div>
    )

}
