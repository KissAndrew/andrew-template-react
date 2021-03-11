import * as React from 'react'

import { Button } from '@andrew-cube/react'

import { ViewStyle } from './style'

const ButtonView = (props) => {
	return (
		<ViewStyle>
			<Button className="m-page">
				<div
					onClick={() => {
						console.log('click')
					}}
				>
					确认3332323
				</div>
			</Button>
		</ViewStyle>
	)
}
export { ButtonView }
export default ButtonView
