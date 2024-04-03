import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/recentpost";

export default function AllPosts(){
    return(
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <Post
            title="Nama : "
            body="Fitria Meliyana"
            />
            <Post
            title="NIM : "
            body="2341727002"
            />
            <RecentPosts />
        </Section2>
    );
}