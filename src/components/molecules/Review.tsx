import { Rate } from "antd";
import { apiRequest } from "../../api/api";
import { useEffect, useState } from "react";
import { IReviews } from "../../utils/interface/Reviews";

const Review = () => {
  const [response, setResponse] = useState<IReviews[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiRequest(`/reviews`);
      setResponse(data);
    };
    fetchData();
  }, []);
  console.log(response);

  return (
    <div className="mt-10 flex gap-5 justify-between">
      {response?.map((item: IReviews) => (
        <div className="w-[300px] flex flex-col gap-2" key={item.id}>
          <img
            className="w-full aspect-video"
            src={`${item.image}&${item.id}`}
            alt={item.name}
          />
          <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
          <Rate
            disabled
            className="text-sky-950"
            allowHalf
            defaultValue={item.rating}
          />
          <p className="text-base font-normal text-gray-600">{item.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
