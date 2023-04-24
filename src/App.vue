<script setup lang="ts">
/* import { onBeforeMount } from "vue";
onBeforeMount(() => {
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("light");
    }
}); */
</script>
<template>
    <router-view />
</template>

<style></style>
