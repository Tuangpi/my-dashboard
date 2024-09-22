import { useEffect } from "react";

const Header = (title: string) => {
  useEffect(() => {
    window.document.title = title + " - Nearby Hire";
  }, [title]);

  return null;
};

export default Header;
