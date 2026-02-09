import { createContext, useContext, useReducer } from "react";

export type InterfaceMode = "Listing" | "Viewing" | "Editing"

interface InterfaceStatus {
    mode: InterfaceMode
    selectedApartment?: string
}

type InterfaceAction = { type: string; selectedApartment?: string }

const InterfaceContext = createContext<InterfaceStatus>({ mode: "Listing" })
const InterfaceDispatch = createContext<React.Dispatch<any> | null>(null)

export function useInterface() {
  return useContext(InterfaceContext);
}

export function useInterfaceDispatch() {
  return useContext(InterfaceDispatch);
}

export default function InterfaceStatusProvider({ children }: {children: any}) {
    const [interfaceStatus, dispatch] = useReducer<InterfaceStatus, any>(interfaceStatusReducer, {mode: "Listing"})

    return (
        <InterfaceContext value={interfaceStatus}>
            <InterfaceDispatch value={dispatch}>{children}</InterfaceDispatch>
        </InterfaceContext>
    )
}

function interfaceStatusReducer (interfaceStatus: InterfaceStatus, action: InterfaceAction): InterfaceStatus {
    switch (action.type) {
    case "view_apt":
      return {
        ...interfaceStatus,
        mode: "Viewing",
        selectedApartment: action.selectedApartment
      };
    case "edit_apt":
      return {
        ...interfaceStatus,
        mode: "Editing",
        selectedApartment: action.selectedApartment
      };
    case "list_apt":
      return {
        ...interfaceStatus,
        mode: "Listing",
        selectedApartment: undefined
      };
    default: 
      throw Error("Unknown action: " + action.type);
    }
}