import { Button, ButtonProps } from "antd";
import Card from "../molecules/Card";
import { IRestaurants } from "../../utils/interface/Restaurants";

type Props = {
  data: IRestaurants[] | undefined;
  onClick: ButtonProps["onClick"];
};
const ListRestaurants = ({ data, onClick }: Props) => {
  return (
    <section className="py-8 pb-20 w-full mx-auto">
      <h2 className="text-3xl font-normal text-sky-950">All Restaurants</h2>
      <div className="mt-8 flex flex-wrap justify-center lg:justify-normal gap-y-20 gap-x-[26.66px]">
        {data?.map((item: IRestaurants) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            image={`${item.image}&${item.id}`}
            category={item.category}
            price={item.price}
            rating={item.rating}
            isOpen={item.isOpen}
          />
        ))}
      </div>
      <div className="text-center">
        <Button
          onClick={onClick}
          size="large"
          className="mt-16 w-full max-w-[350px] border-sky-950 text-base font-medium text-sky-950 uppercase"
        >
          Load More
        </Button>
      </div>
    </section>
  );
};

export default ListRestaurants;
