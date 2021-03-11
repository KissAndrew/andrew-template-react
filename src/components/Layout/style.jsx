import styled from 'styled-components'

const LayoutStyle = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;

	.m-layout-header {
		height: 50px;
		display: flex;
		background-color: #ccc;
	}

	.m-layout-body {
		display: flex;
		flex: 1;
	}
`

export { LayoutStyle }
