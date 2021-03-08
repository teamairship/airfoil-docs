import * as React from 'react';
import isAbsoluteUrl from 'is-absolute-url';

import Link from '../link';

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    if (props.href && !isAbsoluteUrl(props.href)) return <Link to={props.href}>{link}</Link>;
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
