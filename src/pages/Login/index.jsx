import * as React from 'react'

import { Button, SpaceWrapper } from '@andrew-cube/react'

import { ViewStyle } from './style'

const ButtonView = (props) => {
	return (
		<ViewStyle>
			<SpaceWrapper>
				<Button type="primary">确认3332323</Button>
				<Button type="danger">确认3332323</Button>
			</SpaceWrapper>
		</ViewStyle>
	)
}
export { ButtonView }
export default ButtonView
