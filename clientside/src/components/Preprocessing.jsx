import "./styles.css";

export const Preprocessing = () => {
  return (
    <div className="preprocess-component">
      <h1 className="heading-1">Preprocess your Data</h1>

      <div className="category-container">
        <div className="category box2" style={{ marginLeft: "2rem" }}>
          <h2 className="heading" style={{ paddingTop: "3rem" }}>
            Encoder
          </h2>
          <div className="checkbox-label">
            <input
              type="radio"
              name="encoder_choice"
              value="one_hot"
              id="encoder-1"
            />
            <label htmlFor="encoder-1">One Hot Encoder</label>
          </div>
          <div className="checkbox-label">
            <input
              type="radio"
              name="encoder_choice"
              value="binary"
              id="encoder-2"
            />
            <label htmlFor="encoder-2">Binary Encoder</label>
          </div>
          <div className="checkbox-label">
            <input
              type="radio"
              name="encoder_choice"
              value="label"
              id="encoder-3"
            />
            <label htmlFor="encoder-3">Label Encoder</label>
          </div>
        </div>

        <div className="category box2">
          <h2 className="heading" style={{ paddingTop: "3rem" }}>
            Imputers
          </h2>
          <div className="checkbox-label">
            <input
              type="radio"
              name="imputer_choice"
              value="mean"
              id="imputer-1"
            />
            <label htmlFor="imputer-1">Mean</label>
          </div>
          <div className="checkbox-label">
            <input
              type="radio"
              name="imputer_choice"
              value="median"
              id="imputer-2"
            />
            <label htmlFor="imputer-2">Median</label>
          </div>
          <div className="checkbox-label">
            <input
              type="radio"
              name="imputer_choice"
              value="most_freq"
              id="imputer-3"
            />
            <label htmlFor="imputer-3">Most Frequent</label>
          </div>
        </div>

        <div className="category box2" style={{ marginRight: "2rem" }}>
          <h2 className="heading" style={{ paddingTop: "3rem" }}>
            Scaler
          </h2>
          <div className="checkbox-label">
            <input
              type="radio"
              name="scaler_choice"
              value="min_max"
              id="scaler-1"
            />
            <label htmlFor="scaler-1">Min_Max Scaler</label>
          </div>
          <div className="checkbox-label">
            <input
              type="radio"
              name="scaler_choice"
              value="standard"
              id="scaler-2"
            />
            <label htmlFor="scaler-2">Standard Scaler</label>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor:'#89cff3', height:'5rem'}}>
        <button className="upload-button" >Apply Preprocessing</button>
      </div>
      <div style={{backgroundColor:'#89cff3',height:'2rem'}}>
        Copyright © group7 LY ISA2
      </div>
    </div>
  );
};
