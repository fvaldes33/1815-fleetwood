import Link from 'next/link';
import { useEffect, useState } from 'react';
import useDocScroll from '../hooks/useDocScroll';

const MINIMUM_SCROLL = 60;
const TIMEOUT_DELAY = 200;

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrollHeader, setScrollHeader] = useState<boolean>(false);

  useDocScroll(({ currentScrollTop }) => {
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setScrollHeader(isMinimumScrolled);
    }, TIMEOUT_DELAY);
  })

  return (
    <header
      className={`fixed z-50 ${scrollHeader ? 'bg-black py-2' : 'header-gradient py-6' } text-white w-full transition-all duration-300`}
    >
      <div className="font-display flex justify-between items-center select-none px-4 [ md:px-6 ]">
        <Link href="/" passHref>
          <a className="font-bold uppercase tracking-wide text-shadow-tight [ md:text-2xl ]">Fleetwood</a>
        </Link>

        <a href="#" className="block relative z-50 [ md:hidden ]" onClick={(e) => {
          e.preventDefault();
          setToggle(prev => !prev);
        }}>
          <svg fill="#FFFFFF" width="32px" height="32px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m36.5 55.5h44.898c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5h-44.898c-3 0-5.5 2.5-5.5 5.5s2.3984 5.5 5.5 5.5z" />
              <path d="m55.898 86.898h25.398c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5h-25.398c-3 0-5.5 2.5-5.5 5.5 0 3.1016 2.5 5.5 5.5 5.5z" />
              <path d="m19 24h62.398c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5h-62.398c-3 0-5.5 2.5-5.5 5.5s2.3984 5.5 5.5 5.5z" />
            </g>
          </svg>
        </a>

        <nav className="hidden [ md:flex md:space-x-8 ]">
          <Link href="#overview" passHref>
            <a className="font-bold uppercase tracking-wide text-shadow-tight">Overview</a>
          </Link>
          <Link href="#photos" passHref>
            <a className="font-bold uppercase tracking-wide text-shadow-tight">Photos</a>
          </Link>
          <Link href="#features" passHref>
            <a className="font-bold uppercase tracking-wide text-shadow-tight">Features</a>
          </Link>
          <Link href="#video" passHref>
            <a className="font-bold uppercase tracking-wide text-shadow-tight">Video</a>
          </Link>
          <Link href="#contact" passHref>
            <a className="font-bold uppercase tracking-wide text-shadow-tight">Contact</a>
          </Link>
        </nav>

        <nav
          className="absolute inset-0 flex flex-col space-y-12 items-center justify-center h-screen w-screen bg-gray-900 text-white transition-transform duration-300 ease-in-out [ md:hidden ] z-40"
          style={{
            transform: toggle ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 00, 0)'
          }}
        >
          <Link href="#overview" passHref>
            <a onClick={() => setToggle(prev => !prev)} className="text-2xl uppercase tracking-wide [ md:text-base ]">Overview</a>
          </Link>
          <Link href="#photos" passHref>
            <a onClick={() => setToggle(prev => !prev)} className="text-2xl uppercase tracking-wide [ md:text-base ]">Photos</a>
          </Link>
          <Link href="#features" passHref>
            <a onClick={() => setToggle(prev => !prev)} className="text-2xl uppercase tracking-wide [ md:text-base ]">Features</a>
          </Link>
          <Link href="#video" passHref>
            <a onClick={() => setToggle(prev => !prev)} className="text-2xl uppercase tracking-wide [ md:text-base ]">Video</a>
          </Link>
          <Link href="#contact" passHref>
            <a onClick={() => setToggle(prev => !prev)} className="text-2xl uppercase tracking-wide [ md:text-base ]">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
