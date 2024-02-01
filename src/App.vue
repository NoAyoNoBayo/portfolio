<script setup lang="ts">
import { useRouter } from 'vue-router';
var router = useRouter()
var menubar_items = [
  {
    label: "Home",
    command: () => { router.push("/") }
  },
  {
    label: "Contact",
    command: () => { router.push("/contact") }
  },
  {
    label: "Tools",
    command: () => { router.push("/tools") }
  },
  {
    label: "About",
    command: () => { router.push("/about") }
  },
  {
    label: "Resume",
    command: () => { router.push("/resume") }
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
