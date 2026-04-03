import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { employeeType } from "../utils/global";

type propsType = {
  allEmployees: employeeType[];
  setAllEmployees: (value: React.SetStateAction<employeeType[]>) => void;
  editEmployee: employeeType | undefined;
  editIndex: number | null;
  setEditIndex: (value: React.SetStateAction<number | null>) => void;
};

export default function Form({
  allEmployees,
  setAllEmployees,
  editEmployee,
  editIndex,
  setEditIndex,
}: propsType) {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<any>({});

  const allHobby = ["Painting", "Sketching", "Photography", "Graphic Designing", "Writing / Blogging"];
  const allCity = ["Chennai", "Kolkata", "Jaipur", "Lucknow", "Chandigarh"];

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(allEmployees));
  }, [allEmployees]);

  useEffect(() => {
    if (editEmployee) {
      setFName(editEmployee.fName);
      setLName(editEmployee.lName);
      setEmail(editEmployee.email);
      setPhone(editEmployee.phone);
      setGender(editEmployee.gender);
      setHobby(editEmployee.hobby);
      setCity(editEmployee.city);
      setAddress(editEmployee.address);
    }
  }, [editEmployee]);

  const getEmployeeHobby = (event: any) => {
    const data = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) { setHobby((abc) => [...abc, data]); }
    else { setHobby((hobby) => hobby.filter((myHobby) => myHobby !== data)); }
  };

  const validation = () => {
    let newError: any = {};
    if (!fName) newError.fname = "first name is required..";
    if (!lName) newError.lname = "last name is required..";
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) { newError.email = "email is required.."; }
    else if (!emailPattern.test(email)) { newError.email = "Invalid email address..."; }
    const phonePattern = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (!phone) { newError.phone = "phone number is required.."; }
    else if (phone.length !== 10 || !phonePattern.test(phone)) { newError.phone = "Invalid phone number.."; }
    if (!gender) newError.gender = "gender is required..";
    if (hobby.length === 0) newError.hobby = "hobby is required..";
    if (!city) newError.city = "city is required..";
    if (!address) newError.address = "address is required..";
    setError(newError);
    return Object.keys(newError).length;
  };

  const employeeFormSubmit = (event: any) => {
    event.preventDefault();
    if (validation() !== 0) return;
    const employeeData: employeeType = { fName, lName, email, phone, gender, hobby, city, address };
    if (editIndex !== null) {
      let updatedEmployees = [...allEmployees];
      updatedEmployees[editIndex] = employeeData;
      setAllEmployees(updatedEmployees);
      setEditIndex(null);
      toast.success("Employee updated successfully...");
    } else {
      setAllEmployees((prev) => [...prev, employeeData]);
      toast.success("Employee added successfully...");
    }
    setFName(""); setLName(""); setEmail(""); setPhone(""); setGender(""); setHobby([]); setCity(""); setAddress("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header Section - Matches Table Page */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 mb-4">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Profile configuration
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">
            {editIndex !== null ? "Edit Member" : "New Member"}
          </h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Please fill out all required employee details.</p>
        </div>

        {/* Form Card - Matches Table Card */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden">
          <form onSubmit={employeeFormSubmit} className="p-10 space-y-10">

            {/* Fieldset Identity */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">01. Identity</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1">First Name</label>
                  <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} placeholder="John" className={`w-full px-6 py-4 bg-slate-50 border ${error.fname ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:bg-white focus:border-indigo-400 transition-all outline-none font-medium text-slate-700`} />
                  {error.fname && <p className="text-[10px] font-bold text-red-500 uppercase ml-1">{error.fname}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1">Last Name</label>
                  <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} placeholder="Doe" className={`w-full px-6 py-4 bg-slate-50 border ${error.lname ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:bg-white focus:border-indigo-400 transition-all outline-none font-medium text-slate-700`} />
                  {error.lname && <p className="text-[10px] font-bold text-red-500 uppercase ml-1">{error.lname}</p>}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">02. Communication</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" className={`w-full px-6 py-4 bg-slate-50 border ${error.email ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:bg-white focus:border-indigo-400 transition-all outline-none font-medium text-slate-700`} />
                  {error.email && <p className="text-[10px] font-bold text-red-500 uppercase ml-1">{error.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1">Phone Number</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" className={`w-full px-6 py-4 bg-slate-50 border ${error.phone ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:bg-white focus:border-indigo-400 transition-all outline-none font-medium text-slate-700`} />
                  {error.phone && <p className="text-[10px] font-bold text-red-500 uppercase ml-1">{error.phone}</p>}
                </div>
              </div>
            </div>

            {/* Gender and Hobby - Custom Styled */}
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 ml-1">Gender</label>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className={`flex-1 cursor-pointer text-center py-4 rounded-2xl border-2 font-black text-xs uppercase tracking-widest transition-all ${gender === g ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"}`}>
                      <input type="radio" value={g} checked={gender === g} onChange={(e) => setGender(e.target.value)} className="hidden" />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 ml-1">Hobbies</label>
                <div className="flex flex-wrap gap-2">
                  {allHobby.map((h) => (
                    <label key={h} className={`cursor-pointer px-4 py-2 rounded-xl border-2 font-bold text-[10px] uppercase tracking-widest transition-all ${hobby.includes(h) ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"}`}>
                      <input type="checkbox" value={h} checked={hobby.includes(h)} onChange={getEmployeeHobby} className="hidden" />
                      {h}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Section: City & Address */}
            <div className="pt-6 space-y-6">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">03. Location</h3>
              <div className="space-y-6">
                <select value={city} onChange={(e) => setCity(e.target.value)} className={`w-full px-6 py-4 bg-slate-50 border ${error.city ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all font-bold text-slate-600 outline-none appearance-none`}>
                  <option value="">Select Office City</option>
                  {allCity.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <textarea rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Full residential address..." className={`w-full px-6 py-4 bg-slate-50 border ${error.address ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:bg-white focus:border-indigo-400 transition-all outline-none font-medium text-slate-700 resize-none`} />
              </div>
            </div>

            {/* Action Button */}
            <button type="submit" className={`w-full py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-[0.98] ${editIndex !== null ? "bg-amber-500 text-white shadow-amber-100" : "bg-indigo-600 text-white shadow-indigo-100"}`}>
              {editIndex !== null ? "Update Record" : "Add to Directory"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}