import { Product } from "../service/ProductService";

export type PriceBodyProps = { price: number } & Omit<
  JSX.IntrinsicElements["div"],
  "size" | "ref" | "children"
>;

export const priceBodyTemplate = (product: Product) => {
  console.log("template is run");
  return <PriceBody price={product.price} />;
};

const formatCurrency = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const PriceBody: (props: PriceBodyProps) => JSX.Element = ({
  price,
  ...rest
}) => {
  console.log("jsx is run");
  return <div {...rest}>{formatCurrency(price)}</div>;
};
