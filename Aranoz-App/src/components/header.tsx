import '../css/header.css'

export default function Header() {
    return <>
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-4">
                    <h2 className="fw-bold">Aranoz.</h2>
                    <ul className="d-flex justify-content-center align-items-center">
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">Home</a></li>
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">Shop</a></li>
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">Pages</a></li>
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">Blog</a></li>
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">Contact</a></li>
                    </ul>
                    <ul className="d-flex justify-content-center align-items-center">
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">R</a></li>
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">R</a></li>
                        <li><a href="#" className="text-decoration-none mx-3 text-dark fw-semibold">R</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
}