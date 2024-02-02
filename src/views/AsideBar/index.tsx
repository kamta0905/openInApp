import React, { useEffect, useState } from "react";
import "./aside.css";
import notification from "../../assets/notification.svg";
import userAvatar from "../../assets/userAvatar.svg";
import logo from "../../assets/mediaLogo2.svg";
import menu from "../../assets/burgermenu.svg";
import { SideBar } from "../SideBar";
import routes from "../../routes";
export const AsideBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("inActive");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (!event.target.closest(".inline-block")) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleDocumentClick);

    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className="aside">
      <div className="aside_container">
        <div className="title_aside">Upload</div>
        <div className="menu_logo">
          <div onClick={() => setActive("active")}>
            <img src={menu} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <h1>Base</h1>
        </div>
        {active && setActive && <SideBar active={active} setActive={setActive} />}
        <div className="profile_section">
          <img src={notification} alt="notify" />
          <div
            className={`relative inline-block text-left ${isOpen ? "dropdown-visible" : ""}`}
            style={{ lineHeight: "normal" }}
          >
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <img src={userAvatar} alt="user" />
            </button>
            {isOpen && (
              <div
                className="absolute relative-inline-block right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a href="" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">
                    Account settings
                  </a>
                  <a href="" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">
                    Support
                  </a>
                  <a href="" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">
                    License
                  </a>
                  <a
                    href={routes.sign_in}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-3"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {props.child}
    </div>
  );
};
