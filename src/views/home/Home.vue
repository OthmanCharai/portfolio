<script setup lang="ts">
import Header from "../../components/Shared/Header.vue";
import ContentContent from "./components/HomeContent.vue";
</script>
<template>
    <div
        class="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full"
    >
        <div class="z-50">
            <!-- container start -->
            <div class="container">
                <Header></Header>
                <content-content></content-content>
            </div>
        </div>
    </div>
</template>

<style lang=""></style>
