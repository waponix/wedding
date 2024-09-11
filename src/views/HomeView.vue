<script setup lang="ts">

import Menu from '../components/Menu.vue'

const style = {
  h1: [
    'text-[3.5rem]', 'md:text-[5rem]', 'font-sans',
    'text-primary',
  ],
  h2: [
    'text-[2.5rem]', 'font-serif',
  ],
  header: [
    'flex', 'flex-col',
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
    <div class="parallax-background bg-paper"></div>
    <header 
      :class="style.header" class="parallax-section">
      <h1
        :class="style.h1" class="text-center">
        <span>Eric</span>
        <div class="md:hidden mb-[0.5rem]"></div>
        <span> & </span>
        <div class="md:hidden mt-[1rem]"></div>
        <span>Faith</span>
      </h1>
      <h2 :class="style.h2" class="text-center text-gray mt-[2rem]">
        the wait <span class="text-nowrap">is <span class="font-sans">finally</span> over</span> <br>
        <span class="text-[1.5rem]">12.14.24</span>
      </h2>
      <!-- <svg :width="476*0.8" :height="306*0.8" viewBox="0 0 476 306" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.34179 164.303C3.19424 166.82 -0.994628 164.397 0.215268 161.281C2.24273 156.059 8.73871 150.165 12.6343 146.263C24.2686 134.609 40.1274 126.698 56.7697 132.09C85.2192 141.308 95.298 175.519 121.89 188.281C154.569 203.965 225.481 173.602 218.824 131.676C216.412 116.49 198.615 116.831 187.647 121.932C169.644 130.306 125.047 186.524 159.342 199.637C197.397 214.189 241.135 153.253 249.985 124.011C256.36 102.947 253.973 77.5763 228.586 72.3391C184.192 63.1806 144 131.676 135.165 155.191C127.766 174.883 127.887 203.788 150.59 213.878C206.602 238.772 270.715 155.064 298.271 118.408C307.236 106.482 315.751 94.1258 322.934 81.0335C332.452 63.6874 340.06 43.998 342.88 24.3227C343.598 19.3196 345.765 7.35672 340.214 3.94886C334.569 0.483953 329.183 10.744 327.448 14.3367C320.187 29.3712 316.871 46.4963 312.679 62.5629C297.947 119.012 280.495 174.058 263.198 229.815C259.083 243.081 243.176 287.517 253.836 299.771C261.726 308.842 275.098 293.982 279 287C288.5 270 294.932 241.233 292.5 217.5C290.334 196.364 286.151 178.584 273.076 161.982C271.103 159.477 259.921 148.846 266.561 145.691C274.548 141.896 288.956 144.734 297.5 145.691C320.194 148.234 342.884 157.615 361.431 171.042C374.49 180.495 385.947 195.987 401.466 201.175C420.318 207.478 440.896 197.156 453.908 183.879C460.451 177.202 465.645 169.475 469.617 161.034C471.2 157.67 476.461 159.414 475.652 163.064C473.962 170.698 467.329 178.846 462.514 184.753C449.741 200.421 429.784 211.621 409.081 208.156C389.734 204.918 378.115 187.879 363.549 176.353C346.106 162.551 323.025 152.538 301 149.5C295.952 148.804 270.227 145.947 267.467 148.576C267.453 148.59 267.441 148.606 267.432 148.623C267.069 149.3 280.837 167.433 283.499 171.524C292.965 186.072 297.694 203.153 298.903 220.382C300.627 244.937 297.447 272.978 281.957 293.085C276.594 300.046 261.688 310.882 252.981 302.792C238.242 289.097 251.815 252.76 255.881 237.206C260.783 218.457 266.698 199.967 272.417 181.456C287.302 133.284 297.337 83.2285 313.572 35.4648C316.704 26.2494 325.057 -3.12375 339.63 0.271748C347.038 1.99777 346.891 13.0395 346.473 18.8219C345.086 38.0501 338.034 57.7761 329.492 74.9135C309.178 115.662 254.778 186.152 214.347 208.22C194.793 218.892 164.029 227.649 143.834 213.395C95.7781 179.474 148.759 110.23 169 91.5C202.5 60.5 238.113 62.8927 251.334 84.2789C274.629 121.959 232.696 171.043 211.5 188C191.5 204 166.832 210.506 153.175 199.072C124.724 175.251 160.482 124.256 187.001 115.816C204.785 110.156 223.839 118.754 221.283 139.365C215.688 184.497 150.116 210.282 113.815 187.167C92.329 173.485 81.5904 143.969 55.0695 138.513C33.263 134.028 18.2715 149.147 5.34179 164.303Z" fill="#0C0D0D"/>
        <path d="M275.541 133.338C275.541 133.338 272.217 123.175 261.267 122.303C250.317 121.432 231.953 135.841 222.371 135.079C212.79 134.316 209.603 126.77 209.603 126.77" stroke="#0C0D0D" stroke-width="3" stroke-linecap="round"/>
      </svg> -->
    </header>
    <section :class="[...style.section, 'md:min-h-[800px]']" class="md:px-[10rem] font-normal bg-white parallax-section">
      <div class="flex">
        <span class="text-[1.2rem]">
        <p>
          <span class="font-sans text-[1.5em]">We</span> are thrilled to express our excitement about sharing this significant day with all of you. For us, it goes beyond celebrating just a wedding; it signifies a lifelong commitment filled with laughter, adventure, and abundant love. 
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
  </div>
</template>
