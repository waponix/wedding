<script setup lang="ts">

import Menu from '../components/Menu.vue'

const style = {
  h1: [
    'text-[3.5rem]', 'md:text-[5rem]', 'font-sans',
  ],
  h2: [
    'text-[2.5rem]', 'font-serif',
  ],
  header: [
    'flex', 'flex-col', 'bg-white', 
    'p-[2rem]', 'justify-center', 
    'items-center', 'min-h-[600px]',
    'md:min-h-[800px]',
  ],
  section: [
    'flex', 'flex-col', 'p-[2rem]', 'justify-center', 
    'items-center', 'min-h-[700px]',
  ]
}

</script>

<template>
  <Menu />
  <header 
    :class="style.header">
    <h1
      :class="style.h1"
      class="font-serif">
      FAQ
    </h1>
    <h2 :class="style.h2" class="text-center text-gray mt-[2rem]">
      <span class="text-[1.5rem]">- Frequently asked questions -</span>
    </h2>
  </header>
  <section :class="[...style.section, 'md:min-h-[800px]']" class="px-[2.5rem] md:px-[10rem] font-normal">
    <div class="flex">
      <span class="text-[1.2rem]">
      <p>
        We are thrilled to express our excitement about sharing this significant day with all of you. For us, it goes beyond celebrating just a wedding; it signifies a lifelong commitment filled with laughter, adventure, and abundant love. 
      </p>
      <p class="mt-[2rem]">
        We warmly invite you to join us on 
        <span class="font-bold font-highlight text-[2rem] text-nowrap">December 14th,</span>&nbsp;
        <span class="font-bold font-highlight text-[2rem] text-nowrap" >starting at 4:00 pm</span>.
      </p>
      <p class="mt-[2rem]">
        Each one of you has played a crucial role in our story, and we are delighted to have you as witnesses as we embark on this journey together. 
      </p>
      <p class="mt-[4rem]">
        With Love,
      </p>
      <p>
        <span class="font-highlight text-[2rem]">Eric & Faith</span>
      </p>
    </span>
    </div>
  </section>
</template>
