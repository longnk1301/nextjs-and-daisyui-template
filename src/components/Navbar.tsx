import Link from "next/link";
import {
  AiOutlineAim,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div id="nav-bar" className="navbar w-full bg-base-200 pt-0 pb-1 pl-5">
      <div className="w-full">
        <select className="select select-sm mr-2 text-md py-0 rounded-full focus:outline-none">
          <option className="p-3">Orgz #1</option>
          <option className="p-3">Orgz #2</option>
          <option className="p-3">Orgz #3</option>
        </select>

        <span>
          <div className="dropdown dropdown-hover p-3 mt-2 hover:bg-gray-200 rounded-lg">
            <AiOutlineSetting className="m-0 p-0 cursor-pointer" />
            <div
              tabIndex={0}
              className="dropdown-content menu w-32 mt-2 p-0 m-0 bg-base-100 rounded-md shadow-md"
            >
              <h1 className="text-lg font-semibold p-1 pb-2 px-3 border-b">
                Setup
              </h1>
              <ul className="text-sm">
                <li className="p-0 m-0">
                  <Link href="" className="p-2 px-3">
                    <AiOutlineAim />
                    Menu 1
                  </Link>
                </li>
                <li className="p-0 m-0">
                  <Link href="" className="p-2 px-3">
                    <AiOutlineAim />
                    Menu 2
                  </Link>
                </li>
                <li className="p-0 m-0">
                  <Link href="" className="p-2 px-3">
                    <AiOutlineAim />
                    Menu 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </span>
      </div>

      <div className="float-right">
        <Link
          href=""
          className="flex ml-1 hover:bg-gray-100 rounded-lg p-1 py-2"
        >
          <AiOutlineMail className="text-lg" />
          <span className="text-xs text-red-500 font-bold -mt-1">10</span>
        </Link>

        <Link
          href=""
          className="flex ml-1 hover:bg-gray-100 rounded-lg p-1 py-2"
        >
          <AiOutlineBell className="text-lg" />
          <span className="text-xs text-red-500 font-bold -mt-1">25</span>
        </Link>
      </div>
    </div>
  );
}
