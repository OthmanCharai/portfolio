<script setup lang="ts">
let isdarkMode: boolean = false;
const toggleMode = (): void => {
    isdarkMode = !isdarkMode;
};
</script>

<template lang="">
    <!-- header start for large screens -->
    <header
        class="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]"
    >
        <div
            class="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black"
        >
            <div
                class="flex justify-between w-full items-center space-x-4 lg:my-8 my-5"
            >
                <!-- website logo -->
                <a class="text-5xl font-semibold" href="/">
                    <img
                        class="h-[26px] lg:h-[32px]"
                        src="../../images/logo/logo.png"
                        alt="logo"
                    />
                </a>
                <div class="flex items-center">
                    <!-- light and dark mode button -->
                    <button
                        id="theme-toggle-mobile"
                        type="button"
                        class="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2"
                    >
                        <i
                            id="theme-toggle-dark-icon-mobile"
                            class="fa-solid text-xl fa-moon"
                        ></i>
                        <i
                            id="theme-toggle-light-icon-mobile"
                            class="fa-solid fa-sun text-xl hidden"
                        ></i>
                    </button>
                    <!-- mobile toggle button -->
                    <button
                        id="menu-toggle"
                        type="button"
                        class="menu-toggle-btn"
                    >
                        <i
                            id="menu-toggle-open-icon"
                            class="fa-solid fa-bars text-xl"
                        ></i>
                        <i
                            id="menu-toggle-close-icon"
                            class="fa-solid fa-xmark text-xl hidden"
                        ></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- header items two for large screens -->
        <nav class="hidden lg:block">
            <ul class="flex my-12">
                <li>
                    <router-link
                        class="menu-item-two"
                        :to="{ name: 'Home' }"
                        active-class="active menu-item-two-active"
                    >
                        <span class="mr-2 text-base">
                            <i class="fa-solid fa-house"></i>
                        </span>
                        Home</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="menu-item-two"
                        active-class="active menu-item-two-active"
                        :to="{ name: 'About' }"
                    >
                        <span class="mr-2 text-base">
                            <i class="fa-regular fa-user"></i>
                        </span>
                        About
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{ name: 'Resume' }"
                        class="menu-item-two"
                        active-class="active menu-item-two-active"
                    >
                        <span class="mr-2 text-base">
                            <i class="fa-regular fa-file-lines"></i>
                        </span>
                        Resume
                    </router-link>
                </li>
                <li>
                    <a class="menu-item-two" href="./portfiloTwo.html">
                        <span class="mr-2 text-base">
                            <i class="fas fa-briefcase"></i>
                        </span>
                        Works
                    </a>
                </li>
                <li>
                    <a class="menu-item-two" href="./blogTwo.html">
                        <span class="mr-2 text-base">
                            <i class="fa-brands fa-blogger"></i>
                        </span>
                        Blogs
                    </a>
                </li>
                <li>
                    <router-link
                        :to="{ name: 'Contact' }"
                        class="menu-item-two"
                        active-class="active menu-item-two-active"
                        ><span class="mr-2 text-base">
                            <i class="fa-solid fa-address-book"></i>
                        </span>
                        Contact</router-link
                    >
                </li>
                <li>
                    <!-- light and dark mode button -->
                    <button
                        id="theme-toggle"
                        @click="toggleMode"
                        type="button"
                        class="dark-light-btn w-[44px] h-[44px] ml-2"
                    >
                        <i
                            id="theme-toggle-dark-icon"
                            class="fa-solid text-xl fa-moon"
                            :class="{ hidden: isdarkMode }"
                        ></i>
                        <i
                            id="theme-toggle-light-icon"
                            class="fa-solid fa-sun text-xl"
                            :class="{ hidden: !isdarkMode }"
                        ></i>
                    </button>
                </li>
            </ul>
        </nav>

        <!-- mobile menu start -->
        <nav id="navbar" class="hidden lg:hidden">
            <ul
                class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]"
            >
                <li>
                    <a class="mobile-menu-items-active" href="./homePage.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-solid fa-house"></i>
                        </span>
                        Home
                    </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./aboutTwo.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-user"></i>
                        </span>
                        About
                    </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./resumeTwo.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-file-lines"></i>
                        </span>
                        Resume
                    </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./portfiloTwo.html">
                        <span class="mr-2 text-xl">
                            <i class="fas fa-briefcase"></i>
                        </span>
                        Works
                    </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./blogTwo.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-brands fa-blogger"></i>
                        </span>
                        Blogs
                    </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./contactTwo.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-solid fa-address-book"></i>
                        </span>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        <!-- mobile menu end -->
    </header>
    <!-- header  end -->
</template>
<style lang=""></style>
