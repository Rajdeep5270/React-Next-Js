import ShowCity from "./ShowCity";



export default function RandomCity(props: any) {
    const cities = [
        { name: "Surat", population: "7.49 Million" },
        { name: "Jaipur", population: "3.46 Million" },
        { name: "Indore", population: "3.27 Million" },
        { name: "Bhopal", population: "2.37 Million" },
        { name: "Mumbai", population: "20.41 Million" },
        { name: "Delhi", population: "32.9 Million" },
        { name: "Ahmedabad", population: "8.45 Million" },
        { name: "Pune", population: "7.27 Million" },
        { name: "Bangalore", population: "12.3 Million" },
        { name: "Hyderabad", population: "10.5 Million" },
        { name: "Chennai", population: "11.5 Million" },
        { name: "Kolkata", population: "14.8 Million" },
        { name: "Lucknow", population: "3.38 Million" },
        { name: "Kanpur", population: "3.2 Million" },
        { name: "Nagpur", population: "2.9 Million" }
    ];

    const generateCity = () => {
        let index = Math.floor(Math.random() * cities.length);
        props.sendCity(cities[index]);
    };

    return (
        <div className="d-grid gap-3">
            <button
                className="btn btn-primary btn-lg shadow-sm"
                onClick={generateCity}
            >
                <i className="bi bi-shuffle me-2"></i> Generate New City
            </button>

            <div className="mt-2">
                <ShowCity />
            </div>
        </div>
    );
}