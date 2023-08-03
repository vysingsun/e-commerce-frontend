<template>
    <nav class="bg-[#ffbe1c] p-5 ml-0 mt-0">
        <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="/vysingsun_e_commerce.github.io/login">
                            <img class="w-24" src="../assets//image/logoadidas.png" alt="Your Company">
                        </a>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="/vysingsun_e_commerce.github.io/login" class=" text-white hover:bg-[#f2b31a] rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                            <a href="/vysingsun_e_commerce.github.io/login" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Products</a>
                            <a href="/vysingsun_e_commerce.github.io/login" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                            <a href="/vysingsun_e_commerce.github.io/login" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                            <a href="/vysingsun_e_commerce.github.io/login" class="text-white hover:bg-[#f2b31a] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
                        </div>
                    </div>
                </div>
                
                <div class="flex">
                    <form class="flex items-center">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-white rounded-lg border border-gray-200  focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>
                    <div class="hidden md:block ">
                        <div class="ml-4 p-2.5 flex items-center md:ml-6">
                            <button type="button" class=" rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="sr-only">View notifications</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            
                            <div class="flex gap-2 ml-3">
                                <a href="/vysingsun_e_commerce.github.io/login" class="h-8 text-white px-6 flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  aria-expanded="false" aria-haspopup="true">
                                    <strong>Login</strong>
                                </a>
                                <a href="" class="h-8 text-white px-6 flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  aria-expanded="false" aria-haspopup="true">
                                    <strong>Sign Up</strong>
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>         
            </div>
        </div>
    </nav>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'
    // 
</script>