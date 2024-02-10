import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * The navigation bar component. It renders in the App.js Component.
 * @param {any} navImage The icon url that it displayed in the top left corner of the navigation bar.
 * @param {array} navLinks The navigation url links that represent the navigation menu options.
 */
export default function AppNavBar({navImage, navLinks}) {

    const [displayVerticalList, setDisplayVerticalList] = useState(false);
    const navigator = useNavigate();
    /**
     * Function that toogles the vertical navigation menu list display when clicking
     * the hamburger button of the navbar.
     */
    const toogleVerticalDispaly = () => {
        let verticalList = document.getElementById("navbarNav");
        if (!displayVerticalList) {
            verticalList.style.display = "block";
            setDisplayVerticalList(true);
        } else {
            verticalList.style.display = "none";
            setDisplayVerticalList(false);
        }
    }

    return (<>
    <header>
        <nav className="appNavbar navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" onClick={() => {navigator("/")}}>
                    <img src={navImage} alt="logo" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" onClick={() => {toogleVerticalDispaly();}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* ----------- Links Section ------------*/}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {
                        navLinks.map(element => {
                            return <li key={element.index} className="nav-item"><button className="nav-link active" onClick={() => {navigator(element.url)}}>{element.title}</button></li>
                        })
                    }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>);

}

