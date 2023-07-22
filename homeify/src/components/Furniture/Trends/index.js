import React from "react";
import ActionAreaCard from "./ActionAreaCard";

const data = [
  {
    Position: 1,
    imgUrl_div5:
      "https://ii2.pepperfry.com/assets/a4fb6d50-fd34-47b7-b8a0-3adf4eae6e1f.jpg",
    name_div5: "Jewel Toned 3 Seater Sofas",
    desc_div5: "1000+ Options, Starting ₹12,999",
  },
  {
    Position: 2,
    imgUrl_div5:
      "https://ii2.pepperfry.com/assets/5d6befe2-3e6a-467c-875f-800e2e16f376.jpg",
    name_div5: "Modern TV Consoles",
    desc_div5: "100+ Options, Starting ₹1,360",
  },
  {
    Position: 3,
    imgUrl_div5:
      "https://ii3.pepperfry.com/assets/dd16d27e-b5a7-471f-ab9e-b0a85dd57138.jpg",
    name_div5: "Marble & Glass top Dining Sets",
    desc_div5: "400+ Options, Starting ₹13,999",
  },
];

export default function Trends() {
  return (
    <div>
      {data.length ? (
        data.map((item) => <ActionAreaCard key={item.Position} item={item} />)
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}
