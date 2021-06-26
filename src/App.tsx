import React, {useState} from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Catalog} from "./components/Catalog/Catalog";
import {Product} from "./components/Product/Product";
import {Switch, Route, useRouteMatch} from "react-router";
import {MainPage} from "./components/MainPage/MainPage";
import {NAV_ITEMS, NAV_ROOT} from "./constants/navigation";


export const App = (): JSX.Element =>  {
    const [searchData, setSearchData] = useState<string>('');

    const match = useRouteMatch(`${NAV_ITEMS.path}/:productId`);

    const handleInputSearchForm = (data: string) => {
        const searchData = data.toLowerCase();
        setSearchData(searchData);
    }

    return(
        <div className={s.content}>
            <Header onInput={handleInputSearchForm} isProductPageOpen={Boolean(match)} />
            <Switch>
                <Route exact path={NAV_ROOT.path}>
                    <MainPage />
                </Route>
                <Route exact path={NAV_ITEMS.path}>
                    <Catalog searchData={searchData} />
                </Route>
                <Route exact path={`${NAV_ITEMS.path}/:productId`}>
                    <Product />
                </Route>
            </Switch>
        </div>
    )
}
