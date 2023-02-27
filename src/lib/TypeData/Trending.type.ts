export interface TrendingProps {
  title: string;
  time: any;
  user: userProfile[];
}

interface userProfile {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: null | string;
  profile_image: string;
  profile_image_90: string;
}
