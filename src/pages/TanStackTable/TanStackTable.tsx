import { useEffect, useState } from "react";
import { Product, ProductService } from "../../service/ProductService";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import styles from "./tanstack-table.module.scss";
import { ImageBody } from "../../components/ImageBody";
import { PriceBody } from "../../components/PriceBody";
import { Rating } from "../../components/Rating";
import { StatusBody } from "../../components/StatusBody";

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("image", {
    header: "Image",
    cell: (info) => <ImageBody imgSrc={info.getValue()} />,
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => <PriceBody price={info.getValue()} />,
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("rating", {
    header: "Reviews",
    cell: (info) => <Rating productRating={info.getValue()} />,
  }),
  columnHelper.accessor("inventoryStatus", {
    header: "Status",
    cell: (info) => <StatusBody inventoryStatus={info.getValue()} />,
  }),
];

export const TanStackTable = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={styles["tan-stack"]}>
      <h1>TanStack</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
