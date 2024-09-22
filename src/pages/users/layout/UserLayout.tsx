import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";
import { useAppDispatch } from "@/store";
import { toggleDropDown } from "./store/UserMenuDropDownReducer";

const UserLayout = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex bg-gray-light"
      onClick={() => dispatch(toggleDropDown({ isOpen: false }))}
    >
      <div className="w-0 sm:w-1/5 max-h-screen overflow-y-auto sidebar-scrollbar bg-gray ">
        <UserSidebar />
      </div>
      <div className="w-full max-h-screen overflow-y-auto relative">
        <UserHeader />
        <Outlet />
      </div>
    </div>
  );
};
export default UserLayout;
