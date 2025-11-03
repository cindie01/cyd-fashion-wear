export interface ClothItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const clothes: ClothItem[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb',
  },
  {
    id: '3',
    name: 'Red Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e8e695ff59f7',
  },
  {
    id: '4',
    name: 'Black Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1593032457868-1e0024a9487b',
  },
];
