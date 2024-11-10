import { getMergedProps } from "../../ultils/propsUtil";
import { defaultInput, InputProp } from "./InputStyles";
import { StyledInput } from "./InputType";


const Input:React.FC<Partial<InputProp>> = (props) => {
    const allProps = getMergedProps(defaultInput,props)
    return (
        <StyledInput 
            {...allProps}
        />
    )
}

export default Input;