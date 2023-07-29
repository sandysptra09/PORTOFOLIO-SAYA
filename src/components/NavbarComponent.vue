<template>
    <div>

        <nav class="bg-black border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center">

                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"> Sandy Saputra. </span>
                </a>
                <div class="flex items-center md:order-2">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu"
                        class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white dark:text-white rounded-lg cursor-pointer hover:bg-black dark:hover:bg-black dark:hover:text-black">
                        
                        Indonesia
                    </button>
                    <!-- Dropdown -->
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                        id="language-dropdown-menu">
                        <ul class="py-2 font-medium" role="none">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        
                                        Indonesia
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                            <path d="M0 0h512v170.7H0z" />
                                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                        </svg>
                                        Deutsch
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                                            <g fill-rule="evenodd" stroke-width="1pt">
                                                <path fill="#fff" d="M0 0h512v512H0z" />
                                                <path fill="#009246" d="M0 0h170.7v512H0z" />
                                                <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                            </g>
                                        </svg>
                                        Italiano
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            id="flag-icon-css-cn" viewBox="0 0 512 512">
                                            <defs>
                                                <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                                            </defs>
                                            <path fill="#de2910" d="M0 0h512v512H0z" />
                                            <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)"
                                                xlink:href="#a" />
                                            <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)"
                                                xlink:href="#a" />
                                            <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)"
                                                xlink:href="#a" />
                                            <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)"
                                                xlink:href="#a" />
                                            <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                                xlink:href="#a" />
                                        </svg>
                                        中文 (繁體)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-language" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-language" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                    <ul
                        class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-white yellow-400 rounded md:bg-transparent md:text-yellow-400 md:p-0 md:dark:text-black-500"
                                aria-current="page">Beranda</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-slate rounded hover:bg-white md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-slate rounded hover:bg-white md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-amber-500 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skill</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-slate rounded hover:bg-white md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-amber-500 dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-slate rounded hover:bg-white md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>