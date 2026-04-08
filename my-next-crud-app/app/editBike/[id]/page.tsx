"use client";

import { bikeDataType } from "@/app/utils/type";
import { useParams } from "next/navigation"
import { useState } from "react";

export default function editBikePage() {

    const [allBikes, setAllBikes] = useState<bikeDataType[]>(JSON.parse(localStorage.getItem('bikes') || '[]'));

    const param = useParams();

    function fetchBike() {
        const bikeFound = allBikes.filter(bike => bike.id === Number(param.id));

        console.log("Fetched Bike : ", bikeFound);
    }

    fetchBike();
    return <>
        <h1 className="text-5xl text-center">Edit Bike Page</h1>
    </>
}