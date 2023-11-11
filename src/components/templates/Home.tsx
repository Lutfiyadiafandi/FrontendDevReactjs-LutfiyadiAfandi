import { Suspense, useEffect, useState } from "react";
import FilterNav from "../organisms/FilterNav";
import Header from "../organisms/Header";
import ListRestaurants from "../organisms/ListRestaurants";
import { apiRequest } from "../../api/api";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { IRestaurants } from "../../utils/interface/Restaurants";

const Home = () => {
  const [response, setResponse] = useState<IRestaurants[]>();
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [load, setLoad] = useState(8);

  const fetchData = async () => {
    const data = await apiRequest("/restaurants");
    let filteredData = data.filter((item: IRestaurants) => {
      return (
        (isOpen ? item.isOpen === true : true) &&
        (price !== "" ? item.price === price : true) &&
        (category !== "" ? item.category === category : true)
      );
    });
    setResponse(filteredData.slice(0, load));
  };

  useEffect(() => {
    fetchData();
  }, [load, isOpen, price, category]);

  const handleClear = () => {
    window.location.reload();
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4 xl:px-0">
      <Header />
      <FilterNav
        onChangeCheckbox={(e: CheckboxChangeEvent) =>
          setIsOpen(e.target.checked)
        }
        checked={isOpen}
        disabled={isOpen === false && price === "" && category === ""}
        onChangePrice={(value) => setPrice(value)}
        onChangeCategory={(value) => setCategory(value)}
        onClick={handleClear}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <ListRestaurants data={response} onClick={() => setLoad(load + 8)} />
      </Suspense>
    </main>
  );
};

export default Home;
