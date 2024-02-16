<template>
  <div class="flex flex-column gap-2 p-3 align-items-center w-full">
    <div class="text-4xl" style="color: var(--light);">
      About me
    </div>
    <div class="text-xl" style="color: var(--neutral);">
      A brief overview of my background
    </div>
  </div>
  <div class="flex flex-column flex-wrap w-full justify-content-center p-2 ">
    <div class="flex flex-row flex-wrap lg:flex-row w-full justify-content-center p-8 gap-5">
      <div class="text-4xl max-w-25rem" style="color: var(--light);">
        Hi! I am Dimitrios, nice to have you here!
      </div>
      <div class="flex max-w-20rem" style="color: var(--neutral);">
        I am a full stack developer that loves designing, building and finally delivering software.
        So I have decided to build this portfolio to make different tools for free!
        Hopefully this portfolio will continue to grow as I do! </div>
    </div>
    <div class="flex flex-column align-items-center">
      <div class="flex align-items-center gap-3 text-3xl p-4" style="color: var(--light);">
        <i class="pi pi-code text-3xl" />
        Technologies and Frameworks
      </div>
      <div class="flex flex-row flex-wrap gap-4 p-4" style="color: var(--light);">
        <Card class="max-w-20rem">
          <template #title>
            Frontend
          </template>
          <template #subtitle>
            <div class="flex">
              <div>
                Frameworks that have enjoyed working with
              </div>
            </div>
          </template>
          <template #content>
            content
          </template>
        </Card>
        <Card class="max-w-20rem">
          <template #title>
            Backend
          </template>
          <template #subtitle>
            <div class="flex">
              <div>
                Languages and Technologies that I have loved and made my life easier
              </div>
            </div>
          </template>
          <template #content>
            content
          </template>
        </Card>
        <Card class="max-w-20rem">
          <template #title>
            Databases and Repositories
          </template>
          <template #subtitle>
            <div class="flex">
              <div>
                Technologies that made data storage and accessing data easier and faster!
              </div>
            </div>
          </template>
          <template #content>
            content
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>


<style scoped>
:deep(.p-card-body) {
  border-color: var(--neutral);
}
</style>
