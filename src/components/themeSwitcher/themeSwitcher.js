import './themeSwitcher.css';

function ThemSwitcher(props) {
  const { img, callback } = props;
  return (
    <button className="theme_switcher" onClick={callback}>
      <img className="theme_switcher__img" src={img} alt="*"></img>
    </button>
  );
}

export default ThemSwitcher;
