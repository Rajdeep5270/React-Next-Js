export default function ShowCity() {
    return (
        <div className="mt-4">
            <hr className="border-secondary opacity-25" />

            <div className="alert alert-info border-0 bg-light shadow-sm" role="alert">
                <i className="bi bi-info-circle me-2 text-info"></i>
                <span className="text-muted">
                    Click the <strong>Generate</strong> button to see a random city and its population.
                </span>
            </div>
        </div>
    );
}