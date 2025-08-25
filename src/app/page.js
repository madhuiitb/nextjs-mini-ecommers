'use client';

import styles from "./page.module.css";
import FilterSideBar from "@/components/FilterSideBar";
import { useState } from "react";
import ProductList from "@/components/ProductList";
import { useFilters } from "@/context/FiltersContext";
import Footer from "@/components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { isFiltersBarOpen, setIsFiltersBarOpen } = useFilters();

  const handleFilterChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category)
      );
    }
  }

  const categoryProducts = [
    ...new Map(products.map((p) => [p.category, { category: p.category }])).values()
  ];

  const handleFilterBarClose = () => {
    setIsFiltersBarOpen(!isFiltersBarOpen);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <aside className={`${styles.aside} ${isFiltersBarOpen ? styles.open : ''}`}>
          <FilterSideBar
            categoryProducts={categoryProducts}
            handleFilterChange={handleFilterChange}
            onClose={handleFilterBarClose}
          />
        </aside>
        <div className={styles.products}>
          <ProductList
            products={products}
            setProducts={setProducts}
            selectedCategories={selectedCategories}
          />
        </div>
      </main>
      <footer className={styles.footer}>
            <Footer />
      </footer>
    </div>
  );
}
