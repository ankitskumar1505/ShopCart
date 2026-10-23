// Sample data for now. Later this will come from the database.
export type Product = {
  slug: string;
  title: string;
  price: number; // rupees (the database will store paise later)
  mrp: number;
  rating: number;
  category: string;
  emoji: string;
};

export const categories = [
  { name: "Mobiles", emoji: "📱" },
  { name: "Fashion", emoji: "👕" },
  { name: "Home", emoji: "🏠" },
  { name: "Electronics", emoji: "🎧" },
];

export const products: Product[] = [
  { slug: "smartphone-x", title: "Smartphone X 128GB", price: 14999, mrp: 18999, rating: 4.3, category: "Mobiles", emoji: "📱" },
  { slug: "wireless-earbuds", title: "Wireless Earbuds Pro", price: 1999, mrp: 3999, rating: 4.1, category: "Electronics", emoji: "🎧" },
  { slug: "cotton-tshirt", title: "Cotton T-Shirt (Pack of 2)", price: 599, mrp: 1199, rating: 4.0, category: "Fashion", emoji: "👕" },
  { slug: "running-shoes", title: "Running Shoes", price: 2499, mrp: 4499, rating: 4.4, category: "Fashion", emoji: "👟" },
  { slug: "table-lamp", title: "LED Table Lamp", price: 799, mrp: 1299, rating: 4.2, category: "Home", emoji: "💡" },
  { slug: "smart-watch", title: "Smart Watch Active", price: 2999, mrp: 5999, rating: 4.0, category: "Electronics", emoji: "⌚" },
  { slug: "backpack", title: "Laptop Backpack 30L", price: 1099, mrp: 1999, rating: 4.5, category: "Fashion", emoji: "🎒" },
  { slug: "coffee-mug", title: "Ceramic Coffee Mug Set", price: 449, mrp: 799, rating: 4.3, category: "Home", emoji: "☕" },
];
