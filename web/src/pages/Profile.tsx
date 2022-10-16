import Header from "../components/Header";
import ProfileInfos from "../components/ProfileInfos";
import ProfileMenu from "../components/ProfileMenu";
import Body from "../components/Store/Body";

function Profile() {
    return(
        <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
            <Header />
            <ProfileInfos />

            <div>
                <ProfileMenu />
                <Body />
            </div>
        </div>
    )
}

export default Profile;
