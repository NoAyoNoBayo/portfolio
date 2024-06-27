<template>
  <div class="flex flex-column gap-2 p-3 align-items-center w-full">
    <div class="text-4xl" style="color: var(--light);">
      Tools I have developed
    </div>
    <div class="text-xl" style="color: var(--neutral);">
      Feel free to use and send feedback
    </div>
    <div class="flex justify-content-center p-4 flex-wrap gap-3">
      <Card>
        <template #header>
          <div class="flex w-full justify-content-center p-3">
            <img height="40" alt="user header" src="../assets/URL to QR.png" />
          </div>
        </template>
        <template #title>
          URL to QR Code Generator.
        </template>
        <template #subtitle>
          <div class="flex">
            <div>
              Translate your URLs to QR Code and include your logo!
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex w-full justify-content-end">
            <Button label="Try it!" icon="pi pi-bolt" />
          </div>
        </template>
      </Card>
      <Card>
        <template #header>
          <div class="flex w-full justify-content-center p-3">
            <i class="pi pi-spin pi-spinner text-5xl" />
          </div>
        </template>
        <template #title>
          More coming soon
        </template>
        <template #subtitle>
          <div class="flex flex-column">
            <div>
              Do you have anything useful in mind ?
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex w-full justify-content-end">
            <Button label="Request" icon="pi pi-comment" />
          </div>
        </template>
      </Card>
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

:deep(.p-button-icon) {
  color: var(--dark);
  padding: 2px;
}
</style>
