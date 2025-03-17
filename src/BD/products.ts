export interface IProducts {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}
export const productsCaps: IProducts[] = [
  {
    id: Date.now().toLocaleString(),
    name: "Стаканчик 0,2л",
    price: 200,
  },
  {
    id: Date.now().toLocaleString(),
    name: "Стаканчик 0,3л",
    price: 250,
  },
  {
    id: Date.now().toLocaleString(),
    name: "Стаканчик 0,4л",
    price: 300,
  },
];
export const productsTops: IProducts[] = [
  {
    id: Date.now().toLocaleString(),
    name: "Крышка 0,2л",
    price: 150,
  },
  {
    id: Date.now().toLocaleString(),
    name: "Крышка 0,3л",
    price: 200,
    quantity: 100,
  },
  {
    id: Date.now().toLocaleString(),
    name: "Крышка 0,4л",
    price: 250,
    quantity: 100,
  },
];
