/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      container: {
        center: true, // Optional: Centers the container
        padding: '1rem', // Optional: Adds padding to the container
        screens: {
          sm: '100%', // No restriction on small screens
          md: '640px', // Set max width for medium screens
          lg: '800px', // Set max width for large screens
          xl: '1024px', // Set max width for extra-large screens
          '2xl': '1280px', // Set max width for 2xl screens
        },
    },
  },
  plugins: [],
}

}

