import React from "react";
import Logo from "../../assets/logo.png";

export function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex lg:px-32 justify-between items-center">
      {/* Logo */}
      <img className="lg:h-20 h-16 cursor-pointer" src={Logo} alt="Logo" />
    </div>
  );
}
