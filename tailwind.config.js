module.exports = {
    purge: [],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {
            colors: {
                darkMagenta: "hsl(300, 43%, 22%)",
                softPink: "hsl(333, 80%, 67%)",
                darkGrayMagenta: "hsl(303, 10%, 53%)",
                lightGrayMagenta: "hsl(300, 24%, 96%)",
            },
            fontFamily: {
                spartan: ["Spartan", "sans-serif"],
            },
            fontSize: {
                default: "15px",
            },
            height:{
                '85':'85%'
            }
        },
    },
    variants: {},
    plugins: [],
    experimental: {
        applyComplexClasses: true,
      },
};
