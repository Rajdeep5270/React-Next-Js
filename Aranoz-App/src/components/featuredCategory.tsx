export default function FeaturedCategory() {
    return (
        <section className="featured-category py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="display-4 fw-bold">Featured Categories</h2>
                        <p className="text-muted fs-5">Discover our most popular furniture categories</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="category-card text-center p-4">
                            <div className="category-icon mb-3">
                                <i className="fas fa-couch fa-3x text-primary"></i>
                            </div>
                            <h3 className="h4 mb-3">Living Room</h3>
                            <p className="text-muted">Comfortable sofas and seating for your living space</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="category-card text-center p-4">
                            <div className="category-icon mb-3">
                                <i className="fas fa-utensils fa-3x text-primary"></i>
                            </div>
                            <h3 className="h4 mb-3">Dining Room</h3>
                            <p className="text-muted">Elegant dining sets for family gatherings</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="category-card text-center p-4">
                            <div className="category-icon mb-3">
                                <i className="fas fa-bed fa-3x text-primary"></i>
                            </div>
                            <h3 className="h4 mb-3">Bedroom</h3>
                            <p className="text-muted">Restful bedroom furniture for peaceful sleep</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}