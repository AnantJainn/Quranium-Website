export interface HeroData {
  first_name: string;
  last_name: string;
  tag_line: string;
}

export interface HomeData {
  hero: HeroData;
  meta_title: string;
  meta_description: string;
  meta_image: {
    url: string;
    alt: string;
  };
} 