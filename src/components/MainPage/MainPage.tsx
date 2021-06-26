import React from 'react';
import { Link } from 'react-router-dom';
import {NAV_ITEMS} from "../../constants/navigation";


export const MainPage = (): JSX.Element => {

    return(
        <>
            <p>Some information about this awesome shop.</p>
            <Link to={NAV_ITEMS.path}>
                <p>Catalog</p>
            </Link>
        </>
    )
}

