import {MainPage} from "../components/MainPage/MainPage";
import {Catalog} from "../components/Catalog/Catalog";
import {Product} from "../components/Product/Product";

export const NAV_ROOT = {
    name: 'mainPage',
    path: '/',
    exact: true,
    component: MainPage,
}
export const NAV_ITEMS = {
    name: 'catalog',
    path: '/items',
    exact: true,
    component: Catalog,
}
const NAV_PRODUCT = {
    name: 'product',
    path: `${NAV_ITEMS.path}/:productId`,
    exact: true,
    component: Product,
}

export const allRoutes = [
    NAV_ROOT,
    NAV_ITEMS,
    NAV_PRODUCT
]
