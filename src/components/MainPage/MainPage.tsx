import React from 'react';
import { Link } from 'react-router-dom';
import {NAV_ITEMS} from "../../constants/navigation";


export const MainPage = (): JSX.Element => {

    return(
        <Link to={NAV_ITEMS}>
            <p>Catalog</p>
        </Link>
    )
}

