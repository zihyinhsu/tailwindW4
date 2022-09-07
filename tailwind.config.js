module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT: '12px',
        md: '36px',
        lg: '12px',
      },
    },
    extend: { 
      colors: { 
        primaryLight: "#FBF2F2",
        primary: "#AA0601",
        primaryDark: "#650300",
        gray:"#707070"
       } 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}