import { Link, NavLink } from "react-router-dom";

const navLists = [
    {
        name: 'Add Posts',
        href: '/add'
    },
    {
        name: "Posts",
        href: '/posts'
    }
]


const Navbar = () => {
    return (
        <nav>
            <ul className="bg-white flex justify-between items-center gap-6 px-4 sm:px-10 py-4 shadow-lg fixed top-0 w-full">

                <Link to='/posts' className="text-lg"> <span className="text-orange-400 font-semibold">T</span>askify</Link>
                <div className="flex gap-5">
                    {navLists.map((nav) => (
                        <NavLink to={nav.href} key={nav.name} className="flex justify-center items-center">
                            {nav.name}
                        </NavLink>
                    ))}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
