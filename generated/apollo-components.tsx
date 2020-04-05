export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
  Long: any;
};

export type Query = {
  __typename?: "Query";
  assets: Array<Maybe<Asset>>;
  snippets: Array<Maybe<Snippet>>;
  userLikes: Array<Maybe<UserLike>>;
  asset?: Maybe<Asset>;
  snippet?: Maybe<Snippet>;
  userLike?: Maybe<UserLike>;
  assetsConnection: AssetConnection;
  snippetsConnection: SnippetConnection;
  userLikesConnection: UserLikeConnection;
  node?: Maybe<Node>;
};

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QuerySnippetsArgs = {
  where?: Maybe<SnippetWhereInput>;
  orderBy?: Maybe<SnippetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type QuerySnippetArgs = {
  where: SnippetWhereUniqueInput;
};

export type QueryUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
};

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QuerySnippetsConnectionArgs = {
  where?: Maybe<SnippetWhereInput>;
  orderBy?: Maybe<SnippetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserLikesConnectionArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type AssetWhereInput = {
  _search?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<AssetWhereInput>>;
  OR?: Maybe<Array<AssetWhereInput>>;
  NOT?: Maybe<Array<AssetWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  handle?: Maybe<Scalars["String"]>;
  handle_not?: Maybe<Scalars["String"]>;
  handle_in?: Maybe<Array<Scalars["String"]>>;
  handle_not_in?: Maybe<Array<Scalars["String"]>>;
  handle_lt?: Maybe<Scalars["String"]>;
  handle_lte?: Maybe<Scalars["String"]>;
  handle_gt?: Maybe<Scalars["String"]>;
  handle_gte?: Maybe<Scalars["String"]>;
  handle_contains?: Maybe<Scalars["String"]>;
  handle_not_contains?: Maybe<Scalars["String"]>;
  handle_starts_with?: Maybe<Scalars["String"]>;
  handle_not_starts_with?: Maybe<Scalars["String"]>;
  handle_ends_with?: Maybe<Scalars["String"]>;
  handle_not_ends_with?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  fileName_not?: Maybe<Scalars["String"]>;
  fileName_in?: Maybe<Array<Scalars["String"]>>;
  fileName_not_in?: Maybe<Array<Scalars["String"]>>;
  fileName_lt?: Maybe<Scalars["String"]>;
  fileName_lte?: Maybe<Scalars["String"]>;
  fileName_gt?: Maybe<Scalars["String"]>;
  fileName_gte?: Maybe<Scalars["String"]>;
  fileName_contains?: Maybe<Scalars["String"]>;
  fileName_not_contains?: Maybe<Scalars["String"]>;
  fileName_starts_with?: Maybe<Scalars["String"]>;
  fileName_not_starts_with?: Maybe<Scalars["String"]>;
  fileName_ends_with?: Maybe<Scalars["String"]>;
  fileName_not_ends_with?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  height_not?: Maybe<Scalars["Float"]>;
  height_in?: Maybe<Array<Scalars["Float"]>>;
  height_not_in?: Maybe<Array<Scalars["Float"]>>;
  height_lt?: Maybe<Scalars["Float"]>;
  height_lte?: Maybe<Scalars["Float"]>;
  height_gt?: Maybe<Scalars["Float"]>;
  height_gte?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  width_not?: Maybe<Scalars["Float"]>;
  width_in?: Maybe<Array<Scalars["Float"]>>;
  width_not_in?: Maybe<Array<Scalars["Float"]>>;
  width_lt?: Maybe<Scalars["Float"]>;
  width_lte?: Maybe<Scalars["Float"]>;
  width_gt?: Maybe<Scalars["Float"]>;
  width_gte?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  size_not?: Maybe<Scalars["Float"]>;
  size_in?: Maybe<Array<Scalars["Float"]>>;
  size_not_in?: Maybe<Array<Scalars["Float"]>>;
  size_lt?: Maybe<Scalars["Float"]>;
  size_lte?: Maybe<Scalars["Float"]>;
  size_gt?: Maybe<Scalars["Float"]>;
  size_gte?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  mimeType_not?: Maybe<Scalars["String"]>;
  mimeType_in?: Maybe<Array<Scalars["String"]>>;
  mimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  mimeType_lt?: Maybe<Scalars["String"]>;
  mimeType_lte?: Maybe<Scalars["String"]>;
  mimeType_gt?: Maybe<Scalars["String"]>;
  mimeType_gte?: Maybe<Scalars["String"]>;
  mimeType_contains?: Maybe<Scalars["String"]>;
  mimeType_not_contains?: Maybe<Scalars["String"]>;
  mimeType_starts_with?: Maybe<Scalars["String"]>;
  mimeType_not_starts_with?: Maybe<Scalars["String"]>;
  mimeType_ends_with?: Maybe<Scalars["String"]>;
  mimeType_not_ends_with?: Maybe<Scalars["String"]>;
  imagesSnippet_every?: Maybe<SnippetWhereInput>;
  imagesSnippet_some?: Maybe<SnippetWhereInput>;
  imagesSnippet_none?: Maybe<SnippetWhereInput>;
};

export enum Status {
  Draft = "DRAFT",
  Published = "PUBLISHED",
  Archived = "ARCHIVED",
}

export type SnippetWhereInput = {
  _search?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<SnippetWhereInput>>;
  OR?: Maybe<Array<SnippetWhereInput>>;
  NOT?: Maybe<Array<SnippetWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  author_not?: Maybe<Scalars["String"]>;
  author_in?: Maybe<Array<Scalars["String"]>>;
  author_not_in?: Maybe<Array<Scalars["String"]>>;
  author_lt?: Maybe<Scalars["String"]>;
  author_lte?: Maybe<Scalars["String"]>;
  author_gt?: Maybe<Scalars["String"]>;
  author_gte?: Maybe<Scalars["String"]>;
  author_contains?: Maybe<Scalars["String"]>;
  author_not_contains?: Maybe<Scalars["String"]>;
  author_starts_with?: Maybe<Scalars["String"]>;
  author_not_starts_with?: Maybe<Scalars["String"]>;
  author_ends_with?: Maybe<Scalars["String"]>;
  author_not_ends_with?: Maybe<Scalars["String"]>;
  images?: Maybe<AssetWhereInput>;
  userLikes_every?: Maybe<UserLikeWhereInput>;
  userLikes_some?: Maybe<UserLikeWhereInput>;
  userLikes_none?: Maybe<UserLikeWhereInput>;
};

export type UserLikeWhereInput = {
  _search?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<UserLikeWhereInput>>;
  OR?: Maybe<Array<UserLikeWhereInput>>;
  NOT?: Maybe<Array<UserLikeWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  user?: Maybe<Scalars["String"]>;
  user_not?: Maybe<Scalars["String"]>;
  user_in?: Maybe<Array<Scalars["String"]>>;
  user_not_in?: Maybe<Array<Scalars["String"]>>;
  user_lt?: Maybe<Scalars["String"]>;
  user_lte?: Maybe<Scalars["String"]>;
  user_gt?: Maybe<Scalars["String"]>;
  user_gte?: Maybe<Scalars["String"]>;
  user_contains?: Maybe<Scalars["String"]>;
  user_not_contains?: Maybe<Scalars["String"]>;
  user_starts_with?: Maybe<Scalars["String"]>;
  user_not_starts_with?: Maybe<Scalars["String"]>;
  user_ends_with?: Maybe<Scalars["String"]>;
  user_not_ends_with?: Maybe<Scalars["String"]>;
  snippet?: Maybe<SnippetWhereInput>;
};

export enum AssetOrderByInput {
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
}

export type Asset = Node & {
  __typename?: "Asset";
  status: Status;
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  imagesSnippet?: Maybe<Array<Snippet>>;
  url: Scalars["String"];
};

export type AssetImagesSnippetArgs = {
  where?: Maybe<SnippetWhereInput>;
  orderBy?: Maybe<SnippetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type Node = {
  id: Scalars["ID"];
};

export enum SnippetOrderByInput {
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  RecommendationsAsc = "recommendations_ASC",
  RecommendationsDesc = "recommendations_DESC",
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC",
}

export type Snippet = Node & {
  __typename?: "Snippet";
  status: Status;
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  images?: Maybe<Asset>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  userLikes?: Maybe<Array<UserLike>>;
};

export type SnippetUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export enum UserLikeOrderByInput {
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC",
}

export type UserLike = Node & {
  __typename?: "UserLike";
  status: Status;
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  user?: Maybe<Scalars["String"]>;
  snippet?: Maybe<Snippet>;
};

export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  validateOptions?: Maybe<Scalars["Boolean"]>;
};

export type ImageTransformationInput = {
  resize?: Maybe<ImageResizeInput>;
};

export type ImageResizeInput = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  fit?: Maybe<ImageFit>;
};

