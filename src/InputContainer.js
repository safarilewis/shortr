import { useState } from "react";

const InputContainer = ({ setInputValue }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }
    return (
        <div className='inputContainer'>
            <h1>Shortr</h1>
            <section className="inputText"><h2>Free URL shortener</h2>
                <div className="inputBox">
                    <input
                        type="text"
                        placeholder="Enter link here"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={handleClick}>Shorten</button>
                </div>
            </section>
        </div>
    )
}
export default InputContainer;
