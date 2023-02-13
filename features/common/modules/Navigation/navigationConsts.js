const { HiPhoneArrowUpRight } = require("react-icons/hi2");

const navigationLinks = [
    // title of the page with the link to a page
    {title:'Properties', link: "/properties"},
    {title:'Contact', link: "/contact"},
    {title:'(800) 555 555', link: "tel:(800) 555 555", icon: <HiPhoneArrowUpRight/>}
]

export default navigationLinks