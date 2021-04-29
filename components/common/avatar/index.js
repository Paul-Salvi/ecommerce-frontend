
function UserInfo(props) {
  
  
 
   return (
    <div class="w-12 h-10 relative mb-4">
    <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
      <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
      <img src={props.userPhoto} alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
    </div>
  </div>
   )
};

export default UserInfo;