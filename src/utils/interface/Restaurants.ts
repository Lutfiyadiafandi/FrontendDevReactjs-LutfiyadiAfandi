export interface IRestaurants {
  id: number;
  name: string;
  image: string;
  category?: string;
  rating: number;
  price?: string;
  isOpen?: boolean;
}
