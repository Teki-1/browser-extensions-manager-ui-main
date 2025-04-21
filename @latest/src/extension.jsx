import "./styles.css";

export default function Extension(props) {
  return (
    <div className="box">
      <img className="logo" src={props.img} />
      <h2 className="heading">{props.title}</h2>
      <p>{props.text}.</p>
      <button className="extension-button">Remove</button>
      <div className="switch">
        <label className="toggle-switch">
          <input type="checkbox" />
          <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
