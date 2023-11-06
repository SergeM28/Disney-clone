import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-8">
                <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
                <div className="hidden lg:flex gap-8">
                    {menu.map((item, key) => (
                        <HeaderItem name={item.name} Icon={item.icon} key={key} />
                    ))}
                </div>
                <div className="flex lg:hidden gap-5">
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}
                    <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px]
                        p-3 border-gray-700 px-5 py-4">
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className="w-[40px] rounded-full" />
        </div>
    )
}

export default Header