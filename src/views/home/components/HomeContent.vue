<script setup lang="ts">
import Icon from "../../../components/Shared/Icon.vue";
interface user {
  name: string;
  facebook: string;
  tweeter: string;
  linkedin: string;
  github: string;
  image: string;
  jobTitle: string;
  stack: string;
  fiverr: string;
  upworks: string;
}
const user: user = {
  name: "Othman Charai",
  facebook: "https://www.facebook.com/otman.el.77985",
  tweeter: "https://twitter.com/OthmanCharai",
  linkedin: "https://www.linkedin.com/in/othman-charai-620590200/",
  image: "@/images/me.png",
  jobTitle: "Front/Back End Developer",
  stack: "Php/Laravel && {java-type}Script/Vue",
  github: "www.github.com/OthmanCharai",
  fiverr: "https://www.fiverr.com/share/Z9562a",
  upworks: "https://www.upwork.com/freelancers/~01d6200f1ddfb46e77?viewMode=1",
};
</script>
<template lang="">
  <!-- Home page contant start -->
  <div
    class="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
    data-aos="fade"
  >
    <!-- personal image -->
    <img
      class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
      :src="user.image"
      alt="about avatar"
    />
    <h3 class="mt-6 mb-1 text-5xl font-semibold dark:text-white">
      {{ user.name }}
    </h3>
    <p class="mb-4 text-[#7B7B7B]">
      {{ user.jobTitle }}<br />
      <span class="font-serif">{{ user.satck }}</span>
    </p>
    <!-- social link and social  buttons -->
    <div class="flex space-x-3">
      <!-- upworks icon and link -->
      <a :href="user.upworks" target="_blank" rel="noopener noreferrer">
        <span class="socialbtn text-[#e14a84]">
          <Icon name="up"></Icon>
        </span>
      </a>
      <!-- fiverr icon and link -->
      <a :href="user.fiverr" target="_blank" rel="noopener noreferrer">
        <span class="socialbtn text-[#e14a84]">
          <Icon name="fi"></Icon>
        </span>
      </a>
      <!-- github icon and link -->
      <a :href="user.github" target="_blank" rel="noopener noreferrer">
        <span class="socialbtn text-[#e14a84]">
          <i class="fa-brands fa-github"></i>
        </span>
      </a>
      <!-- facebook link -->
      <a :href="user.facebook" target="_blank" rel="noopener noreferrer">
        <span class="socialbtn text-[#1773EA]">
          <i class="fa-brands fa-facebook-f"></i>
        </span>
      </a>
      <!-- twitter link -->
      <a :href="user.tweeter" target="_blank" rel="noopener noreferrer">
        <span class="socialbtn text-[#1C9CEA]">
          <i class="fa-brands fa-twitter"></i>
        </span>
      </a>
      <!-- linkedin icon and link -->
      <a :href="user.linkedin" target="_blank" rel="noopener noreferrer">
        <span class="socialbtn text-[#0072b1]">
          <i class="fa-brands fa-linkedin-in"></i>
        </span>
      </a>
    </div>
    <!-- dowanload button -->
    <button class="dowanload-btn">
      <img src="@/images/icons/dowanload.png" alt="icon" class="mr-2" />Download
      CV
    </button>
  </div>
  <!-- Home page contant End -->
</template>

<style lang=""></style>
