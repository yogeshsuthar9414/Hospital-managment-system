import { useNavigate } from 'react-router-dom'
import BackgrounImg from "../../../assets/images/background.jpg"
import Logo from "../../../assets/images/logo.png"
import SmallLogo from "../../../assets/images/logoSmall.png"

export const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <div
                className="relative w-full lg:w-[60%] text-white flex flex-col justify-between p-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgrounImg})` }}
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative z-10 flex-1 flex items-center justify-center">
                    <div className="text-center lg:text-left space-y-4" style={{ width: "70%" }}>
                        <div className="text-5xl font-bold"><img src={SmallLogo} alt="HMS Logo" style={{ height: '100px', width: 'auto', marginLeft: "-10px" }} /></div>
                        <h1 className="text-4xl font-bold">We're Glad You're Here 👋!</h1>
                        <p className="text-md text-white/80">
                            Simplify and automate hospital operations. Manage appointments, patients, staff, and billing from one centralized platform.
                        </p>
                    </div>
                </div>
                <p className="relative z-10 text-sm text-white/70 text-center mt-6 flex justify-center items-center gap-1">

                    <img
                        src={SmallLogo}
                        alt="HMS Logo"
                        className="h-[18px] w-auto inline-block"
                    />
                    © {new Date().getFullYear()} MediBridge. All rights reserved.
                </p>

            </div>

            {/* Login Form  */}
            <div className="w-full lg:w-[40%] flex items-center justify-center p-8 pt-0">
                <div className="w-full max-w-sm space-y-6">
                    <div>
                        <img src={Logo} alt="HMS Logo" style={{ height: '100px', width: 'auto', marginLeft: "-11px" }} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 pt-4">Hospital Management System</h2>
                    <div>
                        <h3 className="text-2xl font-bold">Welcome!</h3>
                        <p className="text-sm text-gray-500">
                            Don’t have an account?{" "}
                            <a href="#" className="linkPrimary">Create a new account now</a>
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="User ID"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btnPrimary"
                            onClick={() => navigate("/dashboard")}
                        >
                            Login
                        </button>

                    </form>
                    <p className="text-sm text-gray-500 text-center pt-3">
                        Forgot password? <a href="#" className="linkPrimary">Click here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
