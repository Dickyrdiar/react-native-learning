export interface ParsingProps {
  title: string;
  time: any;
  tags: propsTags[];
  user: userProfile[];
  chidren: string;
  tag_list: string[];
  cover_image: string;
}

interface propsTags {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
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
