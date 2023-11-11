import { Button, Checkbox, Select } from "antd";
import type { ButtonProps, CheckboxProps } from "antd";

type Props = {
  onChangeCheckbox: CheckboxProps["onChange"];
  onChangePrice: (value: string) => void;
  onChangeCategory: (value: string) => void;
  onClick: ButtonProps["onClick"];
  checked: boolean;
  disabled: boolean;
};
const FilterNav = ({
  onChangeCheckbox,
  onChangePrice,
  onChangeCategory,
  onClick,
  checked,
  disabled,
}: Props) => {
  return (
    <nav className="py-4 flex flex-col lg:flex-row justify-between items-center border-y border-gray-200">
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <span className="text-base font-normal text-gray-900">Filter By:</span>
        <Checkbox
          onChange={onChangeCheckbox}
          checked={checked}
          className="text-base font-normal text-sky-950 border-b border-gray-300 flex items-end"
          style={{ width: 120, height: 30 }}
        >
          Open Now
        </Checkbox>
        <Select
          className="text-base font-medium text-sky-950 border-b border-gray-300"
          placeholder={"Price"}
          size="large"
          onChange={onChangePrice}
          style={{ width: 120, height: 30 }}
          bordered={false}
          options={[
            { value: "$", label: "$" },
            { value: "$$", label: "$$" },
            { value: "$$$", label: "$$$" },
            { value: "$$$$", label: "$$$$" },
          ]}
        />
        <Select
          className="text-base font-medium text-sky-950 border-b border-gray-300"
          placeholder={"Category"}
          size="large"
          onChange={onChangeCategory}
          style={{ width: 120, height: 30 }}
          bordered={false}
          options={[
            { value: "Italian", label: "Italian" },
            { value: "Indian", label: "Indian" },
            { value: "Asian", label: "Asian" },
            { value: "Chinese", label: "Chinese" },
          ]}
        />
      </div>
      <Button
        onClick={onClick}
        disabled={disabled}
        className="px-8 rounded-sm border-sky-950 text-base font-medium text-sky-950"
      >
        CLEAR ALL
      </Button>
    </nav>
  );
};

export default FilterNav;
