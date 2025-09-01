export default function Stages({ stages, setStages }) {
  return (
    <div>
      <h4>Stages</h4>
      {stages.map((s, i) => (
        <div key={i}>
          Wastage%{" "}
          <input
            type="number"
            value={s.wastage}
            onChange={(e) => {
              const copy = [...stages];
              copy[i].wastage = Number(e.target.value);
              setStages(copy);
            }}
          />
          Lost%{" "}
          <input
            type="number"
            value={s.lost}
            onChange={(e) => {
              const copy = [...stages];
              copy[i].lost = Number(e.target.value);
              setStages(copy);
            }}
          />
          Reject%{" "}
          <input
            type="number"
            value={s.reject}
            onChange={(e) => {
              const copy = [...stages];
              copy[i].reject = Number(e.target.value);
              setStages(copy);
            }}
          />
        </div>
      ))}
      <button
        onClick={() => setStages([...stages, { wastage: 0, lost: 0, reject: 0 }])}
      >
        Add Stage
      </button>
    </div>
  );
}
