export default function Cost({ cost, setcost }) {
  return (
    <div>
      Cost:{" "}
      <input
        type="number"
        value={cost}
        onChange={(e) => setcost(e.target.value)}
      />
    </div>
  );
}
