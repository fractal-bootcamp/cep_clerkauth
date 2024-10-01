import { Link } from 'react-router-dom'

export default function DashboardPage() {
    return (
        <>
            <h1>Dashboard Page</h1>
            <p>protected page</p>

            <ul>
                <li>
                    <Link to="/dashboard/invoices">Invoices</Link>
                </li>
                <li>
                    <Link to="/">Return to index</Link>
                </li>
            </ul>
        </>
    )
}