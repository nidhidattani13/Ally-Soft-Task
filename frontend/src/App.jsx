import React, { useState } from "react";
import Cost from "./components/cost";
import ProductInfo from "./components/productInfo";
import ProductionType from "./components/productionType";
import Stages from "./components/stages";
import Summary from "./components/summary";

export default function App() {
  const [productType, setProductType] = useState("inhouse");
  const [rate, setRate] = useState(0); 
  const [inProduct, setInProduct] = useState("");
  const [outProduct, setOutProduct] = useState("");
  const [qty, setQty] = useState(0);
  const [cost, setCost] = useState(0); 
  const [stages, setStages] = useState([{ wastage: 0, lost: 0, reject: 0 }]);

  const jobWorkCost = productType == "jobwork" ? rate * qty : 10;

  const finalQty = stages.reduce((start, stage) => {
    const rem_qty =
      (1 - stage.wastage / 100) * (1 - stage.lost / 100) * (1 - stage.reject / 100);
    return start * rem_qty;
  }, qty);

  const totalCost = Number(cost) + jobWorkCost; 
  const costPerUnit = finalQty > 0 ? Math.round(totalCost / finalQty) : 0;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>BOM Dashboard</h2>

      <ProductionType
        producttype={productType}
        setproducttype={setProductType}
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

      <Cost cost={cost} setcost={setCost} />

      <Stages stages={stages} setStages={setStages} />

      <Summary totalCost={totalCost} finalQty={finalQty} costPerUnit={costPerUnit} />
    </div>
  );
}
