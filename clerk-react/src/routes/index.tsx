import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

export default function IndexPage() {

    const { getToken } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(getToken)
                const token = await getToken()
                console.log(token)
                const response = await axios.get('http://localhost:3000/protected', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response)
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>This is the index page</h1>
            <div>
                <ul>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}