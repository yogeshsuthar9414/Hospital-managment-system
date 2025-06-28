import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { Header } from './header/Header'

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
            </div>
        </div>
    )
}
