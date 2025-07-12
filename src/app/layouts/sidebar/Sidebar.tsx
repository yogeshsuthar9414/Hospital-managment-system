import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavMenu } from "./NavMenu";
import { MenuItems } from "./menus";
import { Xmark } from "iconoir-react";
import { useDispatch } from "react-redux";
import { handleisSidebar } from "../../redux/layout";
import { useEffect } from "react";
// import { Button } from "antd";
import Logo from "../../assets/images/logo.png"
import "../../assets/scss/_sidebar.css";

export const Sidebar = () => {
  const screenWidth = useSelector((state: any) => state.layout.screenWidth);
  const isSidebar = useSelector((state: any) => state.layout.isSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (screenWidth <= 875) {
      dispatch(handleisSidebar(false));
    }
  }, []);

  return (
    <div>
      <div
        className={`${screenWidth <= 875 && isSidebar
          ? "bg-[#0004] w-full fixed left-0 top-0 transition duration-200 z-[999]"
          : ""
          }`}
      ></div>
      <div
        className={`side-menubar ${screenWidth >= 875
          ? `${isSidebar ? "" : "side-manubar-hidden"}`
          : `${isSidebar
            ? "side-menubar-open opacity-1 z-[9999]"
            : "side-manubar-hidden"
          }`
          }`}
        style={{
          transition: isSidebar ? "all 0.3s ease-out" : "all 0.3s ease-in",
        }}
      >

        <div
          className={`transition-all duration-300 h-[70px] flex items-center border-b border-slate-300 ${isSidebar
            ? "flex items-center bg-[var(--card)] w-full z-30 opacity-1 py-3"
            : "opacity-0"
            }`}
        >
          <Link
            to="/"
            className="w-full overflow-hidden px-3"
          >
            <img
              src={Logo}
              alt="company Logo"
              className="w-[160px]"
            />
          </Link>
          {screenWidth <= 875 && (
            <div className="close-menu">
              <div
                onClick={() => dispatch(handleisSidebar(!isSidebar))}
                className="bg-transparent"
              >
                <Xmark className="text-[var(--dark)]" />
              </div>
            </div>
          )}
        </div>

        <div className="main-menu overflow-auto px-3 pt-2 ">
          <NavMenu menus={MenuItems} />
        </div>
      </div>
    </div>
  );
};
