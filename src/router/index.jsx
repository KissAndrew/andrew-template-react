import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom'

const Layout = lazy(() => import('@src/components/Layout'))

const UserList = lazy(() => import('@src/pages/User/List'))
const NotFound = lazy(() => import('@src/pages/User/List'))

const MyRouter = () => (
	<Router>
		<Suspense
			fallback={
				<div className="pageLoadingFallBack">
					<div className="loginMask"></div>
					<div className="pageLoadingFallBack-msg">正在拼命加载</div>
				</div>
			}
		>
			<Layout menuArr={['ButtonView', 'InputView']}>
				<RouteSwitch>
					<Route path="/User/List" component={UserList} />
					<Route extra path="/" component={NotFound} />
				</RouteSwitch>
			</Layout>
		</Suspense>
	</Router>
)

export default MyRouter
