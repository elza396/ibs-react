import React, {useEffect} from 'react';
import s from './Catalog.module.css';
import {Card} from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../../store/products/actions";
import {filteredProductsSelector} from "../../store/products/selectors";
import {isLoadingSelector} from "../../store/requests/selectors";

export const Catalog = () => {
    const dispatch = useDispatch();
    const filteredProducts = useSelector(filteredProductsSelector);
    const isLoading = useSelector(isLoadingSelector);

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return(
        <div className={s.catalog}>
            {filteredProducts.map(product=> {
                return <Card key={product.id} product={product}/>
            })}
        </div>
    )
}
