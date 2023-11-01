import "./styles.css"

export const Preprocessing = () => {
  return (
        <div className="preprocess-component">
        <h1 className="heading-1">Preprocess your Data</h1>

        <div className="category-container">
        <div className="category box2" style={{marginLeft:"2rem"}}>
            <h2 className="heading" style={{paddingTop:"3rem"}}>Encoder</h2>
            <div className="checkbox-label">
            <input type="checkbox" id="encoder-1" />
            <label htmlFor="encoder-1">One Hot Encoder</label>
            </div>
            <div className="checkbox-label">
            <input type="checkbox" id="encoder-2" />
            <label htmlFor="encoder-2">Binary Encoder</label>
            </div>
            <div className="checkbox-label">
            <input type="checkbox" id="encoder-3" />
            <label htmlFor="encoder-3">Label Encoder</label>
            </div>
        </div>

        <div className="category box2">
            <h2 className="heading" style={{paddingTop:"3rem"}}>Imputers</h2>
            <div className="checkbox-label">
            <input type="checkbox" id="imputer-1" />
            <label htmlFor="imputer-1">Mean</label>
            </div>
            <div className="checkbox-label">
            <input type="checkbox" id="imputer-2" />
            <label htmlFor="imputer-2">Median</label>
            </div>
            <div className="checkbox-label">
            <input type="checkbox" id="imputer-3" />
            <label htmlFor="imputer-3">Most Frequent</label>
            </div>
        </div>

        <div className="category box2" style={{marginRight:"2rem"}}>
            <h2 className="heading" style={{paddingTop:"3rem"}}>Scaler</h2>
            <div className="checkbox-label">
            <input type="checkbox" id="scaler-1" />
            <label htmlFor="scaler-1">Min_Max Scaler</label>
            </div>
            <div className="checkbox-label">
            <input type="checkbox" id="scaler-2" />
            <label htmlFor="scaler-2">Standard Scaler</label>
            </div>
          
        </div>
        <div>
        <button type="submit" className="upload-button">
            Apply Preprocessing
          </button>
        
      </div>
        </div>
    </div>
  )
}


