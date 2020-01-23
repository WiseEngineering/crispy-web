import React, { ReactNode } from 'react'

const PageWrapper = ({ children }: { children: ReactNode }): JSX.Element => (
  <div>
    <div>
      <div>{children}</div>
    </div>
  </div>
)

export default PageWrapper
