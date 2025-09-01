import React, { useState } from "react";
import Cost from "./components/cost";
import ProductInfo from "./components/productInfo";
import ProductionType from "./components/productionType";
import Stages from "./components/stages";
import Summary from "./components/summary";

export default function App() {
  const [producttype, setproducttype] = useState("inhouse");
  const [rate, setRate] = useState(0);
  const [inProduct, setInProduct] = useState("");
  const [outProduct, setOutProduct] = useState("");
  const [qty, setQty] = useState(0);
  const [cost, setcost] = useState(0);
  const [stages, setStages] = useState([{ wastage: 0, lost: 0, reject: 0 }]);

  // --- Calculation Logic ---
  const jobWorkCost = producttype === "jobwork" ? Number(rate) * Number(qty) : 0;

  let finalQty = qty;
  stages.forEach((s) => {
    const factor =
      (1 - s.wastage / 100) * (1 - s.lost / 100) * (1 - s.reject / 100);
    finalQty *= factor;
  });

  const totalCost = Number(cost) + jobWorkCost;
  const costPerUnit = finalQty > 0 ? totalCost / finalQty : 0;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>BOM & Production Cost Dashboard</h2>

      <ProductionType
        producttype={producttype}
        setproducttype={setproducttype}
        rate={rate}
        setRate={setRate}
      />

      <ProductInfo
        inProduct={inProduct}
        setInProduct={setInProduct}
        outProduct={outProduct}
        setOutProduct={setOutProduct}
        qty={qty}
        setQty={setQty}
      />

      <Cost cost={cost} setcost={setcost} />

      <Stages stages={stages} setStages={setStages} />

      <Summary
        totalCost={totalCost}
        finalQty={finalQty}
        costPerUnit={costPerUnit}
      />
    </div>
  );
}
