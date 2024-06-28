import { http, HttpResponse } from "msw";

const PRODUCT_LIST = [
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
    title: "NikeCourt Tech Challenge 20",
    img: "./assets/flyknit.jpg",
    price: 5678,
    number_of_colors: 2,
    totalQuantity: 5,
    status: 2,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-432sfdaf",
    title: "Nike Metcon 5 AMP",
    img: "./assets/joyride.jpg",
    price: 9845,
    number_of_colors: 1,
    totalQuantity: 3,
    status: 0,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-asfasfasda",
    title: "Nike Phantom Vision",
    img: "./assets/lebron.jpg",
    price: 8923,
    number_of_colors: 4,
    totalQuantity: 2,
    status: 2,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-sdgfdsg",
    title: "Nike Air Zoom Pegasus",
    img: "./assets/legend-academy.jpg",
    price: 6999,
    number_of_colors: 2,
    totalQuantity: 1,
    status: 1,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9sff4b3d3b3d",
    title: "Nike Joyride Dual Run",
    img: "./assets/metcon-5.jpg",
    price: 2999,
    number_of_colors: 3,
    totalQuantity: 4,
    status: 1,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3bsafas3d",
    title: "Nike Tiempo Legend 8",
    img: "./assets/pegasus.jpg",
    price: 4567,
    number_of_colors: 3,
    totalQuantity: 6,
    status: 1,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-asdfasfasf",
    title: "Nike React Infinity Pro",
    img: "./assets/phantom-flyknit.jpg",
    price: 3456,
    number_of_colors: 2,
    totalQuantity: 10,
    status: 0,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-sdgsdgfsgd",
    title: "Nike React Phantom Run Flyknit 2",
    img: "./assets/phantom.jpg",
    price: 4567,
    number_of_colors: 4,
    totalQuantity: 20,
    status: 0,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4bwerewr3d3b3d",
    title: "LeBron 17",
    img: "./assets/react-infinity.jpg",
    price: 8343,
    number_of_colors: 3,
    totalQuantity: 10,
    status: 2,
  },

  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4bwerewr3kljd3b3d",
    title: "Stefan Janoski",
    img: "./assets/stefan-janoski.jpg",
    price: 12032,
    number_of_colors: 3,
    totalQuantity: 10,
    status: 0,
  },
  {
    id: "c7b3d8e0-5e0b-4b0f-8b3a243-3b9f4bwerewr3d3b3d",
    title: "Tech Challenge",
    img: "./assets/tech-challenge.jpg",
    price: 3456,
    number_of_colors: 3,
    totalQuantity: 10,
    status: 1,
  },
];

export const handlers = [
  http.post("/products", async ({ request }) => {
    const { sort } = await request.json();

    let productList = PRODUCT_LIST;
    if (sort === "desc") {
      productList.sort((a, b) => b.price - a.price);
    } else if (sort === "asc") {
      productList.sort((a, b) => a.price - b.price);
    } else if (sort === "newest_releases") {
      productList.sort((a, b) => b.status - a.status);
    }

    return HttpResponse.json(productList);
  }),
];
