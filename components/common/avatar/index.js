
function UserInfo(props) {
  
  
 
   return (
    <div className="w-12 h-10 relative mb-4">
    <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
      <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
      <img src={props.userPhoto} alt="lovely avatar" className="object-cover object-center w-full h-full visible group-hover:hidden" />
    </div>
  </div>
   )
};

export default UserInfo;