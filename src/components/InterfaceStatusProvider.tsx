import { createContext, useContext, useReducer, type Dispatch } from "react"

export type ViewState =
    | { mode: "Listing" }
    | { mode: "Viewing"; apartmentId: string }
    | { mode: "Editing"; apartmentId: string }

export type InterfaceAction =
    | { type: "list_apt" }
    | { type: "view_apt"; selectedApartment: string }
    | { type: "edit_apt"; selectedApartment?: string }

const InterfaceContext = createContext<ViewState>({ mode: "Listing" })
const InterfaceDispatch = createContext<Dispatch<InterfaceAction> | null>(null)

export function useInterface() {
    return useContext(InterfaceContext)
}

export function useInterfaceDispatch() {
    return useContext(InterfaceDispatch)
}

export default function InterfaceStatusProvider({ children }: { children: React.ReactNode }) {
    const [viewState, dispatch] = useReducer(interfaceStatusReducer, { mode: "Listing" })

    return (
        <InterfaceContext.Provider value={viewState}>
            <InterfaceDispatch.Provider value={dispatch}>
                {children}
            </InterfaceDispatch.Provider>
        </InterfaceContext.Provider>
    )
}

function interfaceStatusReducer(state: ViewState, action: InterfaceAction): ViewState {
    switch (action.type) {
        case "view_apt":
            return {
                mode: "Viewing",
                apartmentId: action.selectedApartment
            }
        case "edit_apt":
            if (action.selectedApartment) {
                return {
                    mode: "Editing",
                    apartmentId: action.selectedApartment
                }
            }
            if (state.mode === "Viewing" || state.mode === "Editing") {
                return {
                    mode: "Editing",
                    apartmentId: state.apartmentId
                }
            }
            console.warn("Cannot edit apartment: no apartment selected")
            return { mode: "Listing" }
        case "list_apt":
            return { mode: "Listing" }
        default:
            return state
    }
}