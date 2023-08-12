import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [nav, setNav] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > prevScrollPos) {
                // Scrolling down
                setNav(false);
            } else {
                // Scrolling up
                setNav(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`fixed top-0 w-full h-24 bg-[#222831] text-white transition-transform duration-300 ${nav ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='flex justify-between h-24 items-center max-w-[1240px] mx-auto px-4'>
                <Link to='/' onClick={closeMobileMenu}>
                    <h1 className='w-full text-3xl font-bold justify-start text-[#00ADB5]'>GYM</h1>
                </Link>
                <ul className='hidden md:flex text-white'>
                    <li className='p-4'>
                        <Link to='/' onClick={() => scrollToSection('home-section')}>
                            Home
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/services' onClick={() => scrollToSection('services-section')}>
                            Services
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/team' onClick={() => scrollToSection('team-section')}>
                            Team
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/prices' onClick={() => scrollToSection('prices-section')}>
                            Prices
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/newsletter' onClick={() => scrollToSection('newsletter-section')}>
                            Newsletter
                        </Link>
                    </li>
                </ul>
                <div onClick={handleMobileMenuToggle} className='md:hidden block'>
                    {mobileMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={`md:hidden fixed left-0 top-0 w-[50%] border-r border-r-gray-900 h-full bg-[#222831] ease-in-out duration-200 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <h1 className='w-full text-3xl font-bold justify-start p-5 text-[#00ADB5]'>GYM</h1>
                    <ul className='pt-22 uppercase text-white bg-[#222831]'>
                        <li className='p-4 border-b border-gray-600'>
                            <Link to='/' onClick={() => { scrollToSection('home-section'); closeMobileMenu(); }}>
                                Home
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-600'>
                            <Link to='/services' onClick={() => { scrollToSection('services-section'); closeMobileMenu(); }}>
                                Services
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-600'>
                            <Link to='/team' onClick={() => { scrollToSection('team-section'); closeMobileMenu(); }}>
                                Team
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-600'>
                            <Link to='/prices' onClick={() => { scrollToSection('prices-section'); closeMobileMenu(); }}>
                                Prices
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-600'>
                            <Link to='/newsletter' onClick={() => { scrollToSection('newsletter-section'); closeMobileMenu(); }}>
                                Newsletter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


