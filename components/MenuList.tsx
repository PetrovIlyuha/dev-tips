import { Menu } from "antd";

type MenuListProps = {
  iterableList: string[];
  name: string;
  handleDropdownChange: (event: any) => void;
};

const MenuList = ({
  iterableList,
  name,
  handleDropdownChange,
}: MenuListProps) => (
  <Menu>
    {iterableList.map((item: string) => (
      <Menu.Item
        key={`${item}`}
        title={`${name}`}
        onClick={handleDropdownChange}
      >
        {item}
      </Menu.Item>
    ))}
  </Menu>
);

export default MenuList;
