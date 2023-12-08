<template>
     <div class="container mx-auto py-8 bg-[#e4e4e4]">
    <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>
    <form class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" name="message" placeholder="Your Message"
          class="w-full px-3 py-2 border rounded-md resize-none h-32 focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="button"
        class="w-full bg-theme-secondary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ">Submit</button>
    </form>
  </div>
</template>