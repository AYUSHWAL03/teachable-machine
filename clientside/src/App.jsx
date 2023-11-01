// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FileInput } from './components/fileInput'
import {Title} from './components/Title'
import{UploadDataset} from './components/UploadDataset'
import { ModelTest } from './components/ModelTest'
import { Preprocessing } from './components/Preprocessing'


// function Layout() {
//   return (
//    <>
//     <Title/>
//     <UploadDataset/>
//     <ModelTest/>
//     <FileInput/>
//    </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Layout} />
//       </Switch>
//     </Router>
//   );
// }

function App() {
  return (
    <>
    <Title/>
  <UploadDataset/>
   <ModelTest/>
    <FileInput/>
    <Preprocessing/>
    </>
  );
}
export default App;



