<script setup lang="ts">
</script>

<template>
  <div class="flex justify-content-center w-full lg:p-5 sm:p-0">
    <div class="flex flex-column lg:w-4 sm:w-full p-2">
      <div class="flex justify-content-center" style="color: var(--light);">
        Kapouranis Dimitrios
      </div>
      <div class="flex justify-content-center sm:text-base" style="color: var(--neutral);">
        Full Stack Developer
      </div>
      <div class="flex justify-content-center">
        <img src="@/assets/avatar.png" width="150" />
      </div>
      <div class="flex justify-content-center pt-5">
        <div class="bio flex flex-column w-8 gap-3 lg:text-lg fadein animation-duration-1000 text-xs">
          <div class="p-1">
            Hello! Welcome to my portfolio.<br>
            I am a full stack developer based in Greece.<br>
          </div>
          <div class="p-1">
            Check the tools tab, you may find something usefull
            <i class="pi pi-heart" />
          </div>
          <div class="p-1">
            Contact me to discuss the ways<br>
            we can work together!<br>
          </div>
          <div class="flex w-full justify-content-end">
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
