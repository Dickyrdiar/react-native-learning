export interface VideoProps {
  type_of: string;
  id: number;
  path: string;
  cloudinary_video_url: string;
  title: string;
  user_id: number;
  video_duration_in_minutes: string;
  video_source_url: string;
  user: User;
}

export interface User {
  name: string;
}
