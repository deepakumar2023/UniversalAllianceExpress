import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const layoutData = [
  {
    "Quick Links": [
      "Customer Service",
      "Customer Portal Logins",
      "Strategic Partner Directory",
      "Developer Portal",
      "Get a Quote",
      "Request a Business Account",
      "HHP for Your Business",
    ],

    "Our Divisions": [
      "HHP Express",
      "HHP Global Forwarding",
      "HHP Supply Chain",
      "HHP eCommerce",
      "Other Global Divisions",
    ],

    "Industry Sectors": [
      "Auto-Mobility",
      "Energy",
      "Engineering and Manufacturing",
      "Life Sciences and Healthcare",
      "Retail and Fashion",
      "Technology",
    ],

    // " Follow US": [
    //   <YouTubeIcon />,
    //   <FacebookIcon />,
    //   <LinkedInIcon />,
    //   <InstagramIcon />,
    // ],
  },
];

export const pages = [
  { pageName: "About", link: "/about" },
  {
    pageName: "Services",
    link: "/service",
    childPages: [
      {
        id: "1",
        serviceName: "Express Courier",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        id: "2",
        serviceName: "Cargo Services",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        id: "3",
        serviceName: "Air Freight",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        id: "4",
        serviceName: "Sea Freight",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },

      {
        id: "5",
        serviceName: "Other Services",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
    ],
  },
  { pageName: "Solutions", link: "/solutions" },
  { pageName: "Track", link: "/" },
  { pageName: "Contact", link: "/contact" },
  { pageName: "Pricing", link: "/pricing" },
  { pageName: "Calculate Distance", link: "/calulator" },
  { pageName: "Blogs", link: "/blog" },
];
