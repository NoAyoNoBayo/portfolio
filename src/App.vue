<script setup lang="ts">
import { useRouter } from 'vue-router';
var router = useRouter()
var menubar_items = [
  {
    label: "Home",
    command: () => { router.push("/") },
    icon: "pi pi-home"
  },
  {
    label: "About",
    command: () => { router.push("/about") },
    icon: "pi pi-info-circle"
  },
  {
    label: "Resume",
    command: () => { router.push("/resume") },
    icon: "pi pi-file"
  },
]
</script>

<template>
  <Menubar :model="menubar_items" class="flex w-full justify-content-between align-content-center header text-xl"
    style="color: var(--light);">
    <template #start>
      <div class="flex w-full gap-3 pl-2">
        <img src="@/assets/avatar.png" width="30" class="cursor-pointer" @click="$router.push('/')" />
      </div>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a class="flex align-items-center" v-bind="props.action" style="color: var(--light);">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
          item.shortcut }}</span>
        <i v-if="hasSubmenu"
          :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>
    </template>
    <template #end>
      <div class="flex w-full gap-3">
        <a href="https://github.com/NoAyoNoBayo">
          <i class="pi pi-github" />
        </a>
        <a href="https://www.linkedin.com/in/kapouranisdimitrios/">
          <i class="pi pi-linkedin" />
        </a>
      </div>
    </template>
  </Menubar>
  <span>
    <RouterView />
  </span>
</template>

<style scoped>
.header {
  min-height: 3.7em;
  border-radius: 0px;
  font-family: Arvo;
  background: var(--lighter_dark);
  color: var(--light);
}

:deep(.p-icon) {
  color: var(--light);
}

:deep(.p-menubar-root-list) {
  gap: 1rem;
}

:deep(.pi) {
  color: var(--light);
}
</style>
