<script lang="ts" setup>
import Header from "../../components/Shared/Header.vue";
import ResumeContent from "./components/ResumeContent.vue";
</script>
<template lang="">
    <div
        class="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full"
    >
        <div class="z-50">
            <!-- container start -->
            <div class="container">
                <Header></Header>
                <resume-content></resume-content>
            </div>
        </div>
    </div>
</template>
