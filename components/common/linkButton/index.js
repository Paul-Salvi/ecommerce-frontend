function linkButton({ icon, text, onClick }) {
   return (
           <div className="text-gray-900 title-font text-lg font-medium" onClick={onClick}>
               {icon ? <img className="icon" src={icon} alt="icon" /> : null}
               <span>{text}</span>
           </div>
   );
}
export default linkButton;