import { Product } from "../service/ProductService";
import { Rating as PrimeRating } from "primereact/rating";

export type RatingProps = { productRating: number } & Omit<
  JSX.IntrinsicElements["div"],
  "size" | "ref" | "children"
>;

export const ratingBodyTemplate = (product: Product) => {
  return <Rating productRating={product.rating} />;
};

export const Rating: (props: RatingProps) => JSX.Element = ({
  productRating,
  className,
  ...rest
}) => {
  return <PrimeRating value={productRating} readOnly cancel={false} />;
};
