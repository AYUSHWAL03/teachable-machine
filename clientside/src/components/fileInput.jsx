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
          <div className="file-input-container">
            {/* <input
              className="chooseFile"
              type="file"
              name="inputcsvfile"
              accept=".csv"
            /> */}
            <label htmlFor="chooseFile" className="upload-button" style={{ padding: 10}}>
              Upload Dataset
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
