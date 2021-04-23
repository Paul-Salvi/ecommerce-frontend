import products from "../productCard";
import { useRouter } from 'next/router'

function linkButton({ icon, text, onClick, href }) {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
    return (
        <div className="text-gray-900 title-font text-lg font-medium" onClick={onClick}>
            {icon ? <img className="icon" src={icon} alt="icon" /> : null}
            <a href={href} onClick={handleClick} >  <span> {text}</span></a>
        </div>
    );
}
export default linkButton;