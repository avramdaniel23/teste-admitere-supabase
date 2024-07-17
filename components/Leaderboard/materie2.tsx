import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

function Example() {
  return (
    <PopoverGroup>
      <Popover>
        <PopoverButton>Matematica</PopoverButton>
        <PopoverPanel>{}</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Matematica</PopoverButton>
        <PopoverPanel>{/* ... */}</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Matematica</PopoverButton>
        <PopoverPanel>{/* ... */}</PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
