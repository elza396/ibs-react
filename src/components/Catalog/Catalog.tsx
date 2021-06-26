import React, {useEffect} from 'react';
import s from './Catalog.module.css';
import {Card} from "./Card/Card";
import {IProduct} from "../../models/IProduct";
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../../store/products/actions";
import {productsSelector} from "../../store/products/selectors";

interface ICatalogProps {
    searchData: string;
}

export const Catalog = (props: ICatalogProps) => {
    const {searchData} = props;
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch])

    const selectedProducts: IProduct[] = products
        .filter(item => item.name.toLowerCase().includes(searchData));

    return(
        <div className={s.catalog}>
            {selectedProducts.map(product=> {
                return <Card key={product.id} product={product}/>
            })}
        </div>
    )
}
