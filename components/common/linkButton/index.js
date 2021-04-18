import products from "../productCard";

function linkButton({ icon, text, onClick, id }) {
    return (
        <div className="text-gray-900 title-font text-lg font-medium" onClick={onClick}>
            {icon ? <img className="icon" src={icon} alt="icon" /> : null}
            <a href={"product/"+id}>  <span> {text}</span></a>
        </div>
    );
}
export default linkButton;