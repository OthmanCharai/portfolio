<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ name: string }>();
const flag = computed(() => (props.name == "up" ? true : false));
</script>
<template lang="">
    <!-- UPWORKS -->
 
    <svg
        v-if="flag"
        width="60"
        height="60"
        class="ml-2"
        viewBox="0 0 200 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
    >
        <path
            d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096.075-.3c1.536-8.62 6.409-23.089 21.402-23.089 11.244 0 20.39 9.146 20.39 20.39-.038 11.207-9.183 20.353-20.39 20.353zm0-61.395c-19.154 0-33.996 12.444-40.03 32.909-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993 21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359 22.601 0 41.005-18.516 41.005-41.118 0-22.564-18.404-40.967-41.005-40.967z"
            fill="#6FDA44"
        />
    </svg>

    <!-- FIVERR ICON -->
    <svg
        v-show="!flag"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 508.02 508.02"
    >
        <path
            class="a"
            d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
            transform="translate(-1.83 -0.98)"
        />
    </svg>
</template>
<style scoped lang="css">
.a {
    fill: #1dbf73;
}
</style>
