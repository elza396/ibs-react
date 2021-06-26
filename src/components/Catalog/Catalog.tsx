import React, {useState, useEffect, useCallback} from 'react';
import s from './Catalog.module.css';
import {Card} from "./Card/Card";
import axios from "axios";
import {API_URL} from "../../constants/API";
import {IProduct} from "../../models/IProduct";

interface ICatalogProps {
    searchData: string;
}

export const Catalog = (props: ICatalogProps) => {
    const {searchData} = props;

    const [products, setProducts] = useState<IProduct[]>([]);

    const loadItems = useCallback(
        async () => {
            try {
                const response = await axios.get(`${API_URL}item`);
                setProducts(response.data.content as IProduct[]);
            } catch (error) {
                console.error(error);
            }
        }, []);

    useEffect(() => {
        void loadItems();
    }, [loadItems])

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
