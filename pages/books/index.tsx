import MainLayout from "@/components/MainLayout"
import SideBar from '../../components/SideBar'
import SearchBar from '../../components/SearchBar'
export default function Books() {
    return (
        <MainLayout title="Books | Library">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SideBar />
                <SearchBar />
            </div>
        </MainLayout >
    )
}