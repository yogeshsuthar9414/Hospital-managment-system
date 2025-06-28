import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavArrowRight } from "iconoir-react";
import "../../assets/scss/_sidebar.css";

export const NavMenu: React.FC<any> = ({ menus }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (i: any) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };

  const location = useLocation();
  const locationName = location.pathname.replace("/", "");

  useEffect(() => {
    let submenuIndex = null;
    menus.map((item: any, i: number) => {
      if (!item.child) return;
      if (item.link === locationName) {
        submenuIndex = null;
      } else {
        const ciIndex = item.child.findIndex(
          (ci: any) => ci.childlink === locationName
        );
        if (ciIndex !== -1) {
          submenuIndex = i;
        }
      }
    });
    setActiveSubmenu(submenuIndex);
  }, [location]);

  return (
    <>
      <ul>
        {menus.map((items: any, id: number) => {
          const { Icon } = items;
          return (
            <li key={id} className={`reletive mt-2 `}>
              {!items.child && !items.isHeader && (
                <div className="group">
                  <NavLink
                    className="flex items-center text-sm leading-3 capitalize p-1 rounded cursor-pointer group-hover:bg-primary "
                    to={items.link}
                  >
                    <span
                      className="inline-flex justify-center text-[var(--dark)] group-hover:text-secondary items-center text-md h-[35px] w-[35px]"
                      style={{ flexGrow: 0 }}
                    >
                      <Icon className="text-xs group-hover:text-secondary" />
                    </span>
                    <div
                      className="text-sm menu-title text-[var(--dark)] group-hover:text-secondary"
                      style={{ flexGrow: 1 }}
                    >
                      {items.title}
                    </div>
                  </NavLink>
                </div>
              )}

              {items.isHeader && !items.child && (
                <div className="text-xs my-3 text-[var(--dark)]">
                  {items.title}
                </div>
              )}

              {items.isHeader && !items.child && items.isDivider && (
                <div className="w-full h-[1px] bg-[var(--light)]"></div>
              )}

              {items.child && (
                <div className="group">
                  <div
                    className={`flex items-center text-sm leading-3 capitalize p-1 rounded cursor-pointer group-hover:bg-primary ${activeSubmenu === id
                      ? "bg-[var(--primary-20)]"
                      : "collapsed"
                      }`}
                    onClick={() => toggleSubmenu(id)}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        className={`inline-flex justify-center text-light group-hover:text-secondary items-center text-md h-[35px] w-[35px] ${activeSubmenu === id ? "text-[var(--primary)]" : ""
                          }`}
                        style={{ flexGrow: 0 }}
                      >
                        <Icon className="text-xs" />
                      </span>
                      <div
                        className={`text-sm menu-title  group-hover:text-secondary ${activeSubmenu === id
                          ? "text-[var(--primary)]"
                          : "text-[var(--dark)]"
                          }`}
                        style={{ flexGrow: 1 }}
                      >
                        {items.title}
                      </div>
                    </div>

                    <div style={{ flex: "1 1 0%" }}>
                      <div
                        className={`h-[20px] w-[20px] text-lg text-[var(--dark)] bg-[var(--primary-20)] rounded-full flex items-center justify-center ml-auto transition-all duration-300 mr-1 ${activeSubmenu === id
                          ? "rotate-90 !bg-transparent text-[var(--primary)] group-hover:text-secondary"
                          : ""
                          }`}
                      >
                        <NavArrowRight className="text-[10px]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`ml-4 ${activeSubmenu === id
                  ? "h-auto overflow-initial pt-3 opacity-1"
                  : "h-0 overflow-hidden opacity-0"
                  }`}
                style={{
                  transition:
                    activeSubmenu === id
                      ? "all 0.5s ease"
                      : "all 0.5s ease-out",
                }}
              >
                <ul>
                  {items.child?.map((Submenu: any, i: any) => (
                    <li key={i} className="childMenuList">
                      <NavLink to={Submenu.childlink}>
                        {({ isActive }: any) => (
                          <span
                            className={`text-sm flex items-center gap-2 mb-2 group ${isActive ? "childLinkActive" : "ChildLinkInactive"
                              }`}
                          >
                            <span
                              style={{ margin: "0 5px" }}
                              className={`w-2 h-2 rounded-full inline-block border-2 border-[var(--light)] flex-none  group-hover:border-primary ${isActive
                                ? "bg-primary border-primary shadow-md ring-4 ring-opacity-[15%] ring-[var(--primary-50)]"
                                : ""
                                }`}
                            ></span>
                            <span
                              className={`child-title text-[var(--dark)] text-sm group-hover:text-primary ${isActive ? "text-primary" : ""
                                }`}
                            >
                              {Submenu.childtitle}
                            </span>
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
