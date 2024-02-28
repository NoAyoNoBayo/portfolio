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
        I am a full stack developer that loves designing, building and delivering software.
        So I have decided to build this portfolio to develop and offer different tools for free!
        Hopefully this portfolio will continue to grow as I do! </div>
    </div>
    <div class="flex flex-column align-items-center">
      <div class="flex align-items-center gap-3 text-3xl p-4" style="color: var(--light);">
        <div class="flex flex-column align-items-center">
          <div class="flex flex-row align-items-center gap-3">
            <i class="pi pi-code text-3xl" />
            Technologies and Frameworks
          </div>
          <div class="text-xl" style="color: var(--neutral);">
            A list of development technologies I love to work with
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap gap-4 p-4" style="color: var(--light);">
        <Card class="max-w-20rem">
          <template #title>
            <i class="pi pi-desktop text-lg" />
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
            <div class="flex flex-column gap-5 p-3">
              <a href="https://vuejs.org/">
                <div class="flex flex-row align-items-center text-2xl gap-3" style="color: var(--light);">
                  <img src="/src/assets/vuejs.png" width="60" />
                  VueJS
                </div>
              </a>
              <a href="https://angular.io/">
                <div class="flex flex-row align-items-center text-2xl gap-3" style="color: var(--light);">
                  <img src="/src/assets/angularjs.png" width="60" />
                  Angular
                </div>
              </a>
            </div>
          </template>
        </Card>
        <Card class="max-w-20rem">
          <template #title>
            <i class="pi pi-wrench text-lg" />
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
            <div class="flex flex-column gap-5 p-3">
              <a href="https://go.dev/">
                <div class="flex flex-row align-items-center text-2xl gap-3" style="color: var(--light);">
                  <img src="/src/assets/golang.png" width="60" />
                  Go
                </div>
              </a>
            </div>
          </template>
        </Card>
        <Card class="max-w-20rem">
          <template #title>
            <i class="pi pi-database text-lg" />
            Repositories
          </template>
          <template #subtitle>
            <div class="flex">
              <div>
                Technologies that made data access and storage easier and faster!
              </div>
            </div>
          </template>
          <template #content>
            <div class="flex flex-column gap-5 p-3">
              <a href="https://postgresql.org/">
                <div class="flex flex-row align-items-center text-2xl gap-3" style="color: var(--light);">
                  <img src="/src/assets/postgres.png" width="60" />
                  PostgreSQL
                </div>
              </a>
              <a href="https://redis.io/">
                <div class="flex flex-row align-items-center text-2xl gap-3" style="color: var(--light);">
                  <img src="/src/assets/redis.svg" width="60" />
                  Redis
                </div>
              </a>
            </div>
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
