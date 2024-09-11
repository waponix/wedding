<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const style = {
  navbar: [
    'bg-black', 'text-white', 'sticky',
    'top-0', 'parallax-section',
  ],
  nav: [
    'px-[1rem]', 'min-w-[80px]', 'inline-block'
  ],
}

</script>

<template>
    <section :class="style.navbar">
        <span>
            <nav :class="style.nav">
                <RouterLink to="/">Home</RouterLink>
            </nav>
            <nav :class="style.nav">
                <RouterLink to="/detail">Details</RouterLink>
            </nav>
            <nav :class="style.nav">
                <RouterLink to="/faq">FAQs</RouterLink>
            </nav>
        </span>
  </section>
</template>