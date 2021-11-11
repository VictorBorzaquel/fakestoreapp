type TCategory = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

interface IProductCart {
  productId: number;
  quantity: number;
}

interface ICart {
  id: number;
  userId: number;
  date: Date;
  products: IProductCart[];
  __v: number
}

interface IUserCart {
  userId: Number;
  date: Date;
  products: IProductCart[];
}

interface IUser {
  address: {
    geolocation: {
      lat: number;
      long: number;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string
  };
  phone: string;
  __v: number
}

export {
  TCategory,
  IProduct,
  IProductCart,
  ICart,
  IUserCart,
  IUser
}