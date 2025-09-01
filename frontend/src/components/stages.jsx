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
              const newStages = stages.map((stage, index) =>
                index === i
                  ? { ...stage, wastage: Number(e.target.value) }
                  : stage
              );
              setStages(newStages);
            }}
          />
          Lost%{" "}
          <input
            type="number"
            value={s.lost}
            onChange={(e) => {
              const newStages = stages.map((stage, index) =>
                index === i
                  ? { ...stage, lost: Number(e.target.value) }
                  : stage
              );
              setStages(newStages);
            }}
          />
          Reject%{" "}
          <input
            type="number"
            value={s.reject}
            onChange={(e) => {
              const newStages = stages.map((stage, index) =>
                index === i
                  ? { ...stage, reject: Number(e.target.value) }
                  : stage
              );
              setStages(newStages);
            }}
          />
        </div>
      ))}
      <button
        onClick={() =>
          setStages([...stages, { wastage: 0, lost: 0, reject: 0 }])
        }
      >
        Add Stage
      </button>
    </div>
  );
}
