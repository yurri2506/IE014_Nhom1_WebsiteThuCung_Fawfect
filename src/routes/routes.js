import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProducstPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import TermsPage from "../pages/TermsPage/TermsPage"
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
<<<<<<< HEAD
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage"
=======
import MyOrderPage from "../pages/MyOrderPage/MyOrderPage"
>>>>>>> 15fc56281db4a473c70ba5f0372ae96d9b0c0ff9

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/terms',
        page: TermsPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true
    },
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: '/reset',
        page: ResetPasswordPage,
        isShowHeader: true
    }
]