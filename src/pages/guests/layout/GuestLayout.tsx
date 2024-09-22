import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="bg-gray-light">
      <Outlet />
    </div>
  );
};
export default GuestLayout;
