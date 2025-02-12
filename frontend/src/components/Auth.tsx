import { useState } from "react";

export const AuthCard = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsSignUp(!isSignUp);
            setIsTransitioning(false);
        }, 250);
    };

    return (
        <div className="flex items-center justify-center h-screen   ">
            <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-4xl shadow-lg overflow-hidden">
                <div className="absolute top-0 h-full w-1/2 bg-gradient-to-r rounded-4xl from-lime-300 to-lime-700 transition-all duration-250 ease-in-out" 
                     style={{ transform: isSignUp ? 'translateX(100%)' : 'translateX(0)' }}>
                    <div className="flex flex-col items-center justify-center h-full border rounded-4xl p-10 text-center text-white">
                        <h1 className={`text-2xl font-bold transition-opacity duration-250 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
                        </h1>
                        <p className={`mt-2 text-sm transition-opacity duration-250 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            {isSignUp ? "Enter your details to sign in and continue" : "Register with your personal details to use all site features"}
                        </p>
                        <button
                            className={`mt-4 px-8 py-2 text-lime-600 bg-white rounded-lg text-sm uppercase font-semibold transition-opacity duration-250 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                            onClick={handleToggle}
                        >
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </div>

                <div className={`absolute top-0 h-full w-1/2 transition-all duration-250 ease-in-out ${isSignUp ? "translate-x-0" : "translate-x-full"}`}>
                    {/* ... existing sign-in/sign-up form content ... */}
                    <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                         {isSignUp ? (
                            <>
                                <h1 className="text-2xl font-bold">Create Account</h1>
                                <div className="flex space-x-3 mt-3">
                                    <i className="fab fa-google text-xl"></i>
                                    <i className="fab fa-facebook text-xl"></i>
                                    <i className="fab fa-github text-xl"></i>
                                    <i className="fab fa-linkedin text-xl"></i>
                                </div>
                                <span className="text-sm mt-2">or use your email for registration</span>
                                <input className="mt-2 w-full p-2 bg-gray-100 rounded-lg outline-none text-sm" type="text" placeholder="Name" />
                                <input className="mt-2 w-full p-2 bg-gray-100 rounded-lg outline-none text-sm" type="email" placeholder="Email" />
                                <input className="mt-2 w-full p-2 bg-gray-100 rounded-lg outline-none text-sm" type="password" placeholder="Password" />
                                <button className="mt-4 px-8 py-2 text-white bg-gradient-to-r from-lime-300 to-lime-700 rounded-lg text-sm uppercase font-semibold">Sign Up</button>
                            </>
                        ) : (
                            <>
                                <h1 className="text-2xl font-bold">Sign In</h1>
                                <div className="flex space-x-3 mt-3">
                                    <i className="fab fa-google text-xl"></i>
                                    <i className="fab fa-facebook text-xl"></i>
                                    <i className="fab fa-github text-xl"></i>
                                    <i className="fab fa-linkedin text-xl"></i>
                                </div>
                                <span className="text-sm mt-2">or use your email password</span>
                                <input className="mt-2 w-full p-2 bg-gray-100 rounded-lg outline-none text-sm" type="email" placeholder="Email" />
                                <input className="mt-2 w-full p-2 bg-gray-100 rounded-lg outline-none text-sm" type="password" placeholder="Password" />
                                <a href="#" className="mt-2 text-xs text-gray-500">Forgot your password?</a>
                                <button className="mt-4 px-8 py-2 text-white bg-gradient-to-r from-lime-300 to-lime-700 rounded-lg text-sm uppercase font-semibold">Sign In</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};