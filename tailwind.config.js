/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["cmyk", "dracula"],
        darkTheme: "dracula",
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
};

