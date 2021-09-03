import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateMushroomInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Mushroom = {
  __typename?: 'Mushroom';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  mushroomDetails?: Maybe<MushroomDetails>;
  userId: Scalars['Int'];
};

export type MushroomDetails = {
  __typename?: 'MushroomDetails';
  id: Scalars['Int'];
  taste_rating: Scalars['Int'];
  poison_level: Scalars['Int'];
  boiling_required?: Maybe<Scalars['Boolean']>;
  dyeing?: Maybe<Scalars['Boolean']>;
  ffa_recommended?: Maybe<Scalars['Boolean']>;
};

export type MushroomDetailsInput = {
  poison_level?: Maybe<Scalars['Int']>;
  taste_rating?: Maybe<Scalars['Int']>;
  dyeing?: Maybe<Scalars['Boolean']>;
  ffa_recommended?: Maybe<Scalars['Boolean']>;
  boiling_required?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMushroom?: Maybe<Mushroom>;
  updateMushroom?: Maybe<Mushroom>;
  deleteMushroom?: Maybe<Mushroom>;
};


export type MutationCreateMushroomArgs = {
  data?: Maybe<NestedCreateMushroomInput>;
};


export type MutationUpdateMushroomArgs = {
  id: Scalars['Int'];
  data?: Maybe<NestedUpdateMushroomInput>;
};


export type MutationDeleteMushroomArgs = {
  id: Scalars['Int'];
};

export type NestedCreateMushroomInput = {
  mushroom?: Maybe<CreateMushroomInput>;
  mushroomDetails?: Maybe<MushroomDetailsInput>;
  user: Scalars['Int'];
};

export type NestedUpdateMushroomInput = {
  mushroom?: Maybe<UpdateMushroomInput>;
  mushroomDetails?: Maybe<MushroomDetailsInput>;
  user?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  mushroom?: Maybe<Mushroom>;
  mushrooms?: Maybe<Array<Mushroom>>;
};


export type QueryMushroomArgs = {
  id: Scalars['Int'];
};

export type UpdateMushroomInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  mushroomDetails?: Maybe<MushroomDetailsInput>;
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
};

export type MushroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type MushroomsQuery = { __typename?: 'Query', mushrooms?: Maybe<Array<{ __typename: 'Mushroom', name: string }>> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateMushroomInput: CreateMushroomInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mushroom: ResolverTypeWrapper<Mushroom>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MushroomDetails: ResolverTypeWrapper<MushroomDetails>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  MushroomDetailsInput: MushroomDetailsInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedCreateMushroomInput: NestedCreateMushroomInput;
  NestedUpdateMushroomInput: NestedUpdateMushroomInput;
  Query: ResolverTypeWrapper<{}>;
  UpdateMushroomInput: UpdateMushroomInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateMushroomInput: CreateMushroomInput;
  String: Scalars['String'];
  Mushroom: Mushroom;
  Int: Scalars['Int'];
  MushroomDetails: MushroomDetails;
  Boolean: Scalars['Boolean'];
  MushroomDetailsInput: MushroomDetailsInput;
  Mutation: {};
  NestedCreateMushroomInput: NestedCreateMushroomInput;
  NestedUpdateMushroomInput: NestedUpdateMushroomInput;
  Query: {};
  UpdateMushroomInput: UpdateMushroomInput;
  User: User;
};

export type MushroomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mushroom'] = ResolversParentTypes['Mushroom']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mushroomDetails?: Resolver<Maybe<ResolversTypes['MushroomDetails']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MushroomDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MushroomDetails'] = ResolversParentTypes['MushroomDetails']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taste_rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poison_level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  boiling_required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dyeing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ffa_recommended?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMushroom?: Resolver<Maybe<ResolversTypes['Mushroom']>, ParentType, ContextType, RequireFields<MutationCreateMushroomArgs, never>>;
  updateMushroom?: Resolver<Maybe<ResolversTypes['Mushroom']>, ParentType, ContextType, RequireFields<MutationUpdateMushroomArgs, 'id'>>;
  deleteMushroom?: Resolver<Maybe<ResolversTypes['Mushroom']>, ParentType, ContextType, RequireFields<MutationDeleteMushroomArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  mushroom?: Resolver<Maybe<ResolversTypes['Mushroom']>, ParentType, ContextType, RequireFields<QueryMushroomArgs, 'id'>>;
  mushrooms?: Resolver<Maybe<Array<ResolversTypes['Mushroom']>>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mushroom?: MushroomResolvers<ContextType>;
  MushroomDetails?: MushroomDetailsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

