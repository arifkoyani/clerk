"use client";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
export default  function Form() {
  const CreateUsers = useMutation(api.formUsers.formData);
  const yesOrNo = useMutation(api.toggle.yesOrNo);
  const createName = useMutation(api.names.myNames);
  const checkdata=useQuery(api.toggle.getchecks)

  const [name, setName] = useState("");
  const [check, setcheck] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    terms: false,
    options: "",
    range: 50,
    date: "",
    time: "",
    password: "",
    email: "",
    number: "",
    tel: "",
    url: "",
    search: "",
    text: "",
    dateLocal: "",
    month: "",
    week: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const namehandle = async (e) => {
    e.preventDefault();
    try {
      await createName({ name });
      setName("");
      alert("name send");
    } catch (error) {
      console.log(error);
    }
  };

  const handlecheck = async (e) => {
    const newCheck = e.target.checked;
    setcheck(newCheck);
    try {
      await yesOrNo( { check: newCheck });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateUsers(formData);
      alert("form submit");
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        terms: false,
        options: "",
        range: 50,
        date: "",
        time: "",
        password: "",
        email: "",
        number: "",
        tel: "",
        url: "",
        search: "",
        text: "",
        dateLocal: "",
        month: "",
        week: "",
      });
    } catch (error) {}
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      terms: false,
      options: "",
      range: 50,
      date: "",
      time: "",
      password: "",
      email: "",
      number: "",
      tel: "",
      url: "",
      search: "",
      text: "",
      dateLocal: "",
      month: "",
      week: "",
    });


  };


  return (
    <div className="max-w-xl mx-auto p-4">
  {checkdata?.length > 0 && checkdata[0]?.check ?<>
    
    <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="flex items-center">
          <label className="mr-2">Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mr-2"
          />
          <label>I agree to the terms and policies</label>
        </div>
        <select
          name="options"
          value={formData.options}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select an option</option>
          <option value="Hunza">Hunza</option>
          <option value="Gilglt">Gilglt</option>
        </select>
        <input
          type="range"
          name="range"
          min="0"
          max="100"
          value={formData.range}
          onChange={(e) =>
            setFormData({ ...formData, range: parseFloat(e.target.value) })
          }
          className="w-full"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="tel"
          name="tel"
          placeholder="Phone Number"
          value={formData.tel}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="url"
          name="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="search"
          name="search"
          placeholder="Search"
          value={formData.search}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="text"
          placeholder="Text"
          value={formData.text}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <input
          type="datetime-local"
          name="dateLocal"
          value={formData.dateLocal}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="week"
          name="week"
          value={formData.week}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="flex justify-between">
          <button type="reset" className="px-4 py-2 bg-gray-200 rounded">
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    
    
    
    </>:(
      <>
      <h1>this ihide</h1>
      </>
    )}
      

      {/* <form onSubmit={namehandle}>
        <label className="text-black font-extrabold">Enter the name only</label>
        <input
          className="text-black "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add name</button>
      </form>

      <label className="text-black font-extrabold">Enter the yes or NO</label> */}
      <input
        type="checkbox"
        className="text-black "
        placeholder="yes or No"
        value={check}
        onChange={handlecheck}
      />
    </div>
  );
}
