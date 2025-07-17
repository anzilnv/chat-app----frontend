import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Mail, MessageSquare, User, } from 'lucide-react';
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData);
  }
  return (
    <div className="h-screen grid lg:grid-cols-2 pt-28">
      {/* left Side */}
      <div className="flex flex-col items-center  p-6  sm:p-12 ">
        <div className="w-full max-w-md space-y-8">
          {/* logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <MessageSquare size={24} className="text-blue-600" />
              </div> <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
              <p className="text-gray-500">sign in your account</p>

            </div>
          </div>
          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* email */}
            <div className="form-control">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="size-5 text-white" />
                  </div>
                  <input
                    type="email"
                    className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                    name="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="***********"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength="8"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-white" />
                    ) : (
                      <Eye className="size-5 text-white" />
                    )}
                  </button>

                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-2 animate-spin" />
                  Loading....
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="flex items-center">
            <p className="text-white">
              Don&apos;t have an Account ?{" "}
              <Link to={"/SignUp"} className="link link-primary" >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <AuthImagePattern />
    </div>
  )
}

export default LoginPage