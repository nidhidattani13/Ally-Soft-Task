export default function Summary({ totalCost, finalQty, costPerUnit }) {
  return (
    <div>
      <h3>Summary</h3>
      <p>Total Cost: {totalCost}</p>
      <p>Final Qty: {finalQty.toFixed(2)}</p>
      <p>Cost per unit: {costPerUnit.toFixed(2)}</p>
    </div>
  );
}
