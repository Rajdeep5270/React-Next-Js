import { useState } from "react";

export default function EmployeeForm() {

    const [fName, setFName] = useState<string>("");
    const [lName, setLName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [hobby, setHobby] = useState<string[]>([]);
    const [address, setAddress] = useState<string>("");

    const [error, setError] = useState("");

    const allCity = ["Surat", "Rajkot", "Mumbai", "Delhi"];
    const allHobby = ["Cricket", "Music", "Swimming", "Other"];

    function errorFun() {

        let errorMessage = {
            f_name: ""
        }

        if (!fName) {
            errorMessage.f_name = "First name is required";
        }

        setError(errorMessage);
    }

    function EmployeeFormSubmit(event: any) {
        event.preventDefault();

        errorFun();

        const employeeData = {
            first_name: fName,
            last_name: lName,
            email,
            gender,
            city,
            hobby,
            address
        }

        localStorage.setItem("Employee Data", JSON.stringify(employeeData));

        setFName("");
        setLName("");
        setEmail("");
        setGender("");
        setCity("");
        setHobby([]);
        setAddress("");
    }

    function getEmployeeHobby(e: any) {
        const selectedHobby = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setHobby(hobby => [...hobby, selectedHobby]);
        }
        else {
            setHobby(hobby => hobby.filter((myHobby) => myHobby != selectedHobby));
        }
    }

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-100 to-indigo-200 py-12 px-4 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-3xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Sidebar - Visual Flair */}
                <div className="md:w-1/3 bg-indigo-600 p-10 text-white flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">Join the Team.</h2>
                    <p className="text-indigo-100 text-lg">Digital onboarding for the next generation of creators.</p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3 text-sm bg-white/10 p-3 rounded-xl backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            System Online
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <form className="md:w-2/3 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/40" onSubmit={EmployeeFormSubmit}>

                    {/* First Name */}
                    <div className="relative group">
                        <input type="text" id="fname" value={fName} onChange={(event => { setFName(event.target.value) })} className="peer w-full bg-transparent border-b-2 border-gray-300 py-2 outline-none focus:border-indigo-600 transition-colors placeholder-transparent" placeholder="First Name" />
                        <label htmlFor="fname" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm">First Name</label>
                        <span className="text-red-500">{error.f_name}</span>
                    </div>

                    {/* Last Name */}
                    <div className="relative group">
                        <input type="text" id="lname" value={lName} onChange={(event => { setLName(event.target.value) })} className="peer w-full bg-transparent border-b-2 border-gray-300 py-2 outline-none focus:border-indigo-600 transition-colors placeholder-transparent" placeholder="Last Name" />
                        <label htmlFor="lname" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm">Last Name</label>
                    </div>

                    {/* Email - Full Width */}
                    <div className="relative group md:col-span-2">
                        <input type="email" id="email" value={email} onChange={(event => { setEmail(event.target.value) })} className="peer w-full bg-transparent border-b-2 border-gray-300 py-2 outline-none focus:border-indigo-600 transition-colors placeholder-transparent" placeholder="Email" />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm">Work Email</label>
                    </div>

                    {/* Gender - Styled Buttons */}
                    <div className="md:col-span-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Gender</span>
                        <div className="flex gap-4 mt-2">
                            <label className="flex-1">
                                <input type="radio" checked={gender === "Male"} onChange={(event => { setGender(event.target.value) })} name="gender" value="Male" className="peer hidden" />
                                <div className="text-center py-2 border-2 border-gray-200 rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 cursor-pointer transition-all text-sm font-semibold text-gray-500">Male</div>
                            </label>
                            <label className="flex-1">
                                <input type="radio" checked={gender === "Female"} onChange={(event => { setGender(event.target.value) })} name="gender" value="Female" className="peer hidden" />
                                <div className="text-center py-2 border-2 border-gray-200 rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 cursor-pointer transition-all text-sm font-semibold text-gray-500">Female</div>
                            </label>
                            <label className="flex-1">
                                <input type="radio" checked={gender === "Other"} onChange={(event => { setGender(event.target.value) })} name="gender" value="Other" className="peer hidden" />
                                <div className="text-center py-2 border-2 border-gray-200 rounded-xl peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 cursor-pointer transition-all text-sm font-semibold text-gray-500">Other</div>
                            </label>
                        </div>
                    </div>

                    {/* City Selection */}
                    <div className="md:col-span-1">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Location</label>
                        <select value={city} onChange={(event => setCity(event.target.value))} className="w-full bg-gray-100/50 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-600 outline-none">
                            <option>Select City</option>
                            {allCity.map((city, index) => {
                                return <option value={city} key={index}>{city}</option>
                            })}
                        </select>
                    </div>

                    {/* Hobbies - Interactive Chips */}
                    <div className="md:col-span-1">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Interests</label>
                        <div className="flex gap-2">
                            {allHobby.map((item, index) => {
                                return <label key={index} className="cursor-pointer">
                                    <input type="checkbox" checked={hobby.includes(item)} onChange={getEmployeeHobby} value={item} className="peer hidden" />
                                    <span className="px-3 py-1.5 rounded-full border border-gray-300 text-xs peer-checked:bg-slate-800 peer-checked:text-white transition-all">{item}</span>
                                </label>
                            })}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <textarea value={address} onChange={(event => { setAddress(event.target.value) })} placeholder="Tell us where you live..." className="w-full bg-gray-100/50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-indigo-600 outline-none min-h-[100px]"></textarea>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 pt-4">
                        <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all">
                            Complete Profile
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}