import React from 'react';

import AddLink from '../ui/AddLink';
import LinksList from './LinksList';
import LinksListFilters from './LinksListFilters';
import PrivateHeader from './PrivateHeader';

export default Link = () => {
  return (
    <div>
      <PrivateHeader title="Short Lnk"/>
      <div className="page-content">
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};
