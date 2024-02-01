
<template>
  <div class="flex flex-column gap-2 p-3 align-items-center w-full">
    <div class="text-2xl" style="color: var(--light);">
      Contact me
    </div>
    <div class="text-sm" style="color: var(--neutral);">
      Get in touch
    </div>
    <div class="form flex flex-column gap-3">
      <div class="flex gap-3 flex-column">
        <InputText placeholder="First Name" />
        <InputText placeholder="Last Name" />
        <InputText placeholder="Email Address" />
      </div>
      <InputText placeholder="Subject" />
      <Textarea placeholder="Message" maxlength="150" rows="5" cols="30" style="resize: none;" />
    </div>
    <Button label="Send" icon="pi pi-send"
      style="background: var(--neutral); color: var(--dark);border-color: var(--dark);" />
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
:deep(.pi) {
  color: var(--dark);
  padding: 2px;
}
</style>
