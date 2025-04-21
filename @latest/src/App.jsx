import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Top from "./topbar.jsx";
import Filter from "./filterbar.jsx";
import Extension from "./extension.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Top />
      <Filter />
      <Extension
        image="./logo-devlens.svg"
        title="DevLens"
        text="Quickly inspect page layouts and visualize element boundaries."
      />
      <Extension
        image="./logo-json-wizard.svg"
        title="JSONWizard"
        text="Formats, validates, and prettifies JSON responses in-browser"
      />
      <Extension
        image="./logo-markup-notes.svg"
        title="Markup Notes"
        text=" Enables annotation and notes directly onto webpages for collaborative debugging. "
      />
      <Extension
        image="./logo-link-checker.svg"
        title="LinkChecker"
        text=" Scans and highlights broken links on any page. "
      />
      <Extension
        image="./logo-style-spy.svg"
        title="StyleSpy"
        text=" Instantly analyze and copy CSS from any webpage element. "
      />
      <Extension
        image="./logo-tab-master-pro.svg"
        title="TabMaster Pro"
        text=" Organizes browser tabs into groups and sessions. "
      />
      <Extension
        image="./logo-grid-guides.svg"
        title="GridGuides"
        text=" Overlay customizable grids and alignment guides on any webpage. "
      />
      <Extension
        image="./logo-dom-snapshot.svg"
        title=" DOM Snapshot"
        text=" Capture and export DOM structures quickly. "
      />
      <Extension
        image="./logo-speed-boost.svg"
        title=" SpeedBoost"
        text="Optimizes browser resource usage to accelerate page loading. "
      />
      <Extension
        image="./logo-viewport-buddy.svg"
        title=" Viewport Buddy"
        text="Simulates various screen resolutions directly within the browser.. "
      />
      <Extension
        image="./logo-palette-picker.svg"
        title=" Palette Picker"
        text="Instantly extracts color palettes from any webpage. "
      />
      <Extension
        image="./logo-Console-plus.svg"
        title=" ConsolePlus"
        text="Enhanced developer console with advanced filtering and logging. "
      />
    </div>
  );
}
