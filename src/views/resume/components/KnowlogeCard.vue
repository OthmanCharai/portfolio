<script lang="ts" setup>
/* define the knowlege
 */
const Knowledges: string[] = [
    "WEB DEVELOPMENT",
    "PHP",
    "LARAVEL",
    "INERTIA",
    "SPLADE",
    "REST API",
    "THIRED API",
    "PAYMENT GETAWAY",
    "STRIPE",
    "PAYPAL",
    "GOOGLE PAY",
    "LIVEWIRE",
    "BREEZE",
    "JETSTREAM",
    "REDIS",
    "MYSQL",
    "SQLITE",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "VUE",
    "PINIA",
    "VUEX",
    "VUETIFY",
    "JQUERY",
    "CSS",
    "BOOTSTRAP",
    "TAILWIND",
    "HTML",
];
</script>

<template lang="">
    <!-- button group -->
    <div class="col-span-1">
        <h4 class="text-5xl dark:text-white font-medium mb-8">Knowledges</h4>
        <div class="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
            <button
                v-for="(knowlege, index) in Knowledges"
                :key="index"
                class="resume-btn"
            >
                {{ knowlege.toLowerCase() }}
            </button>
        </div>
    </div>
    <!-- end button group -->
</template>
