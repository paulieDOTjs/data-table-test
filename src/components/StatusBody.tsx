import { Tag } from "primereact/tag";
import { Product } from "../service/ProductService";
import { getProdSeverity } from "../utils/getProdSeverity";

export type StatusBodyProps = { inventoryStatus: string } & Omit<
  JSX.IntrinsicElements["div"],
  "size" | "ref" | "children"
>;

export const statusBodyTemplate = (product: Product) => {
  return <StatusBody inventoryStatus={product.inventoryStatus} />;
};

export const StatusBody: (props: StatusBodyProps) => JSX.Element = ({
  inventoryStatus,
  className,
  ...rest
}) => {
  return (
    <Tag value={inventoryStatus} severity={getProdSeverity(inventoryStatus)} />
  );
};
