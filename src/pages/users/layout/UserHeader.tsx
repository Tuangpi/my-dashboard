import { useAppDispatch, useAppSelector } from "@/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleHamburger } from "./store/hamburgerReducer";
import building from "@/assets/Buildings.jpg";
import { IoNotifications } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut, BiUser } from "react-icons/bi";
import { toggleDropDown } from "./store/UserMenuDropDownReducer";
import { logout } from "../Auth/store/authReducer";

const UserHeader = () => {
  const dispatch = useAppDispatch();
  const hamburger = useAppSelector((state) => state.hamburger.isOpen);
  const userDropDown = useAppSelector((state) => state.userDropdown.isOpen);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {hamburger ? (
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-95 h-screen w-full text-white flex flex-col items-center justify-center p-4"
          onClick={() => dispatch(toggleHamburger({ isOpen: false }))}
        >
          <div className="mb-4" onClick={(e) => e.stopPropagation()}>
            Item 1
          </div>
          <div className="mb-4" onClick={(e) => e.stopPropagation()}>
            Item 2
          </div>
        </div>
      ) : (
        <div className="w-full bg-white flex justify-between sm:justify-end items-center px-2 pr-4">
          <div
            className="block sm:hidden"
            onClick={() => dispatch(toggleHamburger({ isOpen: true }))}
          >
            <RxHamburgerMenu size={20} />
          </div>
          <div className="flex items-center py-2">
            <div className="text-red-500 mr-2">
              <IoNotifications size={24} />
            </div>
            <div className="p-0.5 bg-gray rounded-full relative">
              <img
                src={building}
                className="w-[2.2rem] h-[2.2rem] rounded-full cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleDropDown({ isOpen: !userDropDown }));
                }}
              />
              {userDropDown && (
                <div className="absolute top-12 right-0">
                  <div className="bg-white border border-gray border-opacity-25 rounded-corner font-medium py-1.5">
                    <Link
                      to="/user/profile"
                      className="flex justify-end items-center gap-x-2 hover:bg-gray-light px-4 py-1 cursor-pointer rounded-b-corner"
                    >
                      <span>Profile</span>
                      <BiUser />
                    </Link>
                    <div
                      className="flex justify-end items-center gap-x-2 hover:bg-red-600 hover:text-white px-4 py-1 cursor-pointer rounded-b-corner"
                      onClick={() => handleLogout()}
                    >
                      <span>Logout</span>
                      <BiLogOut />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default UserHeader;
