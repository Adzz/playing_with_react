export function selectOption(option) {
  return {
    type: 'SELECT_POPOVER_OPTION',
    payload: {
      selectedOption: option,
    },
  };
}

export function openPopover(popoverEl) {
  return {
    type: 'OPEN_POPOVER',
    payload: {
      openBoolean: true,
      anchorEl: popoverEl,
    },
  };
}

export function closePopover() {
  return {
    type: 'CLOSE_POPOVER',
    payload: {
      openBoolean: false,
      anchorEl: null,
    },
  };
}
