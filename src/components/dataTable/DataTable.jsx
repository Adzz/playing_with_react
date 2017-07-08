import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Table, TableBody, TableRow, TableHeaderColumn, TableRowColumn, TableHeader } from 'material-ui/Table';
import { steelBlue, fullBlack, lightTeal } from '../../styles/colors';


const styles = {
  tableHeader: {
    color: 'rgb(0,0,0)',
    border: 'none',
    position: 'fixed',
  },
  idCol: {
    width: '100px',
  },
  columnTitles: {
    color: steelBlue,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  button: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
  },
  bodyContainer: {
    position: 'relative',
    top: '56px',
    overflow: 'scroll',
  },
  bodyLink: {
    textDecoration: 'none',
    color: fullBlack,
  },
};

export const DataTable = props => (
  <div>
    <Table fixedFooter={false} fixedHeader selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={styles.tableHeader}>
        <TableRow selectable={false} displayBorder={false}>
          {props.tableHeaders.map(header => (
            <TableHeaderColumn key={header.key} tooltip={header.tooltip} style={header.style} >
              <h4 style={styles.columnTitles}>{header.title}</h4>
            </TableHeaderColumn>
          ))}
        </TableRow>
      </TableHeader>
    </Table>
    <div style={styles.bodyContainer}>
      <Table fixedFooter={false} fixedHeader selectable={false} height={props.height}>
        <TableBody showRowHover displayRowCheckbox={false}>
          {props.tableData.map(data => (
            <TableRow selectable={false} key={data.id} displayBorder={false}>
              <TableRowColumn style={styles.idCol}>
                <Link
                  to={`${props.elementBaseURL}${data.id}`}
                  style={styles.bodyLink}
                >
                  {data.id}
                </Link>
              </TableRowColumn>
              <TableRowColumn style={styles.bodyLink}>
                <Link
                  to={`${props.elementBaseURL}${data.id}`}
                  style={styles.bodyLink}
                >
                  {data.name}
                </Link>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FloatingActionButton
        style={styles.button}
        onTouchTap={props.onButtonClick}
        backgroundColor={lightTeal}
      >
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);

DataTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  elementBaseURL: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Radium(DataTable);
