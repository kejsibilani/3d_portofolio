import {
    instagram,
    youtube,
    tiktok,
    hardware,
    systems,
    data,
    update,
    computer,
    laptop,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "services",
      title: "Services",
    },
    {
      id: "socials",
      title: "Socials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const socials = [
    {
      name: "Instagram",
      icon: instagram,
    },
    {
      name: "CSS 3",
      icon: youtube,
    },
    {
      name: "JavaScript",
      icon: tiktok,
    }
  ];
  
  const services = [
    {
      title: "Hardware diagnostics and repair",
      icon: hardware,
      iconBg: "#383E56",
      points: [
        "Identifying and fixing hardware issues such as faulty components or damaged parts",
      ],
    },
    {
      title: "Operating system installation and upgrades",
      icon: systems,
      iconBg: "#E6DEDD",
      points: [
        "Installing or upgrading operating systems like Windows, macOS, or Linux",
      ],
    },
    {
      title: "Data recovery",
      icon: data,
      iconBg: "#FFFFFF",
      points: [
        "Retrieving lost or corrupted data from storage devices such as hard drives or SSDs",
      ],
    },
    {
      title: "Hardware upgrades",
      icon: update,
      iconBg: "#383E56",
      points: [
        "Upgrading components like RAM, graphics cards, or storage for improved performance",
      ],
    },
    {
        title: "Laptop repair",
        icon: laptop,
        iconBg: "#E6DEDD",
        points: [
            "Repairing physical damage, replacing broken screens, keyboards, or batteries in laptops",
        ],
    },
    {
        title: "Custom-built computers",
        icon: computer,
        iconBg: "#383E56",
        points: [
            "Designing and building custom computers tailored to specific user needs or preferences",
        ],
    },
  ];
  
  
  export { services, socials };