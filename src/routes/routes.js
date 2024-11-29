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
import LogoutPage from "../pages/LogoutPage/LogoutPage";
import AccountInfo from "../pages/AccountPage/AccountInfo";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ChangeEmail from "../pages/ChangeEmail/ChangeEmail";
import ChangePhone from "../pages/ChangePhone/ChangePhone";
import EditAccount from "../pages/AccountPage/EditAccount";
import GeneralPolicy from "../pages/GeneralPolicy/GeneralPolicy"
import GuaranteePolicy from "../pages/GuaranteePolicy/Guarantee";
import NewPassword from "../pages/ChangePassword/NewPassword";

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
        path: '/product-details/:id',
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
        path: '/account-info',
        page: AccountInfo,
        isShowHeader: true
    },
    {
        path: '/edit-account',
        page: EditAccount,
        isShowHeader: true
    },
    {
        path: '/edit-password',
        page: ChangePassword,
        isShowHeader: true
    },
    {
        path: '/edit-password/new-password',
        page: NewPassword,
        isShowHeader: true
    },
    {
        path: '/edit-email',
        page: ChangeEmail,
        isShowHeader: true
    },
    {
        path: '/edit-phone',
        page: ChangePhone,
        isShowHeader: true
    },
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },  
    {
        path: '/generalpolicy',
        page: GeneralPolicy,
        isShowHeader: true
    },
    {
        path: '/generalpolicy',
        page: GuaranteePolicy,
        isShowHeader: true
    },
    {
        path: '/logout',
        page: LogoutPage,
        isShowHeader: true
    },
    {
        path: '/get-all-product',
        page: TypeProductPage,
        isShowHeader: true
    }
]