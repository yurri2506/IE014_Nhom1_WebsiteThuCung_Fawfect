import HomePage from '../pages/HomePage/HomePage'
import OrderPage from '../pages/OrderPage/OrderPage' 
import GeneralTermsPage from '../pages/GeneralTermsPage/GeneralTermsPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import MyOrderPage from '../pages/MyOrderPage/MyOrderPage'
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage'
import AboutPage from '../pages/AboutPage/AboutPage'
import GuaranteePage from '../pages/GuaranteePage/GuaranteePage'
import ReturnPolicyPage from '../pages/ReturnPolicyPage/ReturnPolicyPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage/PrivacyPolicyPage'
import MyCartPage from '../pages/MyCartPage/MyCartPage'
import CheckOutPage from '../pages/CheckOutPage/CheckOutPage'
import AccountInfo from '../pages/AccountPage/AccountInfo'
import EditAccount from '../pages/AccountPage/EditAccount'
import ChangePassword from '../pages/ChangePassword/ChangePassword'
import LogoutPage from '../pages/LogoutPage/LogoutPage'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
// import AdminDashboardPage from "../pages/Admin/AdminDashboardPage/AdminDashboardPage";   

export const routes = [
    //Routes cho User
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/general-terms',
        page: GeneralTermsPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/reset',
        page: ResetPasswordPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/about',
        page: AboutPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/guarantee',
        page: GuaranteePage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/return-policy',
        page: ReturnPolicyPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/privacy-policy',
        page: PrivacyPolicyPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/my-cart',
        page: MyCartPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/check-out',
        page: CheckOutPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/account-info',
        page: AccountInfo,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/edit-account',
        page: EditAccount,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/change-password',
        page: ChangePassword,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/logout',
        page: LogoutPage,
        isShowHeader: true,
        role: "user"
    },
    {
        path: '/get-all-product',
        page: TypeProductPage,
        isShowHeader: true,
        role: "user"
    },


    // Routes cho Admin
    // {
    //     path: process.env.REACT_APP_ADMIN_PATH + "/dashboard",
    //     page: AdminDashboardPage,
    //     isShowHeader: false,
    //     role: "admin"
    // },


    // Routes cho trang không có
    {
        path: '*',
        page: NotFoundPage
    }
]