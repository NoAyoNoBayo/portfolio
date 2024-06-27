<template>
  <div class="flex flex-column gap-2 p-3 align-items-center">
    <div class="text-4xl" style="color: var(--light);">
      Contact me
    </div>
    <div class="text-xl" style="color: var(--light);">
      Get in touch
    </div>
    <form class="flex flex-column" @submit.prevent="sendMail">
      <div class="form flex flex-column gap-3">
        <div class="flex gap-3 flex-column">
          <div class="flex flex-column">
            <InputText placeholder="First Name" type="text" v-model="email.firstName" />
            <small class="m-0 p-0" v-for="error in v$.firstName.$errors" :key="error.$uid" style="color: red;">
              Required
            </small>
          </div>
          <div class="flex flex-column">
            <InputText placeholder="Last Name" type="text" v-model="email.lastName" />
            <small v-for="error in v$.lastName.$errors" :key="error.$uid" style="color: red;">Required</small>
          </div>
          <div class="flex flex-column">
            <InputText placeholder="Email Address" type="email" v-model="email.emailAddress" />
            <small v-for="error in v$.emailAddress.$errors" :key="error.$uid" style="color: red;">Required</small>
          </div>
        </div>
        <div class="flex flex-column">
          <InputText placeholder="Subject" type="text" v-model="email.subject" />
          <small v-for="error in v$.subject.$errors" :key="error.$uid" style="color: red;">Required</small>
        </div>
        <div class="flex flex-column">
          <Textarea placeholder="Message" type="text" maxlength="150" rows="5" cols="30" style="resize: none;"
            v-model="email.body" />
          <small v-for="error in v$.body.$errors" :key="error.$uid" style="color: red;"> Required </small>
        </div>
        <Button label="Send" type="submit" icon="pi pi-send"
          style="background: var(--lighter_dark); color: var(--light);border-color: var(--dark);" />
      </div>
    </form>

  </div>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { ref } from 'vue'


const rules = {
  subject: { required },
  body: { required },
  firstName: { required },
  lastName: { required },
  emailAddress: { required },
}


const email = ref({
  subject: '',
  body: '',
  firstName: '',
  lastName: '',
  emailAddress: ''
})

const v$ = useVuelidate(rules, email)

const sendMail = async () => {
  const valid = await v$.value.$validate();
  if (valid) {

    alert("Success, Mail sent!")
  }
}

</script>
<style scoped>
:deep(.pi) {
  color: var(--light);
  padding: 5px;
}
</style>