export enum ImageFit {
  Clip = "clip",
  Crop = "crop",
  Scale = "scale",
  Max = "max",
}

export type DocumentTransformationInput = {
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentOutputInput = {
  format?: Maybe<DocumentFileTypes>;
};

export enum DocumentFileTypes {
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Png = "png",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Docx = "docx",
  Html = "html",
  Pdf = "pdf",
  Doc = "doc",
  Xlsx = "xlsx",
  Xls = "xls",
  Pptx = "pptx",
  Ppt = "ppt",
}

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  handle?: Maybe<Scalars["String"]>;
};

export type SnippetWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type UserLikeWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type AssetConnection = {
  __typename?: "AssetConnection";
  pageInfo: PageInfo;
  edges: Array<Maybe<AssetEdge>>;
  aggregate: AggregateAsset;
};

export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type AssetEdge = {
  __typename?: "AssetEdge";
  node: Asset;
  cursor: Scalars["String"];
};

export type AggregateAsset = {
  __typename?: "AggregateAsset";
  count: Scalars["Int"];
};

export type SnippetConnection = {
  __typename?: "SnippetConnection";
  pageInfo: PageInfo;
  edges: Array<Maybe<SnippetEdge>>;
  aggregate: AggregateSnippet;
};

export type SnippetEdge = {
  __typename?: "SnippetEdge";
  node: Snippet;
  cursor: Scalars["String"];
};

export type AggregateSnippet = {
  __typename?: "AggregateSnippet";
  count: Scalars["Int"];
};

export type UserLikeConnection = {
  __typename?: "UserLikeConnection";
  pageInfo: PageInfo;
  edges: Array<Maybe<UserLikeEdge>>;
  aggregate: AggregateUserLike;
};

export type UserLikeEdge = {
  __typename?: "UserLikeEdge";
  node: UserLike;
  cursor: Scalars["String"];
};

export type AggregateUserLike = {
  __typename?: "AggregateUserLike";
  count: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  createAsset: Asset;
  uploadAsset: Asset;
  createSnippet: Snippet;
  createUserLike: UserLike;
  updateAsset?: Maybe<Asset>;
  updateSnippet?: Maybe<Snippet>;
  updateUserLike?: Maybe<UserLike>;
  deleteAsset?: Maybe<Asset>;
  deleteSnippet?: Maybe<Snippet>;
  deleteUserLike?: Maybe<UserLike>;
  upsertAsset: Asset;
  upsertSnippet: Snippet;
  upsertUserLike: UserLike;
  updateManyAssets: BatchPayload;
  updateManySnippets: BatchPayload;
  updateManyUserLikes: BatchPayload;
  deleteManyAssets: BatchPayload;
  deleteManySnippets: BatchPayload;
  deleteManyUserLikes: BatchPayload;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationUploadAssetArgs = {
  data: AssetUploadInput;
};

export type MutationCreateSnippetArgs = {
  data: SnippetCreateInput;
};

export type MutationCreateUserLikeArgs = {
  data: UserLikeCreateInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateSnippetArgs = {
  data: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};

export type MutationUpdateUserLikeArgs = {
  data: UserLikeUpdateInput;
  where: UserLikeWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteSnippetArgs = {
  where: SnippetWhereUniqueInput;
};

export type MutationDeleteUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  create: AssetCreateInput;
  update: AssetUpdateInput;
};

export type MutationUpsertSnippetArgs = {
  where: SnippetWhereUniqueInput;
  create: SnippetCreateInput;
  update: SnippetUpdateInput;
};

export type MutationUpsertUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  create: UserLikeCreateInput;
  update: UserLikeUpdateInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyMutationInput;
  where?: Maybe<AssetWhereInput>;
};

export type MutationUpdateManySnippetsArgs = {
  data: SnippetUpdateManyMutationInput;
  where?: Maybe<SnippetWhereInput>;
};

export type MutationUpdateManyUserLikesArgs = {
  data: UserLikeUpdateManyMutationInput;
  where?: Maybe<UserLikeWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
};

export type MutationDeleteManySnippetsArgs = {
  where?: Maybe<SnippetWhereInput>;
};

export type MutationDeleteManyUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
};

export type AssetCreateInput = {
  status?: Maybe<Status>;
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  imagesSnippet?: Maybe<SnippetCreateManyWithoutImagesInput>;
};

export type SnippetCreateManyWithoutImagesInput = {
  create?: Maybe<Array<SnippetCreateWithoutImagesInput>>;
  connect?: Maybe<Array<SnippetWhereUniqueInput>>;
};

export type SnippetCreateWithoutImagesInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  userLikes?: Maybe<UserLikeCreateManyWithoutSnippetInput>;
};

export type UserLikeCreateManyWithoutSnippetInput = {
  create?: Maybe<Array<UserLikeCreateWithoutSnippetInput>>;
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>;
};

export type UserLikeCreateWithoutSnippetInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars["String"]>;
};

export type AssetUploadInput = {
  url: Scalars["String"];
  status?: Maybe<Status>;
  imagesSnippet?: Maybe<SnippetCreateManyWithoutImagesInput>;
};

export type SnippetCreateInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  images?: Maybe<AssetCreateOneWithoutImagesSnippetInput>;
  userLikes?: Maybe<UserLikeCreateManyWithoutSnippetInput>;
};

export type AssetCreateOneWithoutImagesSnippetInput = {
  upload?: Maybe<AssetUploadWithoutImagesSnippetInput>;
  create?: Maybe<AssetCreateWithoutImagesSnippetInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
};

export type AssetUploadWithoutImagesSnippetInput = {
  url: Scalars["String"];
  status?: Maybe<Status>;
};

export type AssetCreateWithoutImagesSnippetInput = {
  status?: Maybe<Status>;
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type UserLikeCreateInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars["String"]>;
  snippet?: Maybe<SnippetCreateOneWithoutUserLikesInput>;
};

export type SnippetCreateOneWithoutUserLikesInput = {
  create?: Maybe<SnippetCreateWithoutUserLikesInput>;
  connect?: Maybe<SnippetWhereUniqueInput>;
};

export type SnippetCreateWithoutUserLikesInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  images?: Maybe<AssetCreateOneWithoutImagesSnippetInput>;
};

export type AssetUpdateInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  imagesSnippet?: Maybe<SnippetUpdateManyWithoutImagesInput>;
};

export type SnippetUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<SnippetCreateWithoutImagesInput>>;
  connect?: Maybe<Array<SnippetWhereUniqueInput>>;
  set?: Maybe<Array<SnippetWhereUniqueInput>>;
  disconnect?: Maybe<Array<SnippetWhereUniqueInput>>;
  delete?: Maybe<Array<SnippetWhereUniqueInput>>;
  update?: Maybe<Array<SnippetUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<SnippetUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SnippetScalarWhereInput>>;
  upsert?: Maybe<Array<SnippetUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type SnippetUpdateWithWhereUniqueWithoutImagesInput = {
  where: SnippetWhereUniqueInput;
  data: SnippetUpdateWithoutImagesDataInput;
};

export type SnippetUpdateWithoutImagesDataInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  userLikes?: Maybe<UserLikeUpdateManyWithoutSnippetInput>;
};

export type UserLikeUpdateManyWithoutSnippetInput = {
  create?: Maybe<Array<UserLikeCreateWithoutSnippetInput>>;
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>;
  set?: Maybe<Array<UserLikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserLikeWhereUniqueInput>>;
  delete?: Maybe<Array<UserLikeWhereUniqueInput>>;
  update?: Maybe<Array<UserLikeUpdateWithWhereUniqueWithoutSnippetInput>>;
  updateMany?: Maybe<Array<UserLikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserLikeScalarWhereInput>>;
  upsert?: Maybe<Array<UserLikeUpsertWithWhereUniqueWithoutSnippetInput>>;
};

export type UserLikeUpdateWithWhereUniqueWithoutSnippetInput = {
  where: UserLikeWhereUniqueInput;
  data: UserLikeUpdateWithoutSnippetDataInput;
};

export type UserLikeUpdateWithoutSnippetDataInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars["String"]>;
};

export type UserLikeUpdateManyWithWhereNestedInput = {
  where: UserLikeScalarWhereInput;
  data: UserLikeUpdateManyDataInput;
};

export type UserLikeScalarWhereInput = {
  _search?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<UserLikeScalarWhereInput>>;
  OR?: Maybe<Array<UserLikeScalarWhereInput>>;
  NOT?: Maybe<Array<UserLikeScalarWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  user?: Maybe<Scalars["String"]>;
  user_not?: Maybe<Scalars["String"]>;
  user_in?: Maybe<Array<Scalars["String"]>>;
  user_not_in?: Maybe<Array<Scalars["String"]>>;
  user_lt?: Maybe<Scalars["String"]>;
  user_lte?: Maybe<Scalars["String"]>;
  user_gt?: Maybe<Scalars["String"]>;
  user_gte?: Maybe<Scalars["String"]>;
  user_contains?: Maybe<Scalars["String"]>;
  user_not_contains?: Maybe<Scalars["String"]>;
  user_starts_with?: Maybe<Scalars["String"]>;
  user_not_starts_with?: Maybe<Scalars["String"]>;
  user_ends_with?: Maybe<Scalars["String"]>;
  user_not_ends_with?: Maybe<Scalars["String"]>;
};

export type UserLikeUpdateManyDataInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars["String"]>;
};

export type UserLikeUpsertWithWhereUniqueWithoutSnippetInput = {
  where: UserLikeWhereUniqueInput;
  update: UserLikeUpdateWithoutSnippetDataInput;
  create: UserLikeCreateWithoutSnippetInput;
};

export type SnippetUpdateManyWithWhereNestedInput = {
  where: SnippetScalarWhereInput;
  data: SnippetUpdateManyDataInput;
};

export type SnippetScalarWhereInput = {
  _search?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<SnippetScalarWhereInput>>;
  OR?: Maybe<Array<SnippetScalarWhereInput>>;
  NOT?: Maybe<Array<SnippetScalarWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  author_not?: Maybe<Scalars["String"]>;
  author_in?: Maybe<Array<Scalars["String"]>>;
  author_not_in?: Maybe<Array<Scalars["String"]>>;
  author_lt?: Maybe<Scalars["String"]>;
  author_lte?: Maybe<Scalars["String"]>;
  author_gt?: Maybe<Scalars["String"]>;
  author_gte?: Maybe<Scalars["String"]>;
  author_contains?: Maybe<Scalars["String"]>;
  author_not_contains?: Maybe<Scalars["String"]>;
  author_starts_with?: Maybe<Scalars["String"]>;
  author_not_starts_with?: Maybe<Scalars["String"]>;
  author_ends_with?: Maybe<Scalars["String"]>;
  author_not_ends_with?: Maybe<Scalars["String"]>;
};

export type SnippetUpdateManyDataInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
};

export type SnippetUpsertWithWhereUniqueWithoutImagesInput = {
  where: SnippetWhereUniqueInput;
  update: SnippetUpdateWithoutImagesDataInput;
  create: SnippetCreateWithoutImagesInput;
};

export type SnippetUpdateInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  images?: Maybe<AssetUpdateOneWithoutImagesSnippetInput>;
  userLikes?: Maybe<UserLikeUpdateManyWithoutSnippetInput>;
};

export type AssetUpdateOneWithoutImagesSnippetInput = {
  create?: Maybe<AssetCreateWithoutImagesSnippetInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<AssetUpdateWithoutImagesSnippetDataInput>;
  upsert?: Maybe<AssetUpsertWithoutImagesSnippetInput>;
};

export type AssetUpdateWithoutImagesSnippetDataInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetUpsertWithoutImagesSnippetInput = {
  update: AssetUpdateWithoutImagesSnippetDataInput;
  create: AssetCreateWithoutImagesSnippetInput;
};

export type UserLikeUpdateInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars["String"]>;
  snippet?: Maybe<SnippetUpdateOneWithoutUserLikesInput>;
};

export type SnippetUpdateOneWithoutUserLikesInput = {
  create?: Maybe<SnippetCreateWithoutUserLikesInput>;
  connect?: Maybe<SnippetWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<SnippetUpdateWithoutUserLikesDataInput>;
  upsert?: Maybe<SnippetUpsertWithoutUserLikesInput>;
};

