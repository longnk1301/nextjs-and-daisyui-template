import { useState } from "react";
import Link from "next/link";
import {
  BsArrowLeftShort,
  BsKey,
  BsShieldLock,
  BsShieldLockFill,
} from "react-icons/bs";
import {
  AiOutlineCluster,
  AiOutlineDash,
  AiOutlineForm,
  AiOutlineGateway,
  AiOutlineGroup,
  AiOutlineHome,
  AiOutlineKey,
  AiOutlineLock,
  AiOutlineNotification,
  AiOutlinePartition,
  AiOutlinePoweroff,
  AiOutlineShop,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Sidebar() {
  const [open, setOpen] = useState<any>(false);

  const Menu = [
    {
      title: "Home",
      icon: <AiOutlineHome />,
      link: "/",
    },
    {
      title: "Introduce",
      icon: <AiOutlineGroup />,
      link: "/introduce",
    },
    {
      title: "News",
      icon: <AiOutlineNotification />,
      link: "/news",
    },
    {
      title: "Games",
      icon: <AiOutlineNotification />,
      link: "/games",
    },
    {
      title: "Apply",
      icon: <AiOutlineNotification />,
      link: "/apply",
    },
    {
      title: "Contact",
      icon: <AiOutlineNotification />,
      link: "/contact",
    },
    {
      title: "Terms",
      icon: <AiOutlineNotification />,
      link: "/terms",
    },
    {
      title: "Policy",
      icon: <AiOutlineNotification />,
      link: "/policy",
    },
  ];

  return (
    <div
      id="box-sidebar"
      className={`bg-base-300 h-screen p-2 pt-3 ${
        open ? "w-72" : "w-[60px]"
      } relative`}
    >
      <BsArrowLeftShort
        id="toggle-sidebar-colapse"
        className={`bg-base-200 absolute -right-5 mt-1 text-3xl rounded-full cursor-pointer duration-1000 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open && "rotate-180")}
      />

      <div id="box-brand" className="inline-flex">
        <SiNextdotjs
          className={`float-left bg-gray-500 text-white text-4xl rounded cursor-pointer p-2 mr-3 duration-1000 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`origin-left font-medium text-2xl duration-200 ${
            !open && "hidden"
          }`}
        >
          NEXTo
        </h1>
      </div>

      <ul id="sidebar-menu1" className="mt-6">
        {Menu.map((menu, index) => (
          <li key={index}>
            <Link href={menu.link}>
              <div
                data-tip={menu.title}
                className={`flex items-center gap-x-2 cursor-pointer p-2 hover:bg-base-100 duration-100 rounded-md ${
                  !open && "tooltip tooltip-right tooltip-ascent"
                }`}
              >
                <span
                  className={`text-xl text-base-content p-1 px-auto block float-left`}
                >
                  {menu.icon}
                </span>
                <span
                  className={`text-base flex-1 duration-100 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
