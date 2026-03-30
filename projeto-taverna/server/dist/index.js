"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "BASTURMA",
            price: 29,
            text: "Carne seca e curada, temperada com especiarias.",
            image: "/images/basturma.jpg",
            type: "Jantar",
        },
        {
            name: "HIDROMEL",
            price: 16,
            text: "Bebida alcoólica feita a partir da fermentação do mel com água.",
            image: "/images/hidromel.png",
            type: "Jantar",
        },
        {
            name: "Bukenade",
            price: 20,
            text: "Ensopado de carne de porco, batatas e legumes, cozido lentamente para realçar os sabores.",
            image: "/images/bukenade.png",
            type: "Almoço",
        },
        {
            name: "Rabanada",
            price: 14,
            text: "Embebido em leite, ovos e açúcar, depois frito até dourar, servido com canela e açúcar.",
            image: "/images/rabanada.jpg",
            type: "Café da manhã",
        },
        {
            name: "Pottage",
            price: 17,
            text: "Sopa espessa feita com vegetais, grãos e ervas. Cozinhado em uma panela.",
            image: "/images/pottage.jpg",
            type: "Almoço",
        },
        {
            name: "Ale",
            price: 20,
            text: "Bebida alcoólica fermentada, feita a partir de malte e lúpulo, com um sabor mais forte e encorpado do que a cerveja comum.",
            image: "/images/ale.png",
            type: "Para todos os momentos",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});