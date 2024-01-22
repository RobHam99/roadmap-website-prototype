import { LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon} from '@radix-ui/react-icons';

export default function SideBar() {
    return (
        <div className="sidebar">
            <LinkedInLogoIcon color="#A0D2EB"/>
            <GitHubLogoIcon color="#A0D2EB"/>
            <InstagramLogoIcon color="#A0D2EB"/>
        </div>
    );
}