import './App.css'
import AppNavBar from "./component/AppNavBar";
import AppFooter from './component/AppFooter';
import WebUserList from "./component/WebUserList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {navbarImage, navigationLinks} from './data/AppData'
import WebUser from './component/WebUser';

/**
 * Main App Component that contains the Browser Router. Contains the default page's body
 * which is the WebUserList component. Also includes the App Routing, basically only for
 * the WebUserList and WebUser Creation Form.
 */
export default function App() {
	return (<>
		<BrowserRouter>
			<AppNavBar navImage={navbarImage} navLinks={navigationLinks} />
			<Routes>
				{/*localhost:3000/*/}
				<Route path="/" element={<WebUserList />}></Route>
				{/*localhost:3000/webusers*/}
				<Route path="/webusers" element={<WebUserList />}></Route>
				{/*localhost:3000/webusers*/}
				<Route path="/webusers/new" element={<WebUser />}></Route>
			</Routes>
			<AppFooter />
		</BrowserRouter>
		
	</>);
}