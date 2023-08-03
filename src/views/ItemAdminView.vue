<script setup>
    import HeaderAdmin from '../components/HeaderAdmin.vue';
    import SidebarAdmin from '../components/SidebarAdmin.vue';
    import Item from '../components/Admin/Item.vue'
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
                    <Item/>
                </div>
            </div>
        </main>
    </div>
</template>