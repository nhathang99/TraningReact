import logo from './logo.svg';
import './App.css';
import DemoFunctionComponents from './Components/DemoFunctionComponents';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';

function App() {
  console.log('started')
  return (
    <div className="App">
      console.log('started')
      {/* <DemoFunctionComponents></DemoFunctionComponents>
      <DemoReactClassComponent></DemoReactClassComponent> */}
      {/* <BaiTapLayout>  </BaiTapLayout> */}
      <DataBinding/>
    </div>
  );
}

export default App;
