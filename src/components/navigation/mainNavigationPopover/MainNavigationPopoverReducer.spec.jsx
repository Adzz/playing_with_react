import MainNavigationPopoverReducer from './MainNavigationPopoverReducer';
import { selectOption, openPopover, closePopover } from './MainNavigationPopoverActions';


describe('MainNavigationPopoverReducer', () => {
  let state;
  const clickedElement = 'Clicked on element';

  beforeEach(() => {
    state = {
      openBoolean: false,
      anchorEl: null,
      options: [
        { id: 1, title: 'Data Management', slug: 'data_management' },
        { id: 2, title: 'Order Creation', slug: 'order_creation' },
        { id: 3, title: 'Brand Product Catalogue', slug: 'brand_product_catalogue' },
      ],
      selectedOption: { id: 1, title: 'Data Management', slug: 'data_management' },
    };
  });

  it('should return the initial state', () => {
    expect(MainNavigationPopoverReducer(undefined, {})).toEqual(state);
  });

  describe('selectOption action', () => {
    it('should set the selected option to the given option', () => {
      const option = { id: 1, title: 'Data Management', slug: 'data_management' };
      const result = MainNavigationPopoverReducer(state, selectOption(option));
      expect(result.selectedOption).toEqual(option);
    });
  });

  describe('openPopover action', () => {
    it('should set openBoolean to true', () => {
      const result = MainNavigationPopoverReducer(state, openPopover(clickedElement));
      expect(result.openBoolean).toEqual(true);
    });

    it('should set anchorEl to the html element clicked on', () => {
      const result = MainNavigationPopoverReducer(state, openPopover(clickedElement));
      expect(result.anchorEl).toEqual(clickedElement);
    });
  });

  describe('closePopover action', () => {
    beforeEach(() => {
      state.openBoolean = true;
      state.anchorEl = clickedElement;
    });

    it('should set openBoolean to false', () => {
      expect(MainNavigationPopoverReducer(state, closePopover()).openBoolean).toEqual(false);
    });

    it('should set anchorEl to null', () => {
      expect(MainNavigationPopoverReducer(state, closePopover()).anchorEl).toBe(null);
    });
  });
});
