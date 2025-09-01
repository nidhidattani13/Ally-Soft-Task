export default function Summary({ totalCost, finalQty, costPerUnit }) {
  return (
    <div>
      <h3>Summary</h3>
      <p>Total Cost: {totalCost}</p>
      <p>Final Qty: {finalQty}</p>
      <p>Cost per unit: {costPerUnit}</p>
    </div>
  );
}
