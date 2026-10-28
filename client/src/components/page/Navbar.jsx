import { LogOut, Settings, User2 } from "lucide-react";
import useAuthStore from "../../store/auth/authStore";
import { errorToast, successToast } from "../../utils/toast";
import Logo from "../helper/Logo";
import NavLink from "../helper/NavLink";

function Navbar() {
  const { authUser,  logoutUser } = useAuthStore();

  async function handleLogout() {
    const { success, message } = await logoutUser();
    if (!success) {
      errorToast(message);
    }

    successToast(message);
  }

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Logo /> 
          <div className="flex gap-2 ">

          <NavLink src={"/settings"} title={'Settings'} icon={Settings} />
          {authUser &&  
           <> 
            <NavLink src={'/profile'} title={'Profile'} icon={User2} />
            <button className="flex gap-2 items-center" onClick={handleLogout}>
              <LogOut className="size-5" />
            </button>
           </>
          }
          </div>
          </div>
      </div>
    </header>
  );
}

export default Navbar;
