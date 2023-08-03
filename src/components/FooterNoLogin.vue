<template>
    <div class="bg-[#ffdc1c] w-full px-8 py-2">
        <div class="flex items-center">
            <a href="/vysingsun_e_commerce.github.io/" class="flex-shrink-0">
                <strong>Buy me a shoes</strong>
            </a>
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

      <div class="w-full flex justify-between">
        <div class="w-[40%] flex gap-[5%] items-end">
          <img class="w-24 h-fit" src="../assets/image/vi10.png" alt="">
          <img class="w-10  h-fit" src="../assets/image/ma11.png" alt="">
          <img class="w-28 h-fit" src="../assets/image/paypal.png" alt="">
        </div>
        <div>
            <div class="text-[15px]">Stay In Touch! Join our Newsletter</div>
            
                <form class="flex items-center">   
                    <label for="simple-search" class="sr-only">Your email address</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" class="px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email address..." required>
                    </div>
                    <button type="submit" class=" p-2.5 px-4 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Subscribe
                    </button>
                </form>

            </div>
        </div>
    </div>
</template>