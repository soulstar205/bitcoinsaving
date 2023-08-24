import React, {useState} from "react";
import Select from "react-select";
import { useHistory } from "react-router";
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [plan, setPlan] = useState('')
  const [currency, setCurrency] = useState('')
  const [phone, setPhone] = useState(null)
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  const handleSelectChange = (event) => {
    setPlan(event.target.value);
  };

  const handleSelectCurrency = (event) => {
    setCurrency(event.target.value)
  }
 
  const success = 'Registration successful'
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newUser = {
      name,
      username: username.toLowerCase(),
      password,
      email,
      phone,
      plan,
      country,
      currency
    };

    console.log(newUser);
    try {
      const response = await axios.post('https://bitcoinserver.vercel.app/api/users/register', {...newUser});
      console.log(response.data);
      setLoading(false);
      
      if (response.status === 200) {
        history.push(`/auth/login?prop=${success}`)
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false)
    }
  };

  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                <h6 className="text-blueGray-500 text-l py-5 font-bold ">
                    Sign Up
                  </h6>
                </div>
             
                {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                </div>}
                <form onSubmit={createUser}>
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      value={name}
                      onChange={(e)=> setName(e.target.value) }
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      value={username}
                      onChange={(e)=> setUsername(e.target.value) }
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e)=> setEmail(e.target.value) }
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e)=> setPassword(e.target.value) }
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      phone number
                    </label>
                    <input
                      value={phone}
                      onChange={(e)=> setPhone(e.target.value) }
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      country
                    </label>
                    <input
                      value={country}
                      onChange={(e)=> setCountry(e.target.value) }
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Country"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Plan
                    </label>
                       <select value={plan} onChange={handleSelectChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                       <option className="p-3 border-0" value="No plan selected">PLAN</option>
                        <option className="p-3 border-0" value="silver">SILVER = $500 - $999</option>
                        <option className="py-3 px-3 border-0"  value="gold">GOLD = $1000 - $4,999</option>
                        <option className="py-3 px-3 border-0" value="platinum">PLATINUM = $5000 - $9,999</option>
                      </select>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Choose Currency
                    </label>
                       <select value={currency} onChange={handleSelectCurrency} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                       <option className="py-3 px-3 border-0" value="No currency selected">CURRENCY</option>
                        <option className="py-3 px-3 border-0" value="usd">$ USD</option>
                        <option className="py-3 px-3 border-0"  value="euro">€ EUR</option>
                        <option className="py-3 px-3 border-0" value="pounds">£ GBP</option>
                      </select>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      
                    >
                      Create Account
                    </button>
                  </div>
                  <span>{loading && <small>Loading...</small>}</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
