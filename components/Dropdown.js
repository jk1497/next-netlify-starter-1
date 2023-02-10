import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function Drop() {
  const [selected, setSelected] = React.useState(new Set(["Select Genre.."]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );


  return (
        <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="action">Action</Dropdown.Item>
        <Dropdown.Item key="horror">Horror</Dropdown.Item>
        <Dropdown.Item key="animation">Animation</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
