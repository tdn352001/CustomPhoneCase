export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type BaseQueryParams<T extends string | number = string> = {
  limit?: number;
  offset?: number;
  sort?: T;
  order?: SortOrder;
};

export type UnsplashImage = {
  id: string;
  url: string;
  description: string;
  width: number;
  height: number;
  user: {
    name: string;
    url: string;
  };
};

export type StickerGroup = {
  sourGroupID: number;
  sourGroupName: string;
  sourGroupSrc: string;
  showOrder: number;
  status: number;
};

export type StickerItem = {
  sourItemID: number;
  sourGroupID: number;
  sourItemSrc: string;
  showOrder: number;
  status: number;
  sourGroupName: string;
};
