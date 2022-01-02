module.exports = {
    content: ["./resources/**/*.blade.php", "./resources/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                "bg-featured": "#e6ecfa",
                "single-image": "#4c4c43",
                "logo-color": "#1a2b6d",
                main: "#21759B",
                cta: "#172236",
            },
            backgroundImage: {
                jumbo: "url('resources/assets/images/jumbo.png')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
