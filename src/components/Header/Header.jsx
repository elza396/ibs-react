import React from 'react';
import styles from './Header.module.css';
import {SearchForm} from "./SearchForm/SearchForm";
import {NavBar} from "./NavBar/NavBar";
import {Button} from "../Button/Button";

export class Header extends React.Component {
    render() {
        return(
            <header className={styles.header}>
                <div className={styles.leftBlock}>
                    {this.props.isProductPageOpen && <Button onClick={this.props.onClickBackButton} className={styles.button}>&#60;</Button>}
                    {this.props.isProductPageOpen || <SearchForm onInput={this.props.onInput}/>}
                </div>
                <NavBar />
            </header>
        )
    }
}
