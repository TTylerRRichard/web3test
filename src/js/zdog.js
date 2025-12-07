import Zdog from "zzz";

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    resize: true, // canvas responsive
});

new Zdog.Ellipse({
    addTo: illo,
    diameter: 100,
    stroke: 40,
    color: "#E49",
});

illo.updateRenderGraph(); // 👈 Dessine dans le canvas