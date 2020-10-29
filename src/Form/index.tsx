import React, { useState } from 'react';
import { HiSelector, HiSearch } from "react-icons/hi";

import './styles.css';

interface DateInputContainerProps {
    labelText: string;
}

interface SelectOrWriteProps {
    labelText: string;
    options: Array<string>;
    handleSelectedOption(value: string): void;
}

function SelectOrWrite({ labelText, options, handleSelectedOption }: SelectOrWriteProps) {
    const [showOptions, setShowOptions] = useState(false);

    return(
        <div className="container-select">
            <div className="select-write-container">
                <label htmlFor={labelText}>{labelText}</label>
                <div className="select-write-input">
                    <input
                        className="select-write-text-input"
                        id={labelText}
                        type="text"
                        placeholder="escreva ou selecione"
                    />

                    <HiSelector 
                        className="select-icon-button"
                        size={24}
                        onClick={() => { setShowOptions(!showOptions) }}
                    />
                </div>
            </div>
            <div
                className="options-display"
                hidden={!showOptions}
            >
                {options.map(option => {
                    return(
                        <option
                            key={option}
                            className="option"
                            onClick={() => {
                                handleSelectedOption(option);
                                setShowOptions(!showOptions);
                            }}
                        >
                            {option}
                        </option>
                    );
                })}
            </div>
        </div>
    );
}

function DateInputContainer({ labelText }: DateInputContainerProps) {
    return(
        <div className="date-input-container">
            <label htmlFor={labelText}>{labelText}</label>
            <input className="date-input" type="date" id={labelText} />
        </div>
    );
}

function Form() {
    function handleSelectedOption(value: string) {
        console.log(value);
    }

    return(
        <div className="container">
            <div className="content">
                <h1>Procure por um ou mais lotes</h1>

                <form className="form-container">
                    <div className="select-date-container">
                        <DateInputContainer labelText="De" />
                        <DateInputContainer labelText="Até" />
                    </div>

                    <div className="select-write-inputs" >
                        <SelectOrWrite
                            labelText="Estufa"
                            options={[ "Estufa 1", "Estufa 2" ]}
                            handleSelectedOption={handleSelectedOption}
                        />

                        <SelectOrWrite
                            labelText="Hostaliça"
                            options={[ "Hostaliça 1", "Hostaliça 2" ]}
                            handleSelectedOption={handleSelectedOption}
                        />
                    </div>

                    <button type="submit" className="submit-form-button">
                        <span>realizar pesquisa</span>
                        <HiSearch size={20} color="#000" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;