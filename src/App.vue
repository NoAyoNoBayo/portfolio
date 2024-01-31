<script setup lang="ts">
var menubar_items = [
  {
    label: "Home",
  },
  {
    label: "Contact",
  },
  {
    label: "Tools",
  },
  {
    label: "About",
  },
  {
    label: "Resume",
  },
]
</script>

<template>
  <Menubar :model="menubar_items" class="flex w-full justify-content-between align-content-center header text-xl">
    <template #start>
      <div class="flex w-full pl-2">
        <i class="pi pi-envelope text-xl font-bold" />
      </div>
    </template>
    <template #end>
      <div class="flex w-full gap-3">
        <i class="pi pi-github" />
        <i class="pi pi-linkedin" />
      </div>
    </template>
  </Menubar>
  <RouterView />
</template>

<style scoped>
.header {
  min-height: 3.7em;
  border-radius: 0px;
  font-family: Arvo;
}

:deep .p-icon {
  color: var(--light);
}

:deep(.p-menubar-root-list) {
  gap: 1rem;
}
</style>
