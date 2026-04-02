export default function Footer() {
    return (
        <footer className="footer bg-dark text-light py-5 mt-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h3 className="fw-bold mb-3">Aranoz.</h3>
                        <p className="text-muted mb-4">
                            Your trusted partner for quality furniture and home decor.
                            We bring comfort and style to your living spaces.
                        </p>
                        <div className="social-icons d-flex">
                            <a href="#" className="text-light me-3 fs-4" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-light me-3 fs-4" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-light me-3 fs-4" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-light me-3 fs-4" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Shop</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="fw-bold mb-3">Categories</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Living Room</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Bedroom</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Dining</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Office</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="fw-bold mb-3">Contact Info</h5>
                        <div className="contact-info">
                            <p className="mb-3 text-muted d-flex align-items-start">
                                <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                                <span>123 Furniture Street<br />City, State 12345</span>
                            </p>
                            <p className="mb-3 text-muted d-flex align-items-center">
                                <i className="fas fa-phone me-3"></i>
                                <span>+1 (555) 123-4567</span>
                            </p>
                            <p className="mb-3 text-muted d-flex align-items-center">
                                <i className="fas fa-envelope me-3"></i>
                                <span>info@aranoz.com</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-secondary" />
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="copyright mb-0">
                            &copy; 2026 Aranoz. All rights reserved. | Designed with <i className="fas fa-heart text-danger"></i> for quality furniture.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}