import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react-router'

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Correct the function name to 'pathMatchesRoute'
    function pathMatchesRoute(route) {
        if (route === location.pathname){
            return true;
        }
    }
   
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src="https://www.bamboogroupng.com/images/bamboo-group-1.svg" alt="logo" className='h-10 cursor-pointer' onClick={()=>navigate("/")} />
                </div>
                <div>
                    <ul className='flex space-x-10 '>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
                        ${pathMatchesRoute("/") && "text-black border-b-red-500" }`} onClick={()=>navigate("/")}>Home</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                         ${pathMatchesRoute("/offers") && "text-black border-b-red-500" }`} onClick={()=>navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                         ${pathMatchesRoute("/sign-in") && "text-black border-b-red-500" }`} onClick={()=>navigate("/sign-in")}>Sign in</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
