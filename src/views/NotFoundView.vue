<template>
  <div class="flex flex-row w-full justify-content-center" style="color-scheme: var(--neutral);">
    <div class="flex flex-column w-full align-items-center p-4 gap-4">
      <div class="text-4xl" style="color: var(--light);">
        404
      </div>
      <div class="text-xl" style="color: var(--neutral);">
        The page you are looking for is currently unavailable or does not exist :(
      </div>
      <div>
        <Button label="Return home" icon="pi pi-home" @click="$router.push('/')"
          style="background: var(--light); color: var(--dark); font-family: Arvo;" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
:deep(.p-button-icon) {
  color: var(--dark);
  padding: 2px;
  border-color: var(--dark);
}
</style>
