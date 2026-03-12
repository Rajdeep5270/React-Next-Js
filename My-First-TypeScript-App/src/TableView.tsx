export default function TableView() {

    const adminData = [
        {
            name: "Rajdeep",
            email: "rajdeepex5270@gmail.com",
            phone: 8578938748,
        },
        {
            name: "Sagar",
            email: "sagar@gmail.com",
            phone: 8565656058,
        },
        {
            name: "krish",
            email: "krish@gmail.com",
            phone: 9865438748,
        },
        {
            name: "Rahul",
            email: "rahul@gmail.com",
            phone: 8578936540,
        },
    ]
    return <>
        <div className="container">
            <h2 className="my-5 text-center fw-bold">Admin Data</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {adminData.map((admin, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                            <td>{admin.phone}</td>
                            <td>
                                <button className="btn btn-outline-warning mx-2">Edit</button>
                                <button className="btn btn-outline-danger mx-2">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
}