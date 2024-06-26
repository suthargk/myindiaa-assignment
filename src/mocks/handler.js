import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/products", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        title: "NikeCourt Tech Challenge 20",
        img: "./assets/flyknit.jpg",
        price: 5678.89,
        number_of_colors: 2,
        quantity: 5,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-432sfdaf",
        title: "Nike Metcon 5 AMP",
        img: "./assets/joyride.jpg",
        price: 9845.99,
        number_of_colors: 1,
        quantity: 3,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-asfasfasda",
        title: "Nike Phantom Vision",
        img: "./assets/lebron.jpg",
        price: 8923.34,
        number_of_colors: 4,
        quantity: 2,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-sdgfdsg",
        title: "Nike Air Zoom Pegasus",
        img: "./assets/legend-academy.jpg",
        price: 6999.99,
        number_of_colors: 2,
        quantity: 1,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9sff4b3d3b3d",
        title: "Nike Joyride Dual Run",
        img: "./assets/metcon-5.jpg",
        price: 2999.99,
        number_of_colors: 3,
        quantity: 4,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3bsafas3d",
        title: "Nike Tiempo Legend 8",
        img: "./assets/pegasus.jpg",
        price: 4567.89,
        number_of_colors: 3,
        quantity: 6,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-asdfasfasf",
        title: "Nike React Infinity Pro",
        img: "./assets/phantom-flyknit.jpg",
        price: 3456.54,
        number_of_colors: 2,
        quantity: 10,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-sdgsdgfsgd",
        title: "Nike React Phantom Run Flyknit 2",
        img: "./assets/phantom.jpg",
        price: 4567.34,
        number_of_colors: 4,
        quantity: 20,
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4bwerewr3d3b3d",
        title: "LeBron 17",
        img: "./assets/react-infinity.jpg",
        price: 8343.5,
        number_of_colors: 3,
        quantity: 10,
      },
    ]);
  }),
];
