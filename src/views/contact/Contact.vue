<script setup lang="ts">
import Header from "../../components/Shared/Header.vue";
import ContactContent from "./components/ContactContent.vue";
</script>
<template lang="">
    <div
        class="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full"
    >
        <div class="z-50">
            <!-- container start -->
            <div class="container">
                <Header></Header>
                <contact-content></contact-content>
            </div>
        </div>
    </div>
</template>

<style lang=""></style>
