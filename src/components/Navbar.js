import { useState } from 'react'
import { Link } from 'react-scroll'
import { 
    FaBars, 
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 pt-4 bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col'>
            <Link to="home" smooth={true} duration={500}>
                <h1 className='text-xl font-bold cursor-pointer'>Hoang Pham</h1>
            </Link>
            <Link to="home" smooth={true} duration={500}>
                <h2 className='font-light cursor-pointer'>Full-stack Developer</h2>
            </Link>
        </div>

        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li><Link to="skills" smooth={true} duration={500}>
                Skills
            </Link></li>
        </ul>

        {/* Hamburger */}
        <div onClick={() => setNav(!nav)} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <li>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
              </li>
        </ul>

        {/* Social icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/"
                    target='_blank'
                    rel='noreferrer'
                    >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/hoangpham56/"
                        target='_blank'
                        rel='noreferrer'
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto: afshoangpham56@gmail.com"
                    target='_blank'
                    rel='noreferrer'
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/afshoang/"
                        target='_blank'
                        rel='noreferrer'
                        >
                        Github <FaGithub size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar