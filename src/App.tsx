import React, {useState} from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Catalog} from "./components/Catalog/Catalog";
import {Product} from "./components/Product/Product";
import {Switch, Route, useRouteMatch} from "react-router";
import {MainPage} from "./components/MainPage/MainPage";
import {NAV_ITEMS, NAV_ROOT} from "./constants/navigation";


export const App = (): JSX.Element =>  {
    const [searchData, setSearchData] = useState<string>('');

    const match = useRouteMatch(`${NAV_ITEMS}/:productId`);

    const handleInputSearchForm = (data: string) => {
        const searchData = data.toLowerCase();
        setSearchData(searchData);
    }

    return(
        <div className={styles.content}>
            <Header onInput={handleInputSearchForm} isProductPageOpen={Boolean(match)} />
            <Switch>
                <Route exact path={NAV_ROOT}>
                    <MainPage />
                </Route>
                <Route exact path={NAV_ITEMS}>
                    <Catalog searchData={searchData} />
                </Route>
                <Route exact path={`${NAV_ITEMS}/:productId`}>
                    <Product />
                </Route>
            </Switch>
        </div>
    )
}
