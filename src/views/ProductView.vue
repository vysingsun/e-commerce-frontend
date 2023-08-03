<script setup>
    import HeaderAdmin from '../components/HeaderAdmin.vue';
    import SidebarAdmin from '../components/SidebarAdmin.vue';
    import Product from '../components/Admin/Product.vue'
</script>
<template>
    <div>
        <HeaderAdmin/>
        <main>
            <div class="mx-auto bg-slate-200">
                <div class="flex">
                    <!-- Sidebar -->
                    <SidebarAdmin/>
                    <!-- List -->
                    <Product/>
                </div>
            </div>
        </main>
    </div>
</template>