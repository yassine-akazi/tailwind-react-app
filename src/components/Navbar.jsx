import React , {useState}from 'react' ; 
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav , setNav] = useState(false)
    const handelNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '> LOGO.</h1>
            <ul className='hidden md:flex  '>
                <li className='p-4 '>HOME</li>
                <li className='p-4 '>COMPANY</li>
                <li className='p-4 '>RESOURCES</li>
                <li className='p-4 '>ABOUT</li>
                <li className='p-4 '>CONTACT</li>
            </ul>
            <div onClick={handelNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                
                
            </div>
            <div className={nav ?'fixed left-0 top-16 w-[100%] h-full  bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] '}>

                <ul className=' uppercase p-4' >
                <li className='p-4  border-b border-gray-600'>HOME</li>
                <li className='p-4 border-b border-gray-600'>COMPANY</li>
                <li className='p-4 border-b border-gray-600'>RESOURCES</li> 
                <li className='p-4 border-b border-gray-600'>ABOUT</li>
                <li className='p-4 '>CONTACT</li>
                </ul>
            </div>
        </div>
    )

}
export default Navbar 