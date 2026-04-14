import { IconHomePlus } from "@tabler/icons-react"
import type { Apartment } from "../../shared/model/Apartment"
import ApartmentCard from "../components/ApartmentListItem" 
import { IconButton } from "../../shared/components/buttons/Button"
import ListViewHeaderBar from "../../shared/components/containers/ListViewHeaderBar"
import ListViewContainer from "../../shared/components/containers/ListViewContainer"
import ListViewCardGrid from "../../shared/components/containers/ListViewCardGrid"

export default function ApartmentListPage({ apartments, onView, onCreate }: { apartments: Apartment[],  onView: (id?: string) => void, onCreate: () => void }) {
    return (
        <ListViewContainer>
            <ListViewHeaderBar title={"Apartments"} detail={`${apartments.length} found`}>
                <IconButton icon={IconHomePlus} size={24} onClick={onCreate}></IconButton>
            </ListViewHeaderBar>
            <ListViewCardGrid card={ApartmentCard} list={apartments} onView={onView}/>
        </ListViewContainer>
    )
}


