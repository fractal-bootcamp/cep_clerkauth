import { Link } from 'react-router-dom'

export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>
            <p>
                u make a contact
            </p>
            <ul>
                <li>
                    <Link to="/">Return to Index</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </>
    )
}