import React from 'react'
import { Outlet } from 'react-router-dom'
const DashboardWrapper = () => {
    return (
        <div>
            {/* sidebar */}

            <div>
                {/* Navbar  */}
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardWrapper
