import { useCallback, useEffect, useState } from "react";
import { Product, ProductService } from "../../service/ProductService";
import styles from "./prime-react.module.scss";
import { DataTable } from "primereact/datatable";
import { Column, ColumnSortEvent } from "primereact/column";
import { priceBodyTemplate } from "../../components/PriceBody";
import { sortProdByName } from "../../utils/sortProdByName";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { imageBodyTemplate } from "../../components/ImageBody";
import { ratingBodyTemplate } from "../../components/Rating";
import { statusBodyTemplate } from "../../components/StatusBody";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./prime.scss";
import classNames from "classnames";

export const PrimeReact = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const idSortFunc = useCallback(
    (event: ColumnSortEvent) => sortProdByName(event.data, event.order || 1),
    []
  );

  return (
    <div className={classNames(styles["prime-react"], "prime-boundary")}>
      <h1>Prime React Table</h1>
      <div className="card">
        <DataTable
          value={products}
          header={<Header />}
          footer={<Footer numOfProducts={products.length} />}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column
            sortable
            field="name"
            sortFunction={idSortFunc}
            header="Name"
          />
          <Column header="Image" body={imageBodyTemplate} />
          <Column
            sortable
            field="price"
            header="Price"
            body={priceBodyTemplate}
          />
          <Column sortable field="category" header="Category" />
          <Column
            sortable
            field="rating"
            header="Reviews"
            body={ratingBodyTemplate}
          />
          <Column sortable header="Status" body={statusBodyTemplate} />
        </DataTable>
      </div>
    </div>
  );
};
