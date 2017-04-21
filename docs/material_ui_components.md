## Themes

This is the default light theme object MUI uses to theme components. To write our own, replace the values with the ones we want.

```js
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from '../colors';
import {fade} from '../../utils/colorManipulator';
import spacing from '../spacing';

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
```

Syntax for importing Each MUI component:

```js
import AppBar from './AppBar';
import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Badge from './Badge';
import BottomNavigation from './BottomNavigation';
import BottomNavigationItem from './BottomNavigation/BottomNavigationItem';
import Card from './Card';
import CardActions from './Card/CardActions';
import CardHeader from './Card/CardHeader';
import CardMedia from './Card/CardMedia';
import CardTitle from './Card/CardTitle';
import CardText from './Card/CardText';
import Checkbox from './Checkbox';
import Chip from './Chip';
import CircularProgress from './CircularProgress';
import DatePicker from './DatePicker';
import Dialog from './Dialog';
import Divider from './Divider';
import Drawer from './Drawer';
import DropDownMenu from './DropDownMenu';
import FlatButton from './FlatButton';
import FloatingActionButton from './FloatingActionButton';
import FontIcon from './FontIcon';
import GridList from './GridList';
import GridTile from './GridList/GridTile';
import IconButton from './IconButton';
import IconMenu from './IconMenu';
import LinearProgress from './LinearProgress';
import List from './List';
import ListItem from './List/ListItem';
import makeSelectable from './List/makeSelectable';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MuiThemeProvider from './styles/MuiThemeProvider';
import Paper from './Paper';
import Popover from './Popover';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButton/RadioButtonGroup';
import RaisedButton from './RaisedButton';
import RefreshIndicator from './RefreshIndicator';
import SelectField from './SelectField';
import Slider from './Slider';
import Subheader from './Subheader';
import SvgIcon from './SvgIcon';
import Step from './Stepper/Step';
import StepButton from './Stepper/StepButton';
import StepContent from './Stepper/StepContent';
import StepLabel from './Stepper/StepLabel';
import Stepper from './Stepper/Stepper';
import Snackbar from './Snackbar';
import Tabs from './Tabs';
import Tab from './Tabs/Tab';
import Table from './Table';
import TableBody from './Table/TableBody';
import TableFooter from './Table/TableFooter';
import TableHeader from './Table/TableHeader';
import TableHeaderColumn from './Table/TableHeaderColumn';
import TableRow from './Table/TableRow';
import TableRowColumn from './Table/TableRowColumn';
import TextField from './TextField';
import TimePicker from './TimePicker';
import Toggle from './Toggle';
import Toolbar from './Toolbar';
import ToolbarGroup from './Toolbar/ToolbarGroup';
import ToolbarSeparator from './Toolbar/ToolbarSeparator';
import ToolbarTitle from './Toolbar/ToolbarTitle';
```
