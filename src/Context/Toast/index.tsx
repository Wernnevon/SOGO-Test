/* eslint-disable react-hooks/exhaustive-deps */
import './styles.css';
import { useCallback, useContext, useState, createContext, ReactNode } from "react";

interface ToastProps{
    children: ReactNode;
}

const ToastContext = createContext({} as Function) ;

export default ToastContext;

export function ToastContextProvider({ children }:ToastProps) {
  const [toasts, setToasts] = useState<string[]>([]);
  const [toastType, setToastType] = useState<string>('')

  const addToast = useCallback(
    function (toast:string, type: string = 'warning') {
      setToasts([...toasts, toast]);
      setTimeout(() => setToasts((toasts:any) => toasts.slice(1)), 3000);
      setToastType(type);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="toasts-wrapper">
        {toasts.map((toast) => (
          <div className={`toast ${toastType}`} key={toast}>
            {toast}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);
