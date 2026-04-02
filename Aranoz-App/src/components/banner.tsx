export default function Banner() {
    return (
        <section className="banner-section d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 order-2 order-md-1">
                        <div className="banner-text">
                            <h1 className="display-3 fw-bold mb-3">Wood & Cloth <br /> Sofa</h1>
                            <p className="text-muted mb-4 fs-5">Best furniture for your home interior design.</p>
                            <a href="#" className="btn btn-primary px-4 py-2 fw-bold text-uppercase">Buy Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 text-center">
                        <img src="https://themewagon.github.io/aranoz/img/banner_img.png" alt="Sofa" className="img-fluid banner-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}