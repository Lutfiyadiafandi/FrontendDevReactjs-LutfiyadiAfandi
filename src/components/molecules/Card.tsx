import { Rate } from "antd";
import Categories from "../atoms/Categories";
import Open from "../atoms/Open";
import ButtonLink from "../atoms/ButtonLink";
import Closed from "../atoms/Closed";
import { IRestaurants } from "../../utils/interface/Restaurants";

const Card = ({
  id,
  name,
  category,
  price,
  image,
  rating,
  isOpen,
}: IRestaurants) => {
  return (
    <div className="w-[300px] max-h-[500px] flex flex-col justify-between gap-5 bg-red-10">
      <div className="flex flex-col gap-[10px]">
        <img
          className="w-full aspect-video bg-cover bg-gray-400 rounded-sm"
          src={image}
          alt={name}
        />
        <h2 className="text-xl font-medium text-sky-950">{name}</h2>
        <Rate
          disabled
          className="text-sky-950"
          allowHalf
          defaultValue={rating}
        />
        <div className="flex justify-between">
          <Categories category={category} price={price} />
          {isOpen ? <Open /> : <Closed />}
        </div>
      </div>
      <ButtonLink to={`/${id}`}>Learn More</ButtonLink>
    </div>
  );
};

export default Card;
