const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts}", // Adjust this path as per your project structure
    "./pages/**/*.{html,js,ts}", // Adjust this path as per your project structure
  ],
  theme: {
    backgroundColor: this.theme= {
      'primary':"className=bg-current"
    }, 
    
  },
  plugins: [], // Add any Tailwind plugins here if needed
  images: {
    domains: ['cdn.pixabay.com'], // Add any domains you will be using for images
  },
  
};

