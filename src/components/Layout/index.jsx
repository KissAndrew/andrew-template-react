import * as React from 'react'

import { LayoutStyle } from './style'

const Layout = (props) => {
	const { children, ...rest } = props
	return (
		<LayoutStyle className="m-layout" {...rest}>
			<div className="m-layout-header"></div>
			<div className="m-layout-body">{children}</div>
		</LayoutStyle>
	)
}
export default Layout
