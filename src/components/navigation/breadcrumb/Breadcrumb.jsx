import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import findLastIndex from 'lodash/findIndex';
import take from 'lodash/take';
import startCase from 'lodash/startCase';
import { Link } from 'react-router-dom';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { steelBlue } from '../../../styles/colors';

const style = {
  container: {
    marginLeft: '3vw',
    marginTop: '2vh',
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',
    color: steelBlue,
  },
  icon: {
    color: steelBlue,
    position: 'relative',
    top: '6px',
  },
};

function breadcrumbsFor(locationPathName) {
  const locations = locationPathName.split('/');
  return locations.slice(1).map(location => (
    {
      breadcrumb: startCase(location.replace(/_/g, ' ')),
      slug: `/${location}`,
      key: uniqueId('breadcrumb'),
    }
  ));
}

function hyperlinkForBreadcrumb(pathname, breadcrumb) {
  const breadcrumbs = breadcrumbsFor(pathname);
  const index = findLastIndex(breadcrumbs, ['breadcrumb', breadcrumb]);
  return take(breadcrumbs, index + 1).map(crumb => crumb.slug).join('');
}


export const Breadcrumb = ({ location }) => (
  <div style={style.container}>
    {
      breadcrumbsFor(location.pathname).map(breadcrumb => (
        <Link
          to={hyperlinkForBreadcrumb(location.pathname, breadcrumb.breadcrumb)}
          key={breadcrumb.key}
          style={style.link}
        >
          {breadcrumb.breadcrumb}
        </Link>
      )).reduce((prev, current) => (
        [
          prev,
          <ChevronRight key={uniqueId('crumbIcon')} style={style.icon} />,
          current,
        ]))
    }
  </div>
);

Breadcrumb.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
};

export default Radium(Breadcrumb);
