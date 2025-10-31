// export default function ProfilePage() {
//   return (
//     <div className="lg: h-dvh p-4 flex flex-col items-center lg:items-start lg:justify-around lg:flex-row gap-3">
//       <div className="w-30 h-30  lg:w-60 lg:h-60 rounded-full overflow-hidden">
//         <img
//           className="object-cover w-full h-full"
//           src="https://photosnow.org/wp-content/uploads/2024/04/4_girl-dp-new.jpg"
//           alt="Bordered avatar"
//         />
//       </div>
//       <div>
//         <div className="text-2xl font-bold">My Profile</div>
//         <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
//           <label className="font-semibold">
//             Name
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               required
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             Email
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             Mobile Number
//             <input
//               type="tel"
//               name="mobileNumber"
//               placeholder="Mobile Number"
//               required
//               maxLength={10}
//               pattern="[0-9]{10}"
//               inputMode="numeric"
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             House Number/ Line Number
//             <input
//               type="text"
//               name="address"
//               placeholder="House Number/ Line Number"
//               required
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             City
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               required
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             State
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               required
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             Pincode
//             <input
//               type="tel"
//               name="pincode"
//               placeholder="Pincode"
//               required
//               maxLength={6}
//               pattern="^\d{6}$"
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3  "
//             />
//           </label>

//           <label className="font-semibold">
//             Landmark
//             <input
//               type="text"
//               name="landmark"
//               placeholder="Landmark"
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>

//           <label className="font-semibold">
//             Alternate Number
//             <input
//               type="tel"
//               name="alternateNumber"
//               placeholder="Alternate Number (optional)"
//               maxLength={10}
//               pattern="[0-9]{10}"
//               inputMode="numeric"
//               className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3"
//             />
//           </label>
//         </form>
//         <div className="flex justify-end items-center gap-4 py-3">
//           <button
//             type="button"
//             className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
