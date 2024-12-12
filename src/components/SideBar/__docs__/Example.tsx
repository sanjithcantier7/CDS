import React, { FC, useState } from 'react'
import SideBar from '../SideBar'

const Example = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div>
            <SideBar open={sideBarOpen} onClose={() => setSideBarOpen(false)} onClick={() => setSideBarOpen((prev) => !prev)} menus={undefined} />
        </div>
    );
}

export default Example
