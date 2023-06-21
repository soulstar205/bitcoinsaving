import React, {useState, useContext, useEffect} from "react";
import { useHistory, Link, useLocation} from "react-router-dom";
import { UserContext } from "../../state/userContext";

export default function AdminLogin() {
  const {loginAdmin} = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] =useState(false)
  const [error, setError] = useState('')
  const history = useHistory()
  const location = useLocation()

 
  const searchParams = new URLSearchParams(location.search);
  const success = searchParams.get('prop');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      email,
      password
    };
    const result = await loginAdmin(loginData);
    
    if (result.success) {
      // Redirect to the admin page
      history.push('/super-admin');
      setLoading(false);
    } else { 
      // Update the error state
      setLoading(false)
      setError(result.error);
      console.log(result.error)
    }
  };

  useEffect(() => {
    let isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <h6 className="text-blueGray-500 text-l py-5 font-bold ">
                    Sign In
                  </h6>
                </div>
                {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                          {success}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                </div>}
                {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                </div>}
                <form onSubmit={handleLogin}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
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
                      onChange={(e)=> setPassword(e.target.value)}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                  {loading && <div class="spinner-border text-info" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>}
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/super-admin/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>

              </div>
                   
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
