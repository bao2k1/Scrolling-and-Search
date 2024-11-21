import { getMergedProps } from "../../ultils/propsUtil";
import { defaultInput, InputProp } from "./InputTypes";
import { StyledInput } from "./StyledInput";


const Input:React.FC<Partial<InputProp>> = (props) => {
    const allProps = getMergedProps(defaultInput,props)
    return (
        <StyledInput 
            {...allProps}
        />
    )
}

export default Input;