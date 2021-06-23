import React from 'react';
import styles from './Header.module.css';
import {SearchForm} from "./SearchForm/SearchForm";
import {NavBar} from "./NavBar/NavBar";
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";
import {NAV_ITEMS} from "../../constants/navigation";

interface IHeaderProps {
    onInput: (searchData: string) => void;
    isProductPageOpen: boolean;
}

export const Header = (props: IHeaderProps): JSX.Element => {
    const {onInput, isProductPageOpen} = props;

    return(
        <header className={styles.header}>
            <div className={styles.leftBlock}>
                {props.isProductPageOpen &&
                <Link to={NAV_ITEMS}>
                    <Button className={styles.button}>&#60;</Button>
                </Link>
                }
                {isProductPageOpen || <SearchForm onInput={onInput}/>}
            </div>
            <NavBar />
        </header>
    )

}
