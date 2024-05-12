import React, { useState } from 'react';
import { Collapse, Dropdown, initTWE } from 'tw-elements';

initTWE({ Collapse, Dropdown });
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      class="relative flex w-full flex-nowrap items-center justify-between bg-zinc-100 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
      data-twe-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <button
          class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent8"
          aria-controls="navbarSupportedContent8"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          class="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent8"
          data-twe-collapse-item
        >
          <ul
            class="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
              <a
                class=" font-normal  text-lg flex items-center text-black/100 transition duration-200 hover:text-black/40 hover:ease-in-out focus:text-black/40 active:text-black/40 motion-reduce:transition-none dark:text-black/40 dark:hover:text-black/40 dark:focus:text-black/40 dark:active:text-black/40 lg:px-2"
                aria-current="page"
                href="/"
                data-twe-nav-link-ref
              >
                Home
              </a>
            </li>

            <li
              class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-item-ref
              data-twe-dropdown-ref
            >
              <a
                class="font-normal text-lg flex items-center text-black/100 transition duration-200 hover:text-black/40 hover:ease-in-out focus:text-black/40 active:text-black/40 motion-reduce:transition-none dark:text-black/40 dark:hover:text-black/40 dark:focus:text-black/40 dark:active:text-black/40 lg:px-2"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-twe-dropdown-toggle-ref
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                Other stuff
                <span class="ms-1 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <ul
                class={`absolute z-[1000] float-left m-0 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg ${
                  isDropdownOpen ? 'block' : 'hidden'
                } dark:bg-surface-dark`}
                aria-labelledby="dropdownMenuButton1"
                data-twe-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/40 focus:bg-zinc-200/40 focus:outline-none active:bg-zinc-200/40 active:no-underline dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-100/25 dark:focus:bg-neutral-100/25 dark:active:bg-neutral-100/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    How To
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/40 focus:bg-zinc-200/40 focus:outline-none active:bg-zinc-200/40 active:no-underline dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-100/25 dark:focus:bg-neutral-100/25 dark:active:bg-neutral-100/25"
                    href="https://github.com/a2sh3r/web3cs"
                    data-twe-dropdown-item-ref
                  >
                    Github repo
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/40 focus:bg-zinc-200/40 focus:outline-none active:bg-zinc-200/40 active:no-underline dark:bg-surface-dark dark:text-black dark:hover:bg-neutral-100/25 dark:focus:bg-neutral-100/25 dark:active:bg-neutral-100/25"
                    href="https://vk.com/club224657976"
                    data-twe-dropdown-item-ref
                  >
                    VK
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
