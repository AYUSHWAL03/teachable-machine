import "./styles.css"
// import { Link } from "react-router-dom";
export const ModelTest = () => {
  return (
    <div className="model">
      <div className="box">
         {/* <Link to='/preprocessing'>  */}
         <h1>Preprocessing</h1>
         <p>Clean Your Dataset</p>
         {/* </Link> */}
       
      </div>
      <div className="box">
        <h1>
            Train your Model
        </h1>
        <p>Discover Patterns, Trends and experiment with ML Algorithms</p>
      </div>
    </div>
  );
};
