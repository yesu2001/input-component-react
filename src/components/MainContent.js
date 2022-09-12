import Input from './Input';
import './styles.css';

const MainContent = () => {

	const default_desc = `<Input />`;
	const input_hover = `&:hover`;
	const input_focus = `&:focus`;
	const inputError = `<Input error/>`;
	const inputDis = `<Input disabled />`;
	const input_helpText = `<Input helperText="Some interesting text" />`
	const input_helpText_error = `<Input helperText="Some interesting text" error />`
	const inputSmall = `<Input size="sm" />`;
	const inputLarge = `<Input size="lg" />`;
	const inputFullWidth = `<Input fullwidth />`;
	const inputMultiLine = `<Input multiline row="4"/>`
	const inputValue = `<Input value="text"/>`
	const inputText = "text"

	var some_text = 'Some interesting Text';
	const default_input = {
		width: "200px",
		height: "56px",
		border: "1px solid #828282",
		borderRadius: "8px",
		paddingLeft: "10px",
	}

	const default_input_hover = {
		border: "1px solid #333333"
	}

	const default_input_focus = {
		border: "1px solid #2962FF",
	}

	const label_blue = {
		color: "#2962ff",
	}

	const label_red = {
		color: "#D32F2F",
	}

	const input_error = {
		border: "1px solid #D32F2F",
	}

	const input_disabled = {
		background: "#F2F2F2",
		border: "1px solid #E0E0E0",
	}

	const input_fullwidth = {
		width: "100%",
		border: "1px solid #828282",
	}

	const input_multi_rows = {
		padding: "0",
		height: "200px",
		wordBreak: "break-all",
	}

	const input_sm = {
		height: "45px",
	}

	const input_lg = {
		height: "60px",
	}
	return (
		<div className="MainContent">
			<h2>Inputs</h2>
			<div>
				<Input styles={default_input} desc={default_desc}/>
				<Input styles={default_input_hover,default_input} desc={input_hover}/>
				<Input styles={default_input_focus} labelColor={label_blue} desc={input_focus}/>
			</div>
			<div>
				<Input styles={input_error} labelColor={label_red} desc={inputError}/>
				<Input styles={default_input} desc={input_hover}/>
				<Input styles={input_error} labelColor={label_red} desc={input_focus}/>
			</div>
			<div>
				<Input styles={input_disabled} desc={inputDis}/>
			</div>
			<div>
				<Input styles={input_disabled} text={some_text} desc={input_helpText}/>
				<Input styles={input_disabled} labelColor={label_red} text={some_text} desc={input_helpText_error}/>
			</div>
			<div>
				<Input styles={input_disabled} desc={inputValue} value={inputText}/>
			</div>
			<div>
				<Input styles={input_sm} desc={inputSmall}/>
				<Input styles={input_lg} desc={inputLarge}/>
			</div>
			<Input styles={input_fullwidth} desc={inputFullWidth}/>
			<Input styles={input_multi_rows} desc={inputMultiLine}/>

		</div>
	)
}

export default MainContent;