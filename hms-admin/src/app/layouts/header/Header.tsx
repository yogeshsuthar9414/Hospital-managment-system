import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleisSidebar, handleDarkmode } from "../../redux/layout";
import { AlignLeft, SunLight, HalfMoon, Mail, BellNotification, Plus, Search } from "iconoir-react";
// import Profile from "./Profile";
import { Button, Input } from "antd";
import "../../assets/scss/_header.css";

export const Header = () => {
  const screenWidth = useSelector((state: any) => state.layout.screenWidth);
  const isSidebar = useSelector((state: any) => state.layout.isSidebar);
  const isdark = useSelector((state: any) => state.layout.isDark);

  const dispatch = useDispatch();

  const [isProfileMenu, setIsProfileMenu] = useState<boolean>(false);
  const profileMenuRef: any = useRef<undefined>();
  const profileMenuIconRef: any = useRef<undefined>();

  useEffect(() => {
    const closeProfileMenu = (event: MouseEvent) => {
      if (
        !profileMenuRef?.current?.contains(event.target) &&
        !profileMenuIconRef?.current?.contains(event.target)
      ) {
        setIsProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", closeProfileMenu);
  }, [profileMenuRef]);

  return (
    <div>
      <header
        className={`header h-[70px] border-b border-slate-300 transition-all duration-300 ${screenWidth <= 875 || !isSidebar ? "w-full" : ""
          }`}
      >
        <div className="header-left">
          {screenWidth <= 875 && (
            <Link to="/" className="logo">
              <img src="/image/logo1.png" alt="MACINX Logo" />
            </Link>
          )}

          <div
            className="sidebar-icon"
            onClick={() => {
              dispatch(handleisSidebar(!isSidebar));
            }}
          >
            <AlignLeft className="text-xs" />
          </div>
        </div>

        <div className="header-right">
          <div>
            <Input placeholder="Seach" className="!rounded-full h-[35px]" prefix={<Search className="text-xs" />} />
          </div>

          <Button type="primary" shape="circle" className="h-[35px] w-[35px]">
            <Plus className="text-xs" />
          </Button>
          <div
            className="Dark-icon"
            onClick={() => dispatch(handleDarkmode(!isdark))}
          >
            {isdark ? <SunLight className="text-xs" /> : <HalfMoon className="text-xs" />}
          </div>
          <div
            className="Massage-icon"
          // onClick={() => setIsMessagesOpen(!isMessagesOpen)}
          // ref={messagesIconRef}
          >
            {/* <Badge overlap="circular" badgeContent=" " variant="dot"> */}
            {/* <i className="bx bx-envelope text-lg cursor-pointer"></i> */}
            <Mail className="text-xs" />
            {/* </Badge> */}
          </div>
          <div
            className="Notification-icon"
          // onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          // ref={notificationIconRef}
          >
            {/* <Badge overlap="circular" badgeContent=" " variant="dot"> */}
            <BellNotification className="text-xs" />
            {/* </Badge> */}
          </div>
          <div
            className="Profile"
            onClick={() => setIsProfileMenu(!isProfileMenu)}
            ref={profileMenuIconRef}
          >
            <img src="/image/Profile.png" alt="" className="Profile-img" />
          </div>
        </div>
      </header>

      {/* {isProfileMenu && (
        <Profile
          screenSize={screenWidth}
          profileMenuRef={profileMenuRef}
          isProfileMenu={isProfileMenu}
        />
      )} */}
    </div>
  );
};
