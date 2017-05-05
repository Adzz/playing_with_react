import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    alignContent: 'center',
    maxWidth: '50vw',
    height: '70vh',
    lineHeight: '100px',
    margin: '0 auto',
    overflow: 'scroll',
    flex: '1 0 auto',
  },
  button: {
    height: '100px',
    margin: '10px',
    flex: '1 0 auto',
    minWidth: '200px',
  },
  link: {
    textDecoration: 'none',
  },
};


export class TiledButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { id: 1, title: 'Seasons', linkTo: 'seasons' },
        { id: 2, title: 'Brands and Suppliers', linkTo: 'brands_and_suppliers' },
        { id: 3, title: 'Taxon Manager', linkTo: 'taxon_manager' },
        { id: 4, title: 'Surfdome Sizes', linkTo: 'surfdome_sizes' },
        { id: 5, title: 'Size Mapping', linkTo: 'size_mapping' },
        { id: 6, title: 'Colours', linkTo: 'colours' },
      ],
    };
  }

  render() {
    return (
      <div style={styles.container} >
        {this.state.buttons.map(button => (
          <RaisedButton
            key={button.id}
            label={button.title}
            style={styles.button}
            secondary
            containerElement={<Link to={`${this.props.basePath.url}/${button.linkTo}`} style={styles.link} />}
          />
        ))}
      </div>
    );
  }
}

TiledButtons.propTypes = {
  basePath: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }).isRequired,
};

export default Radium(TiledButtons);
