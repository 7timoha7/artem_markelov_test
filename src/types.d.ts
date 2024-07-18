export interface ProductType {
  id: number;
  barcodeValue: string;
  title: string;
  description: string;
  deleted: boolean;
  sellingPrice: number;
  slug: string;
  archived: boolean;
  createdAt: string;
  mute: boolean;
  discountedPrice: number;
  cost: number;
  tags: string[];
  characteristic: string[];
  category: {
    id: number;
    name: string;
    slug: string;
    icon: string;
    icon1: string;
    isActive: boolean;
    prioritization: number;
    inTrend: boolean;
    lft: number;
    rght: number;
    treeId: number;
    level: number;
    parent: {
      id: number;
      name: string;
      slug: string;
      icon: string;
      icon1: string;
      isActive: boolean;
      prioritization: number;
      inTrend: boolean;
      lft: number;
      rght: number;
      treeId: number;
      level: number;
    };
  };
  images: { id: number; url: string }[];
  sizes: { edges: { node: { id: number; name: string; value: string } }[] };
}