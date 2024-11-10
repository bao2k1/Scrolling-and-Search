import { toast, ToastContainer } from "react-toastify"

const Toast: React.FC = () => {
    return (
        <div>
            <ToastContainer
             position="top-right"
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
            />
        </div>
    )
}

export default Toast;