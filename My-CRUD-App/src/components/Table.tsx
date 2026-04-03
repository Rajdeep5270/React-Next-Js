import { useEffect, useState } from "react";
import type { employeeType } from "../utils/global";

type propsType = {
  allEmployees: employeeType[];
  deleteEmployee: (index: number) => void;
  updateEmployee: (index: number) => void;
};

export default function Table({
  allEmployees,
  deleteEmployee,
  updateEmployee,
}: propsType) {
  const [numberOfCity, setNumberOfCity] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    console.log("Table All Employees : ", allEmployees);
    let allCity: any;
    allCity = allEmployees.map((employee) => {
      return employee.city;
    });
    allCity = new Set([...allCity]);
    console.log("All City : ", allCity.size);
    setNumberOfCity(allCity.size);
  }, [allEmployees]);

  const filterEmployees = allEmployees.filter((employee) => {
    return (
      employee.fName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lName.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase()) ||
      employee.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 mb-4">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Management Portal
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">Team Directory</h1>
            <p className="text-slate-500 mt-2 text-lg font-medium">Viewing {allEmployees.length} active records</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all">
              Export CSV
            </button>
            <button className="px-6 py-3.5 bg-indigo-600 rounded-2xl text-sm font-bold text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">
              + New Entry
            </button>
          </div>
        </div>

        {/* Search Bar - Matching Form Input Style */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search by name, email, or city..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-[2rem] text-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300 transition-all shadow-sm font-medium"
          />
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        {/* Table - Matching Form Card Style */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50/50">
                <tr>
                  {["#", "Employee", "Contact", "Gender", "Hobby", "City", "Actions"].map((label) => (
                    <th key={label} className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filterEmployees.map((employee, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6 text-xs font-bold text-slate-300">{(index + 1).toString().padStart(2, '0')}</td>
                    <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-800">{employee.fName} {employee.lName}</td>
                    <td className="px-8 py-6 whitespace-nowrap text-sm text-slate-500 font-medium">{employee.email}</td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className={`px-3 py-1 text-[10px] font-black rounded-full uppercase tracking-widest border ${employee.gender === "Male" ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-rose-50 text-rose-600 border-rose-100"}`}>{employee.gender}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-wrap gap-1">
                        {employee.hobby.map((h, i) => <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-tighter">{h}</span>)}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-slate-700">{employee.city}</td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateEmployee(index)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
                        <button onClick={() => deleteEmployee(index)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}