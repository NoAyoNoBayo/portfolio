<template>
  <div class="flex flex-column gap-2 p-3 align-items-center w-full">
    <div class="text-4xl" style="color: var(--light);">
      My Resume
    </div>
    <div class="text-xl" style="color: var(--neutral);">
      Read or download my resume.
    </div>
    <div>
      <Image src="src/assets/public/cv/ResumePhoto.png" alt="Image" width="250" preview />
    </div>
    <a href="src/assets/public/cv/kapouranis-dimitrios.pdf">
      <Button label="Download" icon="pi pi-download" style="color: var(--light); background: var(--dark);" />
    </a>
  </div>
</template>
<style scoped>
:deep(.pi) {
  padding: 3px;
}
</style>

<script setup lang="ts">
</script>
