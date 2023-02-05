import React from 'react';
import CardWitget from '../Cart/CartWidget';
import brand from '../../assests/logo_gamer.svg';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
	return (
		<header className="fixed bg-sky-100 shadow-md  z-20 w-full px-2 py-1 flex justify-between items-center">
			<div className=' flex flex-row p-2  h-full w-full justify-start'>

				<div className="cursor-pointer">
					{/* Botón de menú  */}
					<NavLink to="/">
						<a className="font-sans text-2xl text-blue-900 tracking-wide font-semibold" > <h2> GAME ZONE </h2></a>
					</NavLink>
				</div>

				{/* links de navegación */}
				<nav className='flex justify-start'>
					<ul className="flex justify-start">
						<li className="font-bold px-3 py-2 text-slate-700  hover:underline">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="font-bold px-3 py-2 text-slate-700  hover:underline">
							<NavLink to="/productos/Games">Novedades</NavLink>
						</li>
						<li className="font-bold px-3 py-2 text-slate-700  hover:underline">
							<NavLink to="/productos/Consolas">Consolas</NavLink>
						</li>
					</ul>
				</nav>

				<CardWitget className="justify-end" />


			</div>





		</header>
	);
};

export default NavBar;