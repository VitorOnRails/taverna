import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
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
