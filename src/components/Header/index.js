
import Logo from "../../assets/images/icon.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="w-full bg-gray-400/60 flex py-[21px] justify-between px-[65px] fixed" >
           <img src={Logo} alt="logoImg" width={44} height={46}/>
           <ul className="w-full text-white flex gap-[32px] justify-center items-center">
            <Link to='/'>Home</Link>
            <Link to='/'>AI Tool</Link>
            <Link to='/dashborad:ourstory'>Our Story</Link>
            <Link to='/newnfts'>New Nfts</Link>
            <Link to='/bestcreations'>Best Creations</Link>
            <Link to='/lstestnews'>Lstest News</Link>
           </ul>
           <div className="flex gap-[15px]">
            <Link className="px-[29.5px] py-[6px] border-2 border-[#edb731] rounded-full" to='/signup'>Signup</Link>
            <Link className="px-[29.5px] py-[6px] bg-[#edb731] rounded-full" to='/login'>Login</Link>
           </div>
        </div>
    )
}