import React from 'react';
import {RadioGroup, RadioButton} from 'react-radio-buttons';

function MyRadioButton() {
    return (
        <div>
           <RadioGroup horizontal>
                <RadioButton value="dataX">
                    dataX
                </RadioButton>
                <RadioButton value="dataY">
                    dataY
                </RadioButton>
                <RadioButton value="dataZ">
                    dataZ
                </RadioButton> 
            </RadioGroup>

        </div>
    );
}

export default MyRadioButton;