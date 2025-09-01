export default function ProductInfo({ inProduct, setInProduct, outProduct, setOutProduct, qty, setQty }) {
  return (
    <div>
      In Product:{" "}
      <input value={inProduct} onChange={(e) => setInProduct(e.target.value)} />
      <br />
      Out Product:{" "}
      <input value={outProduct} onChange={(e) => setOutProduct(e.target.value)} />
      <br />
      Planned Qty:{" "}
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
    </div>
  );
}
