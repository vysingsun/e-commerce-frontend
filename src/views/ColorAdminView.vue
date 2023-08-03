<script setup>
    import HeaderAdmin from '../components/HeaderAdmin.vue';
    import SidebarAdmin from '../components/SidebarAdmin.vue';
    import Color from '../components/Admin/Color.vue'
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
                    <Color/>
                </div>
            </div>
        </main>
    </div>
</template>