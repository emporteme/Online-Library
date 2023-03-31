import MainLayout from "@/components/MainLayout"
import SideBar from '../../components/SideBar'
import SearchBar from '../../components/SearchBar'
export default function Books() {
    return (
        <MainLayout title="Books | Library">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{ border: 'solid pink', borderRadius: '2rem', width: '25%' }}> <SideBar /> </div>
                <div style={{ border: 'solid pink', borderRadius: '2rem', width: '70%' }}> <SearchBar /> </div>
            </div>
        </MainLayout >
    )
}