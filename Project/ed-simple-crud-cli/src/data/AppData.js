// The links corresponding to the navigation bar links. They passed as arguments in AppNavBar. If we have to include
// one more link just add the element here and then add Routing configuration in App.js
export const navigationLinks = [
    {
        index: 1,
        url: "/#",
        title: "Home"
    },
    {
        index: 2,
        url: "/webusers/new",
        title: "Register"
    },
    {
        index: 3,
        url: "/webusers",
        title: "Web Users"
    }
]

// Website main icon path. Used in the AppNavBar.
export const navbarImage = "../resources/logo.svg";