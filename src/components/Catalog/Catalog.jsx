import React from 'react';
import styles from './Catalog.module.css';
import {Card} from "./Card/Card";
import axios from "axios";
import {API_URL} from "../../constants/API";

export class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        void this.loadItems();
    }

    async loadItems () {
        try {
            const response = await axios.get(`${API_URL}item`);
            this.setState({
                products: response.data.content
            })
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const {searchData} = this.props;
        const selectedProducts = this.state.products
            .filter(item => item.name.toLowerCase().includes(searchData));

        return(
            <div className={styles.catalog}>
                {selectedProducts.map(product => {
                    return <Card onClick={() => this.props.onClick(product.id)} key={product.id} product={product}/>
                })}
            </div>
        )
    }
}
