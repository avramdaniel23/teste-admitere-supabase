import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

function PopoverNav() {
  return (
    <PopoverGroup>
      <Popover>
        <PopoverButton>Product</PopoverButton>
        <PopoverPanel>{/* ... */}</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Solutions</PopoverButton>
        <PopoverPanel>{/* ... */}</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Pricing</PopoverButton>
        <PopoverPanel>{/* ... */}</PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
