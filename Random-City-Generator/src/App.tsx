import { useState } from "react";
import RandomCity from "./components/RandomCity";

export default function App() {
  const [city, setCity] = useState({
    name: "None",
    population: "0"
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">

          <h2 className="mb-4 fw-bold text-primary">Random City Generator</h2>

          {/* This wrapper ensures the button/logic looks good */}
          <div className="card shadow-sm p-4 mb-4 bg-light">
            <RandomCity sendCity={setCity} />
          </div>

          <div className="card shadow border-0">
            <div className="card-header bg-dark text-white">
              <h4 className="m-0">Selected City</h4>
            </div>
            <div className="card-body py-4">
              <h5 className="card-title text-secondary">City</h5>
              <p className="display-6">{city.name}</p>

              <hr className="mx-5" />

              <h5 className="card-title text-secondary">Population</h5>
              <p className="h3 text-success">
                {(city.population)}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}