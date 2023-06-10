export interface PodcastProps {
  type_of: string;
  id: number;
  path: string;
  image_url: string;
  title: string;
  podcast: Podcast[];
}

export interface Podcast {
  title: string;
  slug: string;
  image_url: string;
}
