<script setup lang="ts"></script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  font-size: 19px;

  user-select: none;
  padding: 8px 27px;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  color: white;
  background-image: linear-gradient(104deg, #E52E2A 39.5%, #7F1A17 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  transition: background-position 0.1s ease-out;
  cursor: pointer;
}

/* При нажатии — градиент сдвигается плавно */
button:active {
  background-position: 100% 50%;
  transition-duration: 0.05s;
}

/* После отпускания кнопки градиент плавно возвращается в исходное положение */
button:not(:active) {
  background-position: 0% 50%;
  transition-duration: 0.2s;
}
</style>