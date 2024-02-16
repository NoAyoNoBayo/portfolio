<script setup lang="ts">
</script>

<template>
  <div class="flex justify-content-center w-full">
    <div class="flex flex-column p-3 align-items-center lg:w-4 sm:w-full p-2">
      <div class="text-4xl" style="color: var(--light);">
        Kapouranis Dimitrios
      </div>
      <div class="text-xl" style="color: var(--neutral);">
        Full Stack Developer
      </div>
      <div class="flex justify-content-center">
        <img src="@/assets/avatar.png" width="150" />
      </div>
      <div class="flex justify-content-center pt-5">
        <div class="bio flex flex-column w-8 gap-3 lg:text-lg fadein animation-duration-1000">
          <div class="p-1 text-xl">
            Hello! Welcome to my portfolio.<br>
            I am a full stack developer based in Greece.<br>
          </div>
          <div class="p-1 text-xl">
            Check the tools tab, you may find something usefull
            <i class="pi pi-heart" />
          </div>
          <div class="p-1 text-xl">
            Contact me to discuss the ways<br>
            we can work together!<br>
          </div>
          <div class="flex w-full justify-content-end text-sm">
            - Me :)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bio {
  font-family: BadScript;
}
</style>
