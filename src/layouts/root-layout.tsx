import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

//publishable key (pk_test_ / pk_live_) --> public API key that identifies your app --> used to initialize Clerk SDK to frontend (also provides SECRET_KEY used for server-side ops)  
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_bmF0dXJhbC10aWdlci0xNi5jbGVyay5hY2NvdW50cy5kZXYk"

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

export default function RootLayout() {
    const navigate = useNavigate()
    return (
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
        >
            <header className="header">
                <div>
                    <div>
                        <p> CLERK REACT - REACT ROUTER APP </p>
                    </div>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link to="/sign-in">Sign In</Link>
                    </SignedOut>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </ClerkProvider>
    )
}

