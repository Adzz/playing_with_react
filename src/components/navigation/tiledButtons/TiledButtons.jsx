import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    alignContent: 'center',
    width: '40vw',
    height: '100%',
    lineHeight: '100px',
    margin: '0 auto',
  },
  button: {
    height: '100px',
    width: '200px',
    margin: '10px',
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
        { id: 6, title: 'One More Button', linkTo: 'one_more_button' },
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
            containerElement={<Link to={`/${button.linkTo}`} style={styles.link} />}
          />
        ))}
      </div>
    );
  }
}

export default Radium(TiledButtons);
