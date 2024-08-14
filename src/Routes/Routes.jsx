import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // children: [
        //     {
        //         path: 'user',
        //         children: [
        //             {
        //                 path: 'profile',
        //                 element: <Profile />
        //             },
        //             {
        //                 path: 'cashin',
        //                 element: <Cashin />
        //             },
        //             {
        //                 path: 'cashout',
        //                 element: <Cashout />
        //             },
        //             {
        //                 path: 'sendmoney',
        //                 element: <SendMoney />
        //             },
        //             {
        //                 path: 'transactions',
        //                 element: <UserTransactions />
        //             },
        //         ]
        //     },
        // ]
    },
]);