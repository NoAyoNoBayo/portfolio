<template>
  <div class="flex flex-column gap-2 p-3 align-items-center w-full">
    <div class="text-2xl" style="color: var(--light);">
      Tools I have developed
    </div>
    <div class="text-sm" style="color: var(--neutral);">
      Feel free to use and send feedback
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
:deep(.p-dataview-header) {
  background: var(--light);
}

:deep(.p-dataview .p-dataview-content) {
  background: var(--neutral);
}
</style>