export type SnippetUpdateWithoutUserLikesDataInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
  images?: Maybe<AssetUpdateOneWithoutImagesSnippetInput>;
};

export type SnippetUpsertWithoutUserLikesInput = {
  update: SnippetUpdateWithoutUserLikesDataInput;
  create: SnippetCreateWithoutUserLikesInput;
};

export type AssetUpdateManyMutationInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  count: Scalars["Long"];
};

export type SnippetUpdateManyMutationInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
};

export type UserLikeUpdateManyMutationInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars["String"]>;
};

export type AssetSubscriptionWhereInput = {
  AND?: Maybe<Array<AssetSubscriptionWhereInput>>;
  OR?: Maybe<Array<AssetSubscriptionWhereInput>>;
  NOT?: Maybe<Array<AssetSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<AssetWhereInput>;
};

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED",
}

export type AssetSubscriptionPayload = {
  __typename?: "AssetSubscriptionPayload";
  mutation: MutationType;
  node?: Maybe<Asset>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<AssetPreviousValues>;
};

export type AssetPreviousValues = {
  __typename?: "AssetPreviousValues";
  status: Status;
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type SnippetSubscriptionWhereInput = {
  AND?: Maybe<Array<SnippetSubscriptionWhereInput>>;
  OR?: Maybe<Array<SnippetSubscriptionWhereInput>>;
  NOT?: Maybe<Array<SnippetSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<SnippetWhereInput>;
};

export type SnippetSubscriptionPayload = {
  __typename?: "SnippetSubscriptionPayload";
  mutation: MutationType;
  node?: Maybe<Snippet>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<SnippetPreviousValues>;
};

export type SnippetPreviousValues = {
  __typename?: "SnippetPreviousValues";
  status: Status;
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  recommendations?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
};

export type UserLikeSubscriptionWhereInput = {
  AND?: Maybe<Array<UserLikeSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserLikeSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserLikeSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserLikeWhereInput>;
};

export type UserLikeSubscriptionPayload = {
  __typename?: "UserLikeSubscriptionPayload";
  mutation: MutationType;
  node?: Maybe<UserLike>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserLikePreviousValues>;
};

export type UserLikePreviousValues = {
  __typename?: "UserLikePreviousValues";
  status: Status;
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  user?: Maybe<Scalars["String"]>;
};

export enum Locale {
  En = "EN",
}

export type CreateSnippetGraphQlMutationVariables = {
  data: SnippetCreateInput;
};

export type CreateSnippetGraphQlMutation = { __typename?: "Mutation" } & {
  createSnippet: { __typename?: "Snippet" } & Pick<
    Snippet,
    | "id"
    | "status"
    | "title"
    | "content"
    | "description"
    | "recommendations"
    | "author"
  > & {
      userLikes?: Maybe<
        Array<{ __typename?: "UserLike" } & Pick<UserLike, "id">>
      >;
      images?: Maybe<
        { __typename?: "Asset" } & Pick<
          Asset,
          "id" | "fileName" | "height" | "width" | "size" | "handle"
        >
      >;
    };
};

export type CreateUserLikeGraphQlMutationVariables = {
  data: UserLikeCreateInput;
};

export type CreateUserLikeGraphQlMutation = { __typename?: "Mutation" } & {
  createUserLike: { __typename?: "UserLike" } & Pick<
    UserLike,
    "id" | "user"
  > & { snippet?: Maybe<{ __typename?: "Snippet" } & Pick<Snippet, "id">> };
};

export type DeleteAssetGraphQlMutationVariables = {
  where: AssetWhereUniqueInput;
};

export type DeleteAssetGraphQlMutation = { __typename?: "Mutation" } & {
  deleteAsset?: Maybe<{ __typename?: "Asset" } & Pick<Asset, "id">>;
};

export type DeleteSnippetGraphQlMutationVariables = {
  where: SnippetWhereUniqueInput;
};

export type DeleteSnippetGraphQlMutation = { __typename?: "Mutation" } & {
  deleteSnippet?: Maybe<{ __typename?: "Snippet" } & Pick<Snippet, "id">>;
};

export type DeleteUserLikeGraphQlMutationVariables = {
  where: UserLikeWhereUniqueInput;
};

export type DeleteUserLikeGraphQlMutation = { __typename?: "Mutation" } & {
  deleteUserLike?: Maybe<
    { __typename?: "UserLike" } & Pick<UserLike, "id" | "user">
  >;
};

export type UpdateSnippetGraphQlMutationVariables = {
  data: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};

export type UpdateSnippetGraphQlMutation = { __typename?: "Mutation" } & {
  updateSnippet?: Maybe<
    { __typename?: "Snippet" } & Pick<
      Snippet,
      | "id"
      | "status"
      | "title"
      | "content"
      | "description"
      | "recommendations"
      | "author"
    > & {
        userLikes?: Maybe<
          Array<{ __typename?: "UserLike" } & Pick<UserLike, "id">>
        >;
        images?: Maybe<
          { __typename?: "Asset" } & Pick<
            Asset,
            "id" | "fileName" | "height" | "width" | "size" | "handle"
          >
        >;
      }
  >;
};

export type SnippetGraphQlQueryVariables = {
  where: SnippetWhereUniqueInput;
};

export type SnippetGraphQlQuery = { __typename?: "Query" } & {
  snippet?: Maybe<
    { __typename?: "Snippet" } & Pick<
      Snippet,
      | "id"
      | "status"
      | "title"
      | "content"
      | "description"
      | "recommendations"
      | "author"
    > & {
        userLikes?: Maybe<
          Array<{ __typename?: "UserLike" } & Pick<UserLike, "id" | "user">>
        >;
        images?: Maybe<
          { __typename?: "Asset" } & Pick<
            Asset,
            "id" | "fileName" | "height" | "width" | "size" | "handle"
          >
        >;
      }
  >;
};

export type SnippetsGraphQlQueryVariables = {
  where?: Maybe<SnippetWhereInput>;
};

export type SnippetsGraphQlQuery = { __typename?: "Query" } & {
  snippets: Array<
    Maybe<
      { __typename?: "Snippet" } & Pick<
        Snippet,
        | "id"
        | "status"
        | "title"
        | "content"
        | "description"
        | "recommendations"
        | "author"
      > & {
          userLikes?: Maybe<
            Array<{ __typename?: "UserLike" } & Pick<UserLike, "id" | "user">>
          >;
          images?: Maybe<
            { __typename?: "Asset" } & Pick<
              Asset,
              "id" | "fileName" | "height" | "width" | "size" | "handle"
            >
          >;
        }
    >
  >;
};

export type UserLikeGraphQlQueryVariables = {
  where: UserLikeWhereUniqueInput;
};

export type UserLikeGraphQlQuery = { __typename?: "Query" } & {
  userLike?: Maybe<
    { __typename?: "UserLike" } & Pick<UserLike, "id" | "user"> & {
        snippet?: Maybe<
          { __typename?: "Snippet" } & Pick<
            Snippet,
            | "id"
            | "status"
            | "title"
            | "content"
            | "description"
            | "recommendations"
            | "author"
          > & {
              userLikes?: Maybe<
                Array<
                  { __typename?: "UserLike" } & Pick<UserLike, "id" | "user">
                >
              >;
              images?: Maybe<
                { __typename?: "Asset" } & Pick<
                  Asset,
                  "id" | "fileName" | "height" | "width" | "size" | "handle"
                >
              >;
            }
        >;
      }
  >;
};

export type UserLikesGraphQlQueryVariables = {
  where?: Maybe<UserLikeWhereInput>;
};

export type UserLikesGraphQlQuery = { __typename?: "Query" } & {
  userLikes: Array<
    Maybe<
      { __typename?: "UserLike" } & Pick<UserLike, "id" | "user"> & {
          snippet?: Maybe<
            { __typename?: "Snippet" } & Pick<
              Snippet,
              | "id"
              | "status"
              | "title"
              | "content"
              | "description"
              | "recommendations"
              | "author"
            > & {
                userLikes?: Maybe<
                  Array<
                    { __typename?: "UserLike" } & Pick<UserLike, "id" | "user">
                  >
                >;
                images?: Maybe<
                  { __typename?: "Asset" } & Pick<
                    Asset,
                    "id" | "fileName" | "height" | "width" | "size" | "handle"
                  >
                >;
              }
          >;
        }
    >
  >;
};
