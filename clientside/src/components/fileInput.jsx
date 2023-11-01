export const FileInput = () => {
  return (
    <>
      <div className="main">
        <div className="data">
          <h1 style={{ margin: 20}}>Start Analyzing </h1>
          <p>
            <h2>
              Dive deeper into the world of ocean data and unlock the mysteries
              of the deep blue.Begin your data analysis journey with us today!
            </h2>
          </p>
          <div className="file-input-container" style={{ position: 'relative', marginTop: '20px'  }}>
            <input
              className="chooseFile"
              type="file"
              name="inputcsvfile"
              accept=".csv"
              style={{ position: 'absolute', top: 0, left: 0, opacity: 0 }}
            />
            <label htmlFor="chooseFile" className="upload-button" style={{ padding: 10}}>
              Upload Dataset
            </label><br />
            <button style={{ marginTop:30}}>
            <label htmlFor="chooseFile" className="upload-button" style={{ marginTop:25, padding:10}}>
              Generate Dataset Summary
            </label>
            </button>
            
            
          </div>
        </div>
      </div>
    </>
  );
};
