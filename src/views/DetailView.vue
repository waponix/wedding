<script setup lang="ts">

import Menu from '../components/Menu.vue'

const style = {
  h1: [
    'text-[3.5rem]', 'md:text-[5rem]', 'font-sans', 'text-primary',
  ],
  h2: [
    'text-[2.5rem]', 'font-serif',
  ],
  header: [
    'flex', 'flex-col', 'bg-white', 
    'p-[3rem]', 'justify-center', 
    'items-center', 'min-h-[600px]',
    'md:min-h-[800px]',
  ],
  section: [
    'flex', 'flex-col', 'p-[3rem]', 'justify-center', 
    'items-center', 'min-h-[700px]',
  ]
}

</script>

<template>
  <div class="parallax">
    <Menu />
    <header 
      :class="style.header" class="parallax-section">
      <h1
        :class="style.h1"
        class="font-serif">
        Details
      </h1>
      <h2 :class="style.h2" class="text-center text-gray mt-[2rem]">
        <span class="text-[1.5rem]">- Things you need to know about the wedding -</span>
      </h2>
    </header>
    <div class="parallax-background bg-cloth"></div>
    <section :class="[...style.section, 'md:min-h-[800px]']" class="md:px-[10rem] font-normal parallax-section">
      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 text-[1.2rem] perspective-[1px]">
        <img src="/img/outfit.jpg" class="rounded-lg shadow-xl hidden md:block rotate-[2deg] -skew-y-[1deg]">
        <div class="flex flex-col justify-center md:pl-[5rem]">
          <p class="text-[1.5rem] text-gray md:text-[2rem] font-serif text-center backdrop-blur-sm rounded-lg">- Dress Code -</p>
          <p class="mt-[2rem] text-[1rem] backdrop-blur-sm rounded-lg">Please wear cocktail/semi-formal attire. 
            <span class="font-highlight text-[1.5rem] text-nowrap">Champagne beige</span> and 
            <span class="font-highlight text-[1.5rem] text-nowrap">Rust brown</span> ( or any 
            <span class="font-highlight text-[1.5rem] text-nowrap">earth tone color</span> )
          </p>
        </div>
        <img src="/img/outfit.jpg" class="rounded-lg shadow-xl shadow-gray-200 block md:hidden rotate-[2deg] -skew-y-[1deg]">
      </div>
    </section>
    <section :class="[...style.section, 'md:min-h-[800px]']" class="md:px-[10rem] font-normal bg-primary parallax-section">
      <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 text-[1.2rem]">
        <div class="flex flex-col justify-center md:pr-[5rem] text-white">
          <p class="text-[1.5rem] text-gray md:text-[2rem] font-serif text-light">- Wedding Place -</p>
          <p class="mt-[4rem] font-sans text-[2rem] md:text-[3rem]">Estoria Manila</p>
          <p class="">
            <span class="text-nowrap">G/F 1125 MH. Del Pilar Street,</span>&nbsp;
            <span class="text-nowrap">Ermita Manila City</span>
          </p>
          <p class="mt-[2rem] text-[1rem]">Inspired by Intramuros and Old Manila, Estoria Manila puts a spotlight in classic Filipino food & fiesta events.</p>
        </div>
        <div class="md:col-span-2 flex justify-items-center items-center">
          <img 
          src="/img/estoria_front.jpg" 
          class="rounded-lg shadow-xl shadow-gray-200">
        </div>
      </div>
    </section>
  </div>
</template>
