<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <Header />
  <!-- bodypage -->
  <div class="w-full flex h-[70vh]">
    <!-- label -->
    <div class="w-[50%] ml-36 p-20">
      <div class="text-[#ffbe1c] text-[20px]"><strong>Our Exclusive</strong></div>
      <h1 class="text-[50px]"><strong>Adidas Campus</strong></h1>
      <p><strong>Our North American Field Guides provide tips for identifying 
        birds in all of the regions of the United States and Canada. 
        Download any of our guides for free now!</strong></p>
      <div class="">
        <RouterLink to="/product">
          <button class="bg-black text-white px-[10%] py-[5%] mt-4"><strong>VIEW COLLECTIONS</strong></button>
        </RouterLink>
      </div>
    </div>
    <!-- svg & pic -->
    <div class="w-[50%] h-full">
      <div class="w-full h-full ml-18 mt-16 relative">
        <div class="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[45%]">
          <svg class="w-[60%]" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stop-color="rgba(255, 190, 28, 1)" offset="0%"></stop><stop id="stop2" stop-color="rgba(255, 190, 28, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient)" d="M17.7,-29C24.1,-26.9,31.2,-24.5,35.6,-19.7C39.9,-14.8,41.4,-7.4,39.9,-0.9C38.4,5.6,33.8,11.3,29.2,15.7C24.6,20.1,20,23.3,15.1,25.5C10.2,27.7,5.1,29,-1.4,31.5C-8,33.9,-16,37.7,-22.7,36.5C-29.4,35.4,-34.8,29.3,-38.6,22.4C-42.4,15.5,-44.7,7.7,-42.3,1.4C-39.8,-4.9,-32.8,-9.9,-29,-16.8C-25.2,-23.8,-24.6,-32.8,-20.4,-36.1C-16.1,-39.5,-8,-37.2,-1.2,-35.1C5.6,-33,11.3,-31.1,17.7,-29Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path></svg>
        </div>
        <div class="w-[80%] absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[70%]">
          <img class="w-[80%] z-10" src="../assets/image/home.png" alt="">
        </div>
        <div class="bg-black text-white w-16 h-16 flex justify-center rounded-full items-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"><strong>$32</strong></div>
      </div>
    </div>
  </div>

  <div class="w-full px-10 mt-8">
    <RouterLink to="/product">
      <div class="w-full bg-[#ffbe1c] rounded-3xl p-8 flex justify-center text-white">Click here for 10% off</div>
    </RouterLink>
  </div>

  <!-- product -->
  <div class="w-full  grid grid-cols-4 gap-4 p-10">
    <div v-for="(product, index) in productFromApi" :key="index" class="bg-white rounded-lg shadow-[1px_1px_20px_-6px_#0D2750] p-4">
      <RouterLink :to="`/list/${product._id}`">
        <div>
          <img class="w-full" :src="serverUrl + product.image" alt="Image">
        </div>
      </RouterLink>
      <!-- star -->
      <div class="flex pt-4 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ffbe1c]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ffbe1c]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ffbe1c]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ffbe1c]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ffbe1c]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>

      </div>
      <div class="text-center">{{ product.title }}</div>
      <div class="text-center text-[#ffbe1c]"><strong>${{ product.price }}</strong></div>
    </div>
  </div>
  
  <!-- Footer -->
  <Footer/>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      productFromApi: [],
      serverUrl: 'https://vysingsun-api.onrender.com/static/'
    };
  },
  methods: {
    fetchData() {
      axios.get('https://vysingsun-api.onrender.com/product/allProduct')
        .then(response => {
          this.productFromApi = response.data;
          console.log(this.productFromApi);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
