import { useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul 
                onMouseLeave={() => setOpen(false)} className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details onMouseLeave={() => setOpen(false)} className="relative">
                <summary onMouseOver={() => setOpen(true)}>Parent</summary>
                <ul
                  className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl block`}
                >
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li 
                onMouseOver={() => setOpen(true)}>
              <Link>ok</Link>
              <ul
                className={`absolute right-0 w-40 py-2 mt-10 rounded-lg shadow-xl ${
                  open ? "block" : "hidden"
                }`}
              >
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Test;
