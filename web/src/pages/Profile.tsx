import Header from "../components/Header";
import ProfileInfos from "../components/ProfileInfos";
import ProfileMenu from "../components/ProfileMenu";
import BodyProfile from "../components/BodyProfile";

function Profile() {
    return(
        <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-16 py-8">
            <Header />
            <ProfileInfos />
            
            <div>
                <ProfileMenu />

                <div className="bg-zinc-400/20 mt-5 px-[80px] rounded-lg">
                    <BodyProfile />
                </div>
            </div>
        </div>
    )
}

export default Profile;
