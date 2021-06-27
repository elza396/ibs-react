import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Switch, Route, useRouteMatch} from "react-router";
import {allRoutes, NAV_ITEMS} from "./constants/navigation";

export const App = (): JSX.Element =>  {
    const match = useRouteMatch(`${NAV_ITEMS.path}/:productId`);

    return(
        <div className={s.content}>
            <Header isProductPageOpen={Boolean(match)} />
            <Switch>
                {allRoutes.map(route => {
                    return (
                        <Route exact={route.exact} path={route.path} component={route.component}/>
                    )
                })}
            </Switch>
        </div>
    )
}
