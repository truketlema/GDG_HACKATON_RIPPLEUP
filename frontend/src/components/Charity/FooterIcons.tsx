import React from "react";
import who from "../../assets/who.png";
import cross from "../../assets/cross.png";
import moon from "../../assets/moon.png";

export default function FooterIcons(): JSX.Element {
  const icons: string[] = [who, cross, moon, who];

  return (
    <div className="flex justify-around items-center border-t py-4">
      {icons.map((icon, i) => (
        <img key={i} src={icon} alt="icon" className="w-16 h-16" />
      ))}
    </div>
  );
}
