export interface productAmazon {
  title: string;
  price: string;
  image: string;
  url: string;
  about: string[];
  detail: detailProduct[];
  description: string;
  category: string;
}

export interface detailProduct{
  name: string,
  value: string
}

