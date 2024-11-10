import { LoadingProps, SnipperWrapper, Spinner } from "./LoadingTypes";


const Loading:React.FC<LoadingProps> = ({ size, color }) => {
    return (
        <SnipperWrapper>
            <Spinner size={size} color={color} role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </SnipperWrapper>
    );
}

export default Loading;