export default function ProductionType({ producttype, setproducttype, rate, setRate }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          checked={producttype == "inhouse"}
          onChange={() => setproducttype("inhouse")}
        /> Inhouse
      </label>
      <label>
        <input
          type="radio"
          checked={producttype == "jobwork"}
          onChange={() => setproducttype("jobwork")}
        /> Jobwork
      </label>

      {producttype == "jobwork" && (
        <div>
          Job rate/unit:{" "}
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
