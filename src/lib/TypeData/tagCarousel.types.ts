export interface Tag {
  id: number;
  name: string;
  color: string;
}

export interface TagCarouselProps {
  tags: Tag[];
}
