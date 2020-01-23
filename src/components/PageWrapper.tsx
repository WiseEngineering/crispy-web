import React, { ReactNode } from 'react'

// eslint-disable-next-line react/display-name
export default ({ children }: { children: ReactNode }): JSX.Element => (
  <div>
    <div>
      <div>{children}</div>
    </div>
  </div>
)
