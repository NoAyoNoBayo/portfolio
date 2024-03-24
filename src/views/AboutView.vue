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
      <div class="flex max-w-20rem" style="color: var(--neutral);text-align: justify;">
        I am a full stack developer that loves designing, building and delivering software.
        I decided to build this portfolio to develop and offer different tools for free and to introduce myself
        through my work!
        Hopefully this portfolio will continue to grow as I do! </div>
    </div>
    <div class="flex flex-column align-items-center justify-content-center w-full">
      <div class="flex align-items-center gap-3 text-3xl p-4" style="color: var(--light);">
        <div class="flex flex-column align-items-center">
          <div class="flex flex-row flex-wrap justify-content-center align-items-center gap-3">
            <i class="pi pi-code text-3xl" />
            <div class="text-center">
              Technologies and Frameworks
            </div>
          </div>
          <div class="text-xl text-center" style="color: var(--neutral);">
            My favourite development technologies I have worked with
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap gap-4 p-4 justify-content-center" style="color: var(--light);">
        <Card class="max-w-20rem">
          <template #title>
            <i class="pi pi-desktop text-lg" />
            Frontend
          </template>
          <template #subtitle>
            <div class="flex">
              <div>
                Frameworks that made building UIs really easy and fun.
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
                Languages that I have loved and made my life easier (most of the times).
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
                <a href="https://python.org/">
                  <div class="flex flex-row align-items-center text-2xl gap-3" style="color: var(--light);">
                    <img src="/src/assets/python.png" width="60" />
                    Python
                  </div>
                </a>
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
    <div class="flex flex-column w-full">
      <div class="flex flex-row flex-wrap justify-content-center align-items-center gap-3">
        <i class="pi pi-heart-fill text-3xl" />
        <div class="text-3xl">
          Things that made my development life easier
        </div>
      </div>
      <div class="flex flex-row w-full justify-content-center">
        <Carousel :value="frameworks" :numVisible="3" :numScroll="3"
          style="width: 60vw; display: flex;align-items: center;">
          <template #item="framework">
            <a :href="framework.data.website">
              <div class="flex flex-column border-1 surface-border justify-content-evenly border-round m-2 p-3"
                style="background: #282936;">
                <div class="mb-3">
                  <div class="relative mx-auto">
                    <img :src="'/src/assets/' + framework.data.imageURL" class="w-3 border-round" />
                  </div>
                </div>
                <div class="mb-3 font-medium text-lg" style="color: var(--light);">{{ framework.data.label }}</div>
                <div class="flex justify-content-between align-items-center">
                  <div class="mt-0 font-semibold text-xl" style="color: var(--light);">{{ framework.data.description
                    }}</div>
                </div>
              </div>
            </a>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const frameworks = ref([
  {
    label: 'Docker',
    imageURL: 'docker.png',
    description: 'Build run and share applications',
    website: "https://docker.com"
  },
  {
    label: 'RabbitMQ',
    imageURL: 'rabbitmq.png',
    description: 'Reliable and mature messaging broker',
    website: "https://rabbitmq.com"
  },
  {
    label: 'AstroNvim',
    imageURL: 'astronvim.png',
    description: 'Beautiful NeoVim configuration',
    website: "https://astronvim.com"
  },
  {
    label: 'DBeaver',
    imageURL: 'dbeaver.png',
    description: 'Universal database tool',
    website: "https://dbeaver.io"
  },
])

</script>

<style scoped>
:deep(.p-card-body) {
  border-color: var(--neutral);
}
</style>
