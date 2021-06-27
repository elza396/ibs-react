import React, {useEffect} from 'react';
import s from './Product.module.css';
import {Counter} from "./Counter/Counter";
import {Button} from "../Button/Button";
import {FavoriteIcon} from "../FavoriteIcon/FavoriteIcon";
import {API_URL} from "../../constants/API";
import {CURRENCY} from "../../constants/currency";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loadProductById} from "../../store/products/actions";
import {productsSlice} from "../../store/products/reducer";
import {currentProductSelector} from "../../store/products/selectors";
import {isLoadingSelector} from "../../store/requests/selectors";

export const Product = () => {

    const {productId} = useParams<{productId: string}>();
    const dispatch = useDispatch();
    const product = useSelector(currentProductSelector);
    const isLoading = useSelector(isLoadingSelector);

    useEffect(() => {
        dispatch(loadProductById(productId));
        return () => {
            dispatch(productsSlice.actions.setCurrentProduct(null));
        };
    }, [productId, dispatch])

    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    return (
        product && (<div className={`${s.product} ${product.like ? s.liked : ''}`}>
            <div className={s.image}>
                <img src={API_URL + product.picture.path} alt={product.picture.alt}/>
            </div>
            <div>
                <p className={s.title}>{product.name}</p>
                <p className={s.text}>{product.info}</p>
                <p className={s.subtitle}>Details</p>
                <p className={s.text}>{product.details}</p>
                <div className={s.details}>
                    <p className={s.price}>{CURRENCY[product.price.currency]}{product.price.value}</p>
                    <Counter/>
                    <Button className={s.button}>Add to cart</Button>
                    <FavoriteIcon isLiked={product.like}/>
                </div>
            </div>
        </div>)
    )
}
