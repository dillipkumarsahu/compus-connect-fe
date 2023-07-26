import { useEffect, useState } from "react";
import DesktopMainLayout from "../components/Layout/DesktopMainLayout";
import PostCard from "../components/feeds/PostCard";
import PostCardLoader from "../components/feeds/PostCardLoader";
import PostFilter from "../components/feeds/PostFilter";

const UserPage = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000)
    }, [])

    return (
        <DesktopMainLayout>
            <PostFilter />
            {
                loader ?
                    (
                        <>
                            <PostCardLoader />
                            <PostCardLoader />
                        </>
                    ) : (
                        <>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </>
                    )
            }
        </DesktopMainLayout>
    )
}
export default UserPage;