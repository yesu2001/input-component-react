import './styles.css';

const Navbar = () => {
	return (
		<div className="Navbar">
			<strong><span>Dev</span>challenges.io</strong>
			<ul>
				<li>Colors</li>
				<li>Typography</li>
				<li>Spaces</li>
				<li>Buttons</li>
				<li className="active">Inputs</li>
				<li>Grid</li>
			</ul>
		</div>
	)
}

export default Navbar;