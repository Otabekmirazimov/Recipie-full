import { useRouteError } from "react-router-dom"
import { Link } from 'react-router-dom'

function Error() {
    const error = useRouteError
    return <main className="h-screen grid place-content-center text-center">
        <h1 className="text-9xl mb-5">404</h1>
        <p className="mb-5 text-5xl">Page not found</p>
        <Link to="/" className="btn btn-primary">Go To Home</Link>
    </main>
}

export default Error