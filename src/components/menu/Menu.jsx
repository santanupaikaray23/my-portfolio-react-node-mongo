import "./menu.scss"

export default function Menu({ menuOpen , setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Education</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Experience</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
            
        </div>
    )
}
