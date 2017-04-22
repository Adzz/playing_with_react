const initialState = {
  openBoolean: false,
  anchorEl: null,
  options: [
    { id: 1, title: 'Data Management', slug: 'data_management' },
    { id: 2, title: 'Order Creation', slug: 'order_creation' },
    { id: 3, title: 'Brand Product Catalogue', slug: 'brand_product_catalogue' },
  ],
  selectedOption: { id: 1, title: 'Data Management', slug: 'data_management' },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_POPOVER_OPTION':
      return Object.assign({}, state, {
        selectedOption: action.payload.selectedOption,
      });
    case 'OPEN_POPOVER':
      return Object.assign({}, state, {
        openBoolean: action.payload.openBoolean,
        anchorEl: action.payload.anchorEl,
      });
    case 'CLOSE_POPOVER':
      return Object.assign({}, state, {
        openBoolean: action.payload.openBoolean,
        anchorEl: action.payload.anchorEl,
      });
    default:
      return state;
  }
}
