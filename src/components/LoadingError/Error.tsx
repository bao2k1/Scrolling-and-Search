import React from "react";
import { MessageProps, defaultMessage } from "./LoadingTypes";
import { getMergedProps } from "../../ultils/propsUtil";

const Message:React.FC<MessageProps> = (props) => {
    const allProps = getMergedProps(defaultMessage, props);
    return (
        <div
        className={`alert ${allProps.variant}`}
        >
            {allProps.children}
        </div>
    );
}

export default Message;