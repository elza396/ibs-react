import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Catalog} from "./components/Catalog/Catalog";
import {Product} from "./components/Product/Product";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            searchData: '',
        }
        this.handleClickProduct = this.handleClickProduct.bind(this);
        this.handleInputSearchForm = this.handleInputSearchForm.bind(this);
        this.handleClickBackButton = this.handleClickBackButton.bind(this);
    }

    handleClickProduct (productId) {
        this.setState({
            productId: productId
        })
    }

    handleClickBackButton () {
        this.setState({
            productId: null
        })
    }

    handleInputSearchForm (data) {
        const searchData = data.toLowerCase();
        this.setState({
            searchData: searchData
        })
    }

    render() {
        return(
            <div className={styles.content}>
                <Header onInput={this.handleInputSearchForm} isProductPageOpen={!!this.state.productId} onClickBackButton={this.handleClickBackButton} />
                {this.state.productId ? <Product productId={this.state.productId}/> : <Catalog searchData={this.state.searchData} onClick={this.handleClickProduct}/>}
            </div>
            )
        }
}
