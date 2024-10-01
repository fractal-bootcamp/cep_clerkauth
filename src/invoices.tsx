import { Link } from 'react-router-dom'

export default function InvoicesPage() {
    return (
        <>
            <h1>Invoices Page</h1>
            <p>protected page this is</p>

            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/">Return to index</Link>
                </li>
            </ul>
        </>
    )
}