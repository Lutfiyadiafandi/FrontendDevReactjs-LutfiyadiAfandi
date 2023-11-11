import { useEffect, useState } from "react";
import { Breadcrumb, Rate } from "antd";
import { Link, useParams } from "react-router-dom";
import Review from "../molecules/Review";
import { apiRequest } from "../../api/api";
import { IRestaurants } from "../../utils/interface/Restaurants";

const DetailsRestaurants = () => {
  const [response, setResponse] = useState<IRestaurants>();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiRequest(`/restaurants/${id}`);
      setResponse(data);
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto px-4 xl:px-0 py-10">
      <Breadcrumb
        className="text-lg font-normal text-gray-600"
        items={[{ title: <Link to={"/"}>Home</Link> }, { title: "Details" }]}
      />
      <section className="mt-10 flex flex-col gap-8">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-medium text-sky-950">
            {response?.name}
          </h2>
          {response && (
            <Rate
              disabled
              className="mt-3 text-2xl text-sky-950"
              allowHalf
              defaultValue={response.rating}
            />
          )}
        </div>
        <img
          className="w-full h-[400px] aspect-video bg-cover"
          src={`${response?.image}&${id}`}
          alt={response?.name}
        />
        <Review />
      </section>
    </main>
  );
};

export default DetailsRestaurants;
