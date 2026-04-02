export default function FeaturedProducts() {
    return (
        <section className="featured-products py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="display-4 fw-bold">Featured Products</h2>
                        <p className="text-muted fs-5">Handpicked furniture pieces for your home</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="product-card">
                            <div className="product-img">
                                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" alt="Modern Sofa" className="img-fluid" />
                                <div className="product-overlay">
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-info p-3">
                                <h4 className="product-title">Modern Sofa</h4>
                                <p className="product-price">$299.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product-card">
                            <div className="product-img">
                                <img src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop" alt="Wooden Chair" className="img-fluid" />
                                <div className="product-overlay">
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-info p-3">
                                <h4 className="product-title">Wooden Chair</h4>
                                <p className="product-price">$149.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product-card">
                            <div className="product-img">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" alt="Dining Table" className="img-fluid" />
                                <div className="product-overlay">
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-info p-3">
                                <h4 className="product-title">Dining Table</h4>
                                <p className="product-price">$399.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}