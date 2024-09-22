import logo from "@/assets/react.svg";
import { TbDashboard, TbReport, TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
const UserSidebar = () => {
  return (
    <div className="w-full">
      <Link
        to="/user"
        className="flex justify-center items-center bg-gray-dark py-3"
      >
        <div>
          <img src={logo} />
        </div>
      </Link>
      <div className="ml-1 mt-3">
        <Link
          to="/user"
          className="mt-2 px-6 py-2 rounded-l-md flex justify-center lg:justify-start items-center gap-x-2 text-gray-light hover:text-gray-300 hover:bg-gray-dark"
        >
          <TbDashboard size={23} />
          <span className="hidden lg:block text-[15px]">Dashboard</span>
        </Link>

        <div className="mt-5 flex justify-center mx-1 lg:justify-start lg:mx-6 text-sm text-gray-300 font-semibold">
          Manage Users
        </div>
        <Link
          to="/user/users"
          className="mt-2 px-6 py-2 rounded-l-md flex justify-center lg:justify-start items-center gap-x-2 text-gray-light hover:text-gray-300 hover:bg-gray-dark"
        >
          <TbUsers size={23} />
          <span className="hidden lg:block text-[15px]">Users</span>
        </Link>
        <Link
          to="/user"
          className="px-6 py-2 rounded-l-md flex justify-center lg:justify-start items-center gap-x-2 text-gray-light hover:text-gray-300 hover:bg-gray-dark"
        >
          <TbUsers size={23} />
          <span className="hidden lg:block text-[15px]">Users</span>
        </Link>

        <div className="mt-5 flex justify-center mx-1 lg:justify-start lg:mx-6 text-sm text-gray-300 font-semibold">
          Reports
        </div>
        <Link
          to="/user"
          className="mt-2 px-6 py-2 rounded-l-md flex justify-center lg:justify-start items-center gap-x-2 text-gray-light hover:text-gray-300 hover:bg-gray-dark"
        >
          <TbReport size={23} />
          <span className="hidden lg:block text-[15px]">Dashboard</span>
        </Link>
      </div>
    </div>
  );
};
export default UserSidebar;
