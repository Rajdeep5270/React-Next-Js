import { toast, ToastContainer } from "react-toastify";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import type { employeeType } from "./utils/global";

export default function App() {
  const [allEmployees, setAllEmployees] = useState<employeeType[]>(
    JSON.parse(localStorage.getItem("employees") || "[]"),
  );

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editEmployee, setEditEmployee] = useState<employeeType>();

  useEffect(() => {
    console.log("Use Effect : ", allEmployees);

    localStorage.setItem("employees", JSON.stringify(allEmployees));
  }, [allEmployees]);

  const deleteEmployee = (index: number) => {
    setAllEmployees((allEmployee) => allEmployee.filter((_, i) => i !== index));

    toast.success("Employee deleted successfully..");
  };

  const updateEmployee = (index: number) => {
    setEditIndex(index);
    console.log("Edit Employee : ", allEmployees[index]);
    setEditEmployee(allEmployees[index]);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-100 to-cyan-100 py-6 px-4 sm:px-6 lg:px-8">
        <header className="max-w-5xl mx-auto mb-6">
          <div className="rounded-2xl border border-blue-200 bg-white/70 p-5 shadow-md backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">Employee CRUD Dashboard</h1>
            <p className="text-sm md:text-base text-slate-600 mt-1">Manage employee data with instant feedback and fast search.</p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          <Form
            allEmployees={allEmployees}
            setAllEmployees={setAllEmployees}
            editEmployee={editEmployee}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />

          <Table
            allEmployees={allEmployees}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
          />
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
