import './styles.css';

const Input = ({styles,labelColor,text,desc,value}) => {
	return (
		<div className="Input">
			<pre>{desc}</pre>
			<label style={labelColor}>Label</label>
			<input style={styles} type="text" placeholder="Placeholder" value={value}/>
			<span style={labelColor}>{text}</span>
		</div>
	)
}


export default Input;
