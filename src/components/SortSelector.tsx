import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
    onselectSortOrder:(sortOrder: string) => void;
    selectedSortLabel: string
}

const SortSelector = ({onselectSortOrder, selectedSortLabel}:Props) => {
  const sortOrder = [
    { value: '', label: "Relevance"},
    { value: '-added', label: "Date added"},
    { value: 'name', label: "Name"},
    { value: '-released', label:  "Release date"},
    { value: '-metacritic', label: "average rating"},
    { value: '-rating', label:  "popularity"}
  ];
  const currentSortOrder = sortOrder.find(order => order.value === selectedSortLabel);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
      Order by: {currentSortOrder?.label || "Revelance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={() => onselectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
