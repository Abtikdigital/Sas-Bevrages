import { Link } from "react-router-dom"
const Navbar=()=>{

    return(<>
    <div >
        <Link to="/Home">home</Link>
        <Link to="/About">about</Link>
        <Link to="/Product">product</Link>
        <Link to="/Team">team</Link>
        <Link to="/Contact">contact</Link>
    </div>
    </>)
}
export default Navbar