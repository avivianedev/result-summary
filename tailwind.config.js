/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: '1280px'
      },
      colors: {
        bg_blue_principal: '#553af7',
        bg_gradient_blue: 'rgb(var(--color-primary))',
        title_text_matte: '#c4b8fe',
        title_text: '#edf0ff',
        text_summary_red: "#e5767e",
        text_summary_green: '#76c2b3',
        text_summary_yellow: '#e7ca81',
        text_summary_blue: '#5a5abd',
        bg_summary_red: '#fff6f5',
        bg_summary_green: '#f2fbfa',
        bg_summary_yellow: '#fffbf2',
        bg_summary_blue: '#f3f3fd',
        bg_btn: '#464d5f',
        text_result_matte: '#bdbdc7',
        text_result: '#464b5c',
      },
    },
    fontFamily: {
      bodyFont: ["Hanken Grotesk", "sans-serif"]
    }
  },
  plugins: [],
}
