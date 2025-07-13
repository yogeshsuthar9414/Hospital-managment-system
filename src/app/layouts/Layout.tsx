import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { Header } from './header/Header'
import SmallLogo from "../assets/images/logoSmall.png"

export const Layout = () => {
    const isSidebar = useSelector((state: any) => state.layout.isSidebar);
    const screenWidth = useSelector((state: any) => state.layout.screenWidth);

    return (
        <div>
            <Sidebar />
            <div
                className={`${screenWidth >= 875 && isSidebar
                    ? "w-[calc(100%_-_260px)] ml-[260px]"
                    : "w-100"
                    } transition-all duration-300 `}
            >
                <Header />
                <div className="mt-[70px]">
                    <Outlet />
                </div>
                <footer
                    className={`fixed bottom-0 left-0 ${screenWidth >= 875 && isSidebar ? "ml-[260px] w-[calc(100%-260px)]" : "w-full"
                        } bg-[#f2f2f2] text-dark text-center py-3 text-sm z-50 shadow-[0_-1px_5px_rgba(0,0,0,0.1)]`}
                >
                    <div className="flex items-center justify-center gap-2">
                        <img src={SmallLogo} alt="HMS Logo" className="h-5 w-auto" />
                        © {new Date().getFullYear()} MediBridge. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    )
}
