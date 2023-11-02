import Theme from "../../features/theme";
import logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="Logo" className="w-logo h-logo rounded-3xl bg-gray-950" />
    </div>
  )
}

export default Navbar;