import NavLink from './NavLink'
export default function MenuOverlay(){
    return(
        <div>
            <ul className="flex flex-col py-4 items-center">
                <li><NavLink href="#" title="About"/></li>
                <li><NavLink href='#' title='Projects' /></li>
                <li><NavLink href='#' title='Contact' /></li>
            </ul>
        </div>
    )
}