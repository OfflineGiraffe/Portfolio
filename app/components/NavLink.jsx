import Link from "next/link"

const NavLink = ({ href, title }) => {
        return (
                <Link 
                href={href} 
                className="block py-2 pl-3 pr-4 text-white sm:text-xl 
                rounded md:p-0 hover:text-[white] transition duration-500
                 hover:scale-125  hover:rounded-lg hover:border-sky-500 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#add8e6,0_0_15px_#08f,0_0_30px_#08f]">
                        {title}
                        
                </Link>
        )
}

export default NavLink; 