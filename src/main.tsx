import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// // Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//import layouts
import RootLayout from './layouts/root-layout.tsx'
import DashboardLayout from './layouts/dashboard-layout.tsx'

//import components
import IndexPage from './index.tsx'
import ContactPage from './contact.tsx'
import SignInPage from './sign-in.tsx'
import SignUpPage from './sign-up.tsx'
import DashboardPage from './dashboard.tsx'
import InvoicesPage from './invoices.tsx'


// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: '/', element: <IndexPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/sign-in/*', element: <SignInPage /> },
            { path: '/sign-up/*', element: <SignUpPage /> },
            {
                element: <DashboardLayout />,
                path: 'dashboard',
                children: [
                    { path: '/dashboard', element: <DashboardPage /> },
                    { path: '/dashboard/invoices', element: <InvoicesPage /> },
                ],
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)