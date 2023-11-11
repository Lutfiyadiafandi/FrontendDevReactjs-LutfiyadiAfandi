type CategoryProps = {
  category: string | undefined;
  price: string | undefined;
};
const Categories = ({ category, price }: CategoryProps) => {
  return (
    <div className="flex gap-1 text-base font-normal text-gray-600 uppercase">
      <span>{category}</span>
      <span>•</span>
      <span>{price}</span>
    </div>
  );
};

export default Categories;
