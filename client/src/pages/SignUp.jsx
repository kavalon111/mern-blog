/** @format */

import { Link,useNavigate } from "react-router-dom";
import { Label, TextInput, Button, Spinner } from "flowbite-react";
import { useState } from "react";

export default function SignUp() {
  const [formData, setformData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setloading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setloading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setloading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div
        className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row 
      md:items-center gap-5"
      >
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white  text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500
          via-purple-500 to-pink-500 rounded-lg text-white"
            >
              AltTales
            </span>
            
          </Link>
          <p className="text-sm mt-5">
            Elevate your blogging experience with our tailored application.
            Seamlessly create, manage, and share your content,fostering
            engagement and connection with your audience.
          </p>
        </div>
        {/* right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="example@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text=sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {/* Display error message */}
          {errorMessage && (
            <div className="mt-5 text-red-500">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
