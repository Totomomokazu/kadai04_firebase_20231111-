import './App.css';
import Sidebar from "./components/sidebar/Sidebar.js"
import Timeline from './components/timeline/Timeline.js';
import Widgets from './components/widget/Widgets.js';

function App() {
  return (
    <div className="app">
      {/* {sidebarを作成} */}
      <Sidebar></Sidebar>

      {/* {Timelineを作成} */}
      <Timeline></Timeline>

      {/* {Widgetを作成} */}
      <Widgets></Widgets>
    </div>
    
  );
}

export default App;
