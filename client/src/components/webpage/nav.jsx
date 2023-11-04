import Theme from "../../features/theme";
import logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="flex flex-row my-6 justify-between items-center h-24">
      <img src={logo} alt="Logo" className="w-logo h-logo rounded-3xl bg-gray-950" />
      <div className="p-2 duration-100 dark:bg-slate-700 bg-gary-100 rounded-full">
        <a className="mx-2 text-xl" href="#">Features</a>
        <a className="mx-2 text-xl" href="#">About Us</a>
      </div>
      <Theme />
    </div>
  )
}

export default Navbar;