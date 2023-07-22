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
  {
    Position: 4,
    imgUrl_div5:
      "https://ii2.pepperfry.com/assets/e84a5983-ae92-4d7f-8f91-e035754e693a.jpg",
    name_div5: "Comfortcore Manual Recliners",
    desc_div5: "170+ Options, Starting ₹13,299",
  },
  {
    Position: 5,
    imgUrl_div5:
      "https://ii3.pepperfry.com/assets/98a0cc75-41d3-48c3-ba73-53e34601c08e.jpg",
    name_div5: "Indoor Wooden Swings",
    desc_div5: "30+ Options, Starting ₹15,999",
  },
  {
    Position: 6,
    imgUrl_div5:
      "https://ii2.pepperfry.com/assets/66b69609-e67d-4f61-a8a5-ce50f3d021ea.jpg",
    name_div5: "Glass Coffee Tables",
    desc_div5: "90+ Options, Starting ₹3,300",
  },
];

const data2 = [
  {
    Position: 1,
    imgUrl_div6:
      "https://ii3.pepperfry.com/assets/f478ee4b-b874-4242-bfd4-394440b7a4ec.jpg",
    name_div6: "Noyes Collection by Amberville",
    desc_div6: "20+ Options, Starting ₹7,749",
  },
  {
    Position: 2,
    imgUrl_div6:
      "https://ii1.pepperfry.com/assets/3b6a4f55-9759-4e69-8c9c-de67e4b80fe9.jpg",
    name_div6: "Flair Collection by Woodsworth",
    desc_div6: "10+ Options, Starting ₹9,749",
  },
  {
    Position: 3,
    imgUrl_div6:
      "https://ii3.pepperfry.com/assets/1c8d8616-2028-49fa-b7d7-e8137c4e9d59.jpg",
    name_div6: "Beds by Durian",
    desc_div6: "50+ Options, Starting ₹20,020",
  },
];

export default function Trends() {
  return (
    <div>
      <h1>Follow Trends In Furniture</h1>
      {data.length ? (
        data.map((item) => <ActionAreaCard key={item.Position} item={item} />)
      ) : (
        <p>Nothing to show</p>
      )}
      <h1>Check Out These Curated Collections</h1>
      {data2.length ? (
        data2.map((item) => <ActionAreaCard key={item.Position} item={item} />)
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}
