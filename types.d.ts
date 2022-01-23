import { Bounds, Coords } from "google-map-react";

export type Place = {
  location_id?: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews?: string;
  timezone?: string;
  location_string?: string;
  photo?: {
    images?: {
      small: {
        width: string;
        url: string;
        height: string;
      };
      thumbnail: {
        width: string;
        url: string;
        height: string;
      };
      original: {
        width: string;
        url: string;
        height: string;
      };
      large: {
        width: string;
        url: string;
        height: string;
      };
      medium: {
        width: string;
        url: string;
        height: string;
      };
    };
    is_blessed: boolean;
    uploaded_date: string;
    caption: string;
    id: string;
    helpful_votes: string;
    published_date: string;
    user: {
      user_id: string | null;
      member_id: string;
      type: string;
    };
  };
  awards?: {
    award_type: string;
    year: string;
    images: {
      small: string;
      large: string;
    };
    categories: string[];
    display_name: "Certificate of Excellence 2013";
  }[];
  preferred_map_engine?: string;
  autobroaden_type?: string;
  autobroaden_label?: string;
  raw_ranking?: string;
  ranking_geo?: string;
  ranking_geo_id?: string;
  ranking_position?: string;
  ranking_denominator?: string;
  ranking_category?: string;
  ranking?: string;
  subcategory_type?: string;
  subcategory_type_label?: string;
  distance?: string;
  distance_string?: string | null;
  bearing?: string;
  rating?: string;
  is_closed?: boolean;
  is_long_closed?: boolean;
  price_level?: string;
  price?: string;
  hotel_class: string;
  business_listings: {
    desktop_contacts: string[];
    mobile_contacts: string[];
  };
  special_offers?: {
    desktop: string[];
    mobile: string[];
  };
  listing_key?: string;
  web_url?: string;
};

export type SearchState = {
  places: Place[];
  coordinates?: Coords;
  bounds?: Bounds;
  zoom: number;
  selectedPlace?: string;
  hoveredPlace?: string;
  googleMapsLoaded: boolean;
};
