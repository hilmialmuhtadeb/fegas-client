/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: (theme) => ({
      center: true,
      padding: {
        DEFAULT: theme("spacing.4"),
        sm: theme("spacing.8"),
        lg: theme("spacing.32"),
      }
    })
  },
  plugins: [],
}
