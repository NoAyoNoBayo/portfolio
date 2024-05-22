<template>
  <Toast />
  <div class="flex flex-column gap-2 p-3 align-items-center w-full">
    <div class="text-4xl" style="color: var(--light);">
      Contact me
    </div>
    <div class="text-xl" style="color: var(--neutral);">
      Get in touch
    </div>
    <div class="form flex flex-column gap-3">
      <div class="flex gap-3 flex-column">
        <InputText placeholder="First Name" v-model="email.firstName" />
        <InputText placeholder="Last Name" v-model="email.lastName" />
        <InputText placeholder="Email Address" v-model="email.emailAddress" />
      </div>
      <InputText placeholder="Subject" v-model="email.subject" />
      <Textarea placeholder="Message" maxlength="150" rows="5" cols="30" style="resize: none;" v-model="email.body" />
    </div>
    <Button label="Send" icon="pi pi-send" @click="sendMail()"
      style="background: var(--lighter_dark); color: var(--neutral);border-color: var(--dark);" />
  </div>
</template>
<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
const toast = useToast()
var email = {
  subject: '',
  body: '',
  firstName: '',
  lastName: '',
  emailAddress: ''
}

let sendMail = () => {
  if (!email.firstName) {
    toast.add({ severity: 'error', summary: 'Message is empty', detail: 'Please write a short message.', life: 3000 });
  }
  else if (!email.lastName) {
    toast.add({ severity: 'error', summary: 'First name is empty', detail: 'Please write your first name.', life: 3000 });
  }
  else if (!email.emailAddress) {
    toast.add({ severity: 'error', summary: 'Last name is empty', detail: 'Please write your last name.', life: 3000 });
  }
  else if (!email.subject) {
    toast.add({ severity: 'error', summary: 'Subject is empty', detail: 'Please write a short subject.', life: 3000 });
  } else if (!email.body) {
    toast.add({ severity: 'error', summary: 'Email is empty', detail: 'Please write your email.', life: 3000 });
  } else {
    console.log(email)
  }
}
</script>
<style scoped>
:deep(.pi) {
  color: var(--neutral);
  padding: 5px;
}
</style>
