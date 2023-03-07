export type FooterProps = { numOfProducts: number } & Omit<
  JSX.IntrinsicElements["div"],
  "size" | "ref" | "children"
>;

export const Footer: (props: FooterProps) => JSX.Element = ({
  numOfProducts,
  ...rest
}) => {
  console.log("jsx is run");
  return <div {...rest}>{`In total there are ${numOfProducts} products.`}</div>;
};
