import classNames from "classnames";
import { Product } from "../service/ProductService";

export type ImageBodyProps = { imgSrc: string } & Omit<
  JSX.IntrinsicElements["img"],
  "size" | "ref" | "children" | "src" | "alt"
>;

export const imageBodyTemplate = (product: Product) => {
  return <ImageBody imgSrc={product.image} />;
};

export const ImageBody: (props: ImageBodyProps) => JSX.Element = ({
  imgSrc,
  className,
  ...rest
}) => {
  return (
    <img
      {...rest}
      src={`https://primefaces.org/cdn/primereact/images/product/${imgSrc}`}
      alt={imgSrc}
      className={classNames(className, "w-6rem shadow-2 border-round")}
    />
  );
};
