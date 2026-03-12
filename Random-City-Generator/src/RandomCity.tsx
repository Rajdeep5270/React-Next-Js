import { useState } from "react";

export default function RandomCity() {
    const cities = [
        {
            city_name: "Surat",
            state_name: "Gujarat",
            famous_for: "Clothes",
            population: "7.49 Million",
            image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGB...",
            tourist_places: ["Dumas Beach", "VR Surat", "ISKCON Temple"]
        },
        {
            city_name: "Mumbai",
            state_name: "Maharashtra",
            famous_for: "Financial Capital of India",
            population: "20.41 Million",
            image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGB...",
            tourist_places: ["Gateway of India", "Marine Drive", "Elephanta Caves"]
        },
        {
            city_name: "Jaipur",
            state_name: "Rajasthan",
            famous_for: "Pink City & Palaces",
            population: "3.46 Million",
            image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGB...",
            tourist_places: ["Amber Fort", "City Palace", "Hawa Mahal"]
        },
        {
            city_name: "Bangalore",
            state_name: "Karnataka",
            famous_for: "IT Hub of India",
            population: "8.44 Million",
            image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGB...",
            tourist_places: ["Lalbagh Botanical Garden", "Cubbon Park", "Bangalore Palace"]
        },
        {
            city_name: "Kolkata",
            state_name: "West Bengal",
            famous_for: "Cultural Capital of India",
            population: "4.50 Million",
            image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGB...",
            tourist_places: ["Howrah Bridge", "Victoria Memorial", "Dakshineswar Kali Temple"]
        }
    ];

    const [random, setRandom] = useState(0);

    const generateRandomCity = () => {
        const index = Math.floor(Math.random() * cities.length);
        setRandom(index);
    }

    return <>
        <main style={{ height: "505px" }}>
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-secondary" onClick={generateRandomCity}>Click !</button>
            </div>
        </main>
    </>
}