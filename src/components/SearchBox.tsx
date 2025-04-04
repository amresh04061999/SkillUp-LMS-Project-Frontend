
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function SearchBox() {
  return (
      <TextInput
        placeholder="Search..."
        rightSection={<IconSearch size={18} />}
        w="500px"
      />
  );
}