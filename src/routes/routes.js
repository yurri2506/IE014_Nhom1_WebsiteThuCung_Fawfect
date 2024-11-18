import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProducstPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import GeneralTermsPage from "../pages/GeneralTermsPage/GeneralTermsPage"
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage"
import MyOrderPage from "../pages/MyOrderPage/MyOrderPage"
import AboutPage from "../pages/AboutPage/AboutPage";
import GuaranteePage from "../pages/GuaranteePage/GuaranteePage";
import ReturnPolicyPage from "../pages/ReturnPolicyPage/ReturnPolicyPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

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
        path: '/general-terms',
        page: GeneralTermsPage,
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
    },
    {
        path: '/about',
        page: AboutPage,
        isShowHeader: true
    },
    {
        path: '/guarantee',
        page: GuaranteePage,
        isShowHeader: true
    },
    {
        path: '/return-policy',
        page: ReturnPolicyPage,
        isShowHeader: true
    },
    {
        path: '/privacy-policy',
        page: PrivacyPolicyPage,
        isShowHeader: true
    },
    {
        path: '/my-cart',
        page: MyCartPage,
        isShowHeader: true
    },
    {
        path: '/check-out',
        page: CheckOutPage,
        isShowHeader: true
    },
    {
        path: '/account',
        page: AccountPage,
        isShowHeader: true
    },
    {
        path: '/password',
        page: ChangePassword,
        isShowHeader: true
    },
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    }
]