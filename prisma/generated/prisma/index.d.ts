
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Attraction
 * 
 */
export type Attraction = $Result.DefaultSelection<Prisma.$AttractionPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model OperatingHours
 * 
 */
export type OperatingHours = $Result.DefaultSelection<Prisma.$OperatingHoursPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RouteRating
 * 
 */
export type RouteRating = $Result.DefaultSelection<Prisma.$RouteRatingPayload>
/**
 * Model AttractionToTag
 * 
 */
export type AttractionToTag = $Result.DefaultSelection<Prisma.$AttractionToTagPayload>
/**
 * Model RouteToAttraction
 * 
 */
export type RouteToAttraction = $Result.DefaultSelection<Prisma.$RouteToAttractionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERUSER: 'SUPERUSER'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const TouristPlaceCategory: {
  NATURE: 'NATURE',
  CULTURAL_HISTORICAL: 'CULTURAL_HISTORICAL',
  ENTERTAINMENT_PARK: 'ENTERTAINMENT_PARK',
  GASTRONOMY: 'GASTRONOMY',
  BEACH_RESORT: 'BEACH_RESORT',
  SKI_RESORT: 'SKI_RESORT',
  RELIGIOUS: 'RELIGIOUS',
  URBAN: 'URBAN',
  ADVENTURE: 'ADVENTURE',
  ECO_AGRO: 'ECO_AGRO'
};

export type TouristPlaceCategory = (typeof TouristPlaceCategory)[keyof typeof TouristPlaceCategory]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type TouristPlaceCategory = $Enums.TouristPlaceCategory

export const TouristPlaceCategory: typeof $Enums.TouristPlaceCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attraction`: Exposes CRUD operations for the **Attraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attractions
    * const attractions = await prisma.attraction.findMany()
    * ```
    */
  get attraction(): Prisma.AttractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operatingHours`: Exposes CRUD operations for the **OperatingHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperatingHours
    * const operatingHours = await prisma.operatingHours.findMany()
    * ```
    */
  get operatingHours(): Prisma.OperatingHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeRating`: Exposes CRUD operations for the **RouteRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteRatings
    * const routeRatings = await prisma.routeRating.findMany()
    * ```
    */
  get routeRating(): Prisma.RouteRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attractionToTag`: Exposes CRUD operations for the **AttractionToTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttractionToTags
    * const attractionToTags = await prisma.attractionToTag.findMany()
    * ```
    */
  get attractionToTag(): Prisma.AttractionToTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeToAttraction`: Exposes CRUD operations for the **RouteToAttraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteToAttractions
    * const routeToAttractions = await prisma.routeToAttraction.findMany()
    * ```
    */
  get routeToAttraction(): Prisma.RouteToAttractionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Attraction: 'Attraction',
    Location: 'Location',
    Category: 'Category',
    Media: 'Media',
    Review: 'Review',
    Tag: 'Tag',
    OperatingHours: 'OperatingHours',
    Route: 'Route',
    RouteRating: 'RouteRating',
    AttractionToTag: 'AttractionToTag',
    RouteToAttraction: 'RouteToAttraction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "attraction" | "location" | "category" | "media" | "review" | "tag" | "operatingHours" | "route" | "routeRating" | "attractionToTag" | "routeToAttraction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Attraction: {
        payload: Prisma.$AttractionPayload<ExtArgs>
        fields: Prisma.AttractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          findFirst: {
            args: Prisma.AttractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          findMany: {
            args: Prisma.AttractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>[]
          }
          create: {
            args: Prisma.AttractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          createMany: {
            args: Prisma.AttractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>[]
          }
          delete: {
            args: Prisma.AttractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          update: {
            args: Prisma.AttractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          deleteMany: {
            args: Prisma.AttractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>[]
          }
          upsert: {
            args: Prisma.AttractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          aggregate: {
            args: Prisma.AttractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttraction>
          }
          groupBy: {
            args: Prisma.AttractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttractionCountArgs<ExtArgs>
            result: $Utils.Optional<AttractionCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      OperatingHours: {
        payload: Prisma.$OperatingHoursPayload<ExtArgs>
        fields: Prisma.OperatingHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatingHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatingHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          findFirst: {
            args: Prisma.OperatingHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatingHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          findMany: {
            args: Prisma.OperatingHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>[]
          }
          create: {
            args: Prisma.OperatingHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          createMany: {
            args: Prisma.OperatingHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatingHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>[]
          }
          delete: {
            args: Prisma.OperatingHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          update: {
            args: Prisma.OperatingHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          deleteMany: {
            args: Prisma.OperatingHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatingHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperatingHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>[]
          }
          upsert: {
            args: Prisma.OperatingHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHoursPayload>
          }
          aggregate: {
            args: Prisma.OperatingHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperatingHours>
          }
          groupBy: {
            args: Prisma.OperatingHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatingHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatingHoursCountArgs<ExtArgs>
            result: $Utils.Optional<OperatingHoursCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RouteRating: {
        payload: Prisma.$RouteRatingPayload<ExtArgs>
        fields: Prisma.RouteRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>
          }
          findFirst: {
            args: Prisma.RouteRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>
          }
          findMany: {
            args: Prisma.RouteRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>[]
          }
          create: {
            args: Prisma.RouteRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>
          }
          createMany: {
            args: Prisma.RouteRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>[]
          }
          delete: {
            args: Prisma.RouteRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>
          }
          update: {
            args: Prisma.RouteRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>
          }
          deleteMany: {
            args: Prisma.RouteRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>[]
          }
          upsert: {
            args: Prisma.RouteRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteRatingPayload>
          }
          aggregate: {
            args: Prisma.RouteRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteRating>
          }
          groupBy: {
            args: Prisma.RouteRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteRatingCountArgs<ExtArgs>
            result: $Utils.Optional<RouteRatingCountAggregateOutputType> | number
          }
        }
      }
      AttractionToTag: {
        payload: Prisma.$AttractionToTagPayload<ExtArgs>
        fields: Prisma.AttractionToTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttractionToTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttractionToTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>
          }
          findFirst: {
            args: Prisma.AttractionToTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttractionToTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>
          }
          findMany: {
            args: Prisma.AttractionToTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>[]
          }
          create: {
            args: Prisma.AttractionToTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>
          }
          createMany: {
            args: Prisma.AttractionToTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttractionToTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>[]
          }
          delete: {
            args: Prisma.AttractionToTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>
          }
          update: {
            args: Prisma.AttractionToTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>
          }
          deleteMany: {
            args: Prisma.AttractionToTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttractionToTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttractionToTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>[]
          }
          upsert: {
            args: Prisma.AttractionToTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionToTagPayload>
          }
          aggregate: {
            args: Prisma.AttractionToTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttractionToTag>
          }
          groupBy: {
            args: Prisma.AttractionToTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttractionToTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttractionToTagCountArgs<ExtArgs>
            result: $Utils.Optional<AttractionToTagCountAggregateOutputType> | number
          }
        }
      }
      RouteToAttraction: {
        payload: Prisma.$RouteToAttractionPayload<ExtArgs>
        fields: Prisma.RouteToAttractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteToAttractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteToAttractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>
          }
          findFirst: {
            args: Prisma.RouteToAttractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteToAttractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>
          }
          findMany: {
            args: Prisma.RouteToAttractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>[]
          }
          create: {
            args: Prisma.RouteToAttractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>
          }
          createMany: {
            args: Prisma.RouteToAttractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteToAttractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>[]
          }
          delete: {
            args: Prisma.RouteToAttractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>
          }
          update: {
            args: Prisma.RouteToAttractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>
          }
          deleteMany: {
            args: Prisma.RouteToAttractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteToAttractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteToAttractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>[]
          }
          upsert: {
            args: Prisma.RouteToAttractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteToAttractionPayload>
          }
          aggregate: {
            args: Prisma.RouteToAttractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteToAttraction>
          }
          groupBy: {
            args: Prisma.RouteToAttractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteToAttractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteToAttractionCountArgs<ExtArgs>
            result: $Utils.Optional<RouteToAttractionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    attraction?: AttractionOmit
    location?: LocationOmit
    category?: CategoryOmit
    media?: MediaOmit
    review?: ReviewOmit
    tag?: TagOmit
    operatingHours?: OperatingHoursOmit
    route?: RouteOmit
    routeRating?: RouteRatingOmit
    attractionToTag?: AttractionToTagOmit
    routeToAttraction?: RouteToAttractionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    routes: number
    reviews: number
    routeRatings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | UserCountOutputTypeCountRoutesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    routeRatings?: boolean | UserCountOutputTypeCountRouteRatingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRouteRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteRatingWhereInput
  }


  /**
   * Count Type AttractionCountOutputType
   */

  export type AttractionCountOutputType = {
    media: number
    reviews: number
    tags: number
    operatingHours: number
    routes: number
    AttractionToTag: number
    RouteToAttraction: number
  }

  export type AttractionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | AttractionCountOutputTypeCountMediaArgs
    reviews?: boolean | AttractionCountOutputTypeCountReviewsArgs
    tags?: boolean | AttractionCountOutputTypeCountTagsArgs
    operatingHours?: boolean | AttractionCountOutputTypeCountOperatingHoursArgs
    routes?: boolean | AttractionCountOutputTypeCountRoutesArgs
    AttractionToTag?: boolean | AttractionCountOutputTypeCountAttractionToTagArgs
    RouteToAttraction?: boolean | AttractionCountOutputTypeCountRouteToAttractionArgs
  }

  // Custom InputTypes
  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionCountOutputType
     */
    select?: AttractionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountOperatingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatingHoursWhereInput
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountAttractionToTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionToTagWhereInput
  }

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountRouteToAttractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteToAttractionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    attractions: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractions?: boolean | CategoryCountOutputTypeCountAttractionsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAttractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    attractions: number
    AttractionToTag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractions?: boolean | TagCountOutputTypeCountAttractionsArgs
    AttractionToTag?: boolean | TagCountOutputTypeCountAttractionToTagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountAttractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountAttractionToTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionToTagWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    attractions: number
    ratings: number
    RouteToAttraction: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractions?: boolean | RouteCountOutputTypeCountAttractionsArgs
    ratings?: boolean | RouteCountOutputTypeCountRatingsArgs
    RouteToAttraction?: boolean | RouteCountOutputTypeCountRouteToAttractionArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountAttractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteRatingWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountRouteToAttractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteToAttractionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Roles | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Roles | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatar: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Roles
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    routes?: boolean | User$routesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    routeRatings?: boolean | User$routeRatingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatar" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | User$routesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    routeRatings?: boolean | User$routeRatingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      routes: Prisma.$RoutePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      routeRatings: Prisma.$RouteRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Roles
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routes<T extends User$routesArgs<ExtArgs> = {}>(args?: Subset<T, User$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routeRatings<T extends User$routeRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$routeRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Roles'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.routes
   */
  export type User$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.routeRatings
   */
  export type User$routeRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    where?: RouteRatingWhereInput
    orderBy?: RouteRatingOrderByWithRelationInput | RouteRatingOrderByWithRelationInput[]
    cursor?: RouteRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteRatingScalarFieldEnum | RouteRatingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Attraction
   */

  export type AggregateAttraction = {
    _count: AttractionCountAggregateOutputType | null
    _avg: AttractionAvgAggregateOutputType | null
    _sum: AttractionSumAggregateOutputType | null
    _min: AttractionMinAggregateOutputType | null
    _max: AttractionMaxAggregateOutputType | null
  }

  export type AttractionAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    locationId: number | null
    averageRating: number | null
    visitDuration: number | null
    entryFee: number | null
  }

  export type AttractionSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    locationId: number | null
    averageRating: number | null
    visitDuration: number | null
    entryFee: number | null
  }

  export type AttractionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categoryId: number | null
    locationId: number | null
    averageRating: number | null
    visitDuration: number | null
    entryFee: number | null
    website: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttractionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categoryId: number | null
    locationId: number | null
    averageRating: number | null
    visitDuration: number | null
    entryFee: number | null
    website: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttractionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    locationId: number
    averageRating: number
    visitDuration: number
    entryFee: number
    website: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttractionAvgAggregateInputType = {
    id?: true
    categoryId?: true
    locationId?: true
    averageRating?: true
    visitDuration?: true
    entryFee?: true
  }

  export type AttractionSumAggregateInputType = {
    id?: true
    categoryId?: true
    locationId?: true
    averageRating?: true
    visitDuration?: true
    entryFee?: true
  }

  export type AttractionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    locationId?: true
    averageRating?: true
    visitDuration?: true
    entryFee?: true
    website?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttractionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    locationId?: true
    averageRating?: true
    visitDuration?: true
    entryFee?: true
    website?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttractionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    locationId?: true
    averageRating?: true
    visitDuration?: true
    entryFee?: true
    website?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attraction to aggregate.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attractions
    **/
    _count?: true | AttractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttractionMaxAggregateInputType
  }

  export type GetAttractionAggregateType<T extends AttractionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttraction[P]>
      : GetScalarType<T[P], AggregateAttraction[P]>
  }




  export type AttractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
    orderBy?: AttractionOrderByWithAggregationInput | AttractionOrderByWithAggregationInput[]
    by: AttractionScalarFieldEnum[] | AttractionScalarFieldEnum
    having?: AttractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttractionCountAggregateInputType | true
    _avg?: AttractionAvgAggregateInputType
    _sum?: AttractionSumAggregateInputType
    _min?: AttractionMinAggregateInputType
    _max?: AttractionMaxAggregateInputType
  }

  export type AttractionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    categoryId: number
    locationId: number
    averageRating: number | null
    visitDuration: number | null
    entryFee: number | null
    website: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttractionCountAggregateOutputType | null
    _avg: AttractionAvgAggregateOutputType | null
    _sum: AttractionSumAggregateOutputType | null
    _min: AttractionMinAggregateOutputType | null
    _max: AttractionMaxAggregateOutputType | null
  }

  type GetAttractionGroupByPayload<T extends AttractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttractionGroupByOutputType[P]>
            : GetScalarType<T[P], AttractionGroupByOutputType[P]>
        }
      >
    >


  export type AttractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    locationId?: boolean
    averageRating?: boolean
    visitDuration?: boolean
    entryFee?: boolean
    website?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    media?: boolean | Attraction$mediaArgs<ExtArgs>
    reviews?: boolean | Attraction$reviewsArgs<ExtArgs>
    tags?: boolean | Attraction$tagsArgs<ExtArgs>
    operatingHours?: boolean | Attraction$operatingHoursArgs<ExtArgs>
    routes?: boolean | Attraction$routesArgs<ExtArgs>
    AttractionToTag?: boolean | Attraction$AttractionToTagArgs<ExtArgs>
    RouteToAttraction?: boolean | Attraction$RouteToAttractionArgs<ExtArgs>
    _count?: boolean | AttractionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    locationId?: boolean
    averageRating?: boolean
    visitDuration?: boolean
    entryFee?: boolean
    website?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    locationId?: boolean
    averageRating?: boolean
    visitDuration?: boolean
    entryFee?: boolean
    website?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    locationId?: boolean
    averageRating?: boolean
    visitDuration?: boolean
    entryFee?: boolean
    website?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "locationId" | "averageRating" | "visitDuration" | "entryFee" | "website" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["attraction"]>
  export type AttractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    media?: boolean | Attraction$mediaArgs<ExtArgs>
    reviews?: boolean | Attraction$reviewsArgs<ExtArgs>
    tags?: boolean | Attraction$tagsArgs<ExtArgs>
    operatingHours?: boolean | Attraction$operatingHoursArgs<ExtArgs>
    routes?: boolean | Attraction$routesArgs<ExtArgs>
    AttractionToTag?: boolean | Attraction$AttractionToTagArgs<ExtArgs>
    RouteToAttraction?: boolean | Attraction$RouteToAttractionArgs<ExtArgs>
    _count?: boolean | AttractionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type AttractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $AttractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attraction"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      operatingHours: Prisma.$OperatingHoursPayload<ExtArgs>[]
      routes: Prisma.$RoutePayload<ExtArgs>[]
      AttractionToTag: Prisma.$AttractionToTagPayload<ExtArgs>[]
      RouteToAttraction: Prisma.$RouteToAttractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      categoryId: number
      locationId: number
      averageRating: number | null
      visitDuration: number | null
      entryFee: number | null
      website: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attraction"]>
    composites: {}
  }

  type AttractionGetPayload<S extends boolean | null | undefined | AttractionDefaultArgs> = $Result.GetResult<Prisma.$AttractionPayload, S>

  type AttractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttractionCountAggregateInputType | true
    }

  export interface AttractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attraction'], meta: { name: 'Attraction' } }
    /**
     * Find zero or one Attraction that matches the filter.
     * @param {AttractionFindUniqueArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttractionFindUniqueArgs>(args: SelectSubset<T, AttractionFindUniqueArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttractionFindUniqueOrThrowArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttractionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindFirstArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttractionFindFirstArgs>(args?: SelectSubset<T, AttractionFindFirstArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindFirstOrThrowArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttractionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attractions
     * const attractions = await prisma.attraction.findMany()
     * 
     * // Get first 10 Attractions
     * const attractions = await prisma.attraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attractionWithIdOnly = await prisma.attraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttractionFindManyArgs>(args?: SelectSubset<T, AttractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attraction.
     * @param {AttractionCreateArgs} args - Arguments to create a Attraction.
     * @example
     * // Create one Attraction
     * const Attraction = await prisma.attraction.create({
     *   data: {
     *     // ... data to create a Attraction
     *   }
     * })
     * 
     */
    create<T extends AttractionCreateArgs>(args: SelectSubset<T, AttractionCreateArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attractions.
     * @param {AttractionCreateManyArgs} args - Arguments to create many Attractions.
     * @example
     * // Create many Attractions
     * const attraction = await prisma.attraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttractionCreateManyArgs>(args?: SelectSubset<T, AttractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attractions and returns the data saved in the database.
     * @param {AttractionCreateManyAndReturnArgs} args - Arguments to create many Attractions.
     * @example
     * // Create many Attractions
     * const attraction = await prisma.attraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attractions and only return the `id`
     * const attractionWithIdOnly = await prisma.attraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttractionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attraction.
     * @param {AttractionDeleteArgs} args - Arguments to delete one Attraction.
     * @example
     * // Delete one Attraction
     * const Attraction = await prisma.attraction.delete({
     *   where: {
     *     // ... filter to delete one Attraction
     *   }
     * })
     * 
     */
    delete<T extends AttractionDeleteArgs>(args: SelectSubset<T, AttractionDeleteArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attraction.
     * @param {AttractionUpdateArgs} args - Arguments to update one Attraction.
     * @example
     * // Update one Attraction
     * const attraction = await prisma.attraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttractionUpdateArgs>(args: SelectSubset<T, AttractionUpdateArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attractions.
     * @param {AttractionDeleteManyArgs} args - Arguments to filter Attractions to delete.
     * @example
     * // Delete a few Attractions
     * const { count } = await prisma.attraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttractionDeleteManyArgs>(args?: SelectSubset<T, AttractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attractions
     * const attraction = await prisma.attraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttractionUpdateManyArgs>(args: SelectSubset<T, AttractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attractions and returns the data updated in the database.
     * @param {AttractionUpdateManyAndReturnArgs} args - Arguments to update many Attractions.
     * @example
     * // Update many Attractions
     * const attraction = await prisma.attraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attractions and only return the `id`
     * const attractionWithIdOnly = await prisma.attraction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttractionUpdateManyAndReturnArgs>(args: SelectSubset<T, AttractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attraction.
     * @param {AttractionUpsertArgs} args - Arguments to update or create a Attraction.
     * @example
     * // Update or create a Attraction
     * const attraction = await prisma.attraction.upsert({
     *   create: {
     *     // ... data to create a Attraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attraction we want to update
     *   }
     * })
     */
    upsert<T extends AttractionUpsertArgs>(args: SelectSubset<T, AttractionUpsertArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionCountArgs} args - Arguments to filter Attractions to count.
     * @example
     * // Count the number of Attractions
     * const count = await prisma.attraction.count({
     *   where: {
     *     // ... the filter for the Attractions we want to count
     *   }
     * })
    **/
    count<T extends AttractionCountArgs>(
      args?: Subset<T, AttractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttractionAggregateArgs>(args: Subset<T, AttractionAggregateArgs>): Prisma.PrismaPromise<GetAttractionAggregateType<T>>

    /**
     * Group by Attraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttractionGroupByArgs['orderBy'] }
        : { orderBy?: AttractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attraction model
   */
  readonly fields: AttractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Attraction$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Attraction$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Attraction$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operatingHours<T extends Attraction$operatingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$operatingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends Attraction$routesArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AttractionToTag<T extends Attraction$AttractionToTagArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$AttractionToTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RouteToAttraction<T extends Attraction$RouteToAttractionArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$RouteToAttractionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attraction model
   */
  interface AttractionFieldRefs {
    readonly id: FieldRef<"Attraction", 'Int'>
    readonly name: FieldRef<"Attraction", 'String'>
    readonly description: FieldRef<"Attraction", 'String'>
    readonly categoryId: FieldRef<"Attraction", 'Int'>
    readonly locationId: FieldRef<"Attraction", 'Int'>
    readonly averageRating: FieldRef<"Attraction", 'Float'>
    readonly visitDuration: FieldRef<"Attraction", 'Float'>
    readonly entryFee: FieldRef<"Attraction", 'Float'>
    readonly website: FieldRef<"Attraction", 'String'>
    readonly phone: FieldRef<"Attraction", 'String'>
    readonly createdAt: FieldRef<"Attraction", 'DateTime'>
    readonly updatedAt: FieldRef<"Attraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attraction findUnique
   */
  export type AttractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction findUniqueOrThrow
   */
  export type AttractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction findFirst
   */
  export type AttractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attractions.
     */
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Attraction findFirstOrThrow
   */
  export type AttractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attractions.
     */
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Attraction findMany
   */
  export type AttractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attractions to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Attraction create
   */
  export type AttractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Attraction.
     */
    data: XOR<AttractionCreateInput, AttractionUncheckedCreateInput>
  }

  /**
   * Attraction createMany
   */
  export type AttractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attractions.
     */
    data: AttractionCreateManyInput | AttractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attraction createManyAndReturn
   */
  export type AttractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * The data used to create many Attractions.
     */
    data: AttractionCreateManyInput | AttractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attraction update
   */
  export type AttractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Attraction.
     */
    data: XOR<AttractionUpdateInput, AttractionUncheckedUpdateInput>
    /**
     * Choose, which Attraction to update.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction updateMany
   */
  export type AttractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attractions.
     */
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyInput>
    /**
     * Filter which Attractions to update
     */
    where?: AttractionWhereInput
    /**
     * Limit how many Attractions to update.
     */
    limit?: number
  }

  /**
   * Attraction updateManyAndReturn
   */
  export type AttractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * The data used to update Attractions.
     */
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyInput>
    /**
     * Filter which Attractions to update
     */
    where?: AttractionWhereInput
    /**
     * Limit how many Attractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attraction upsert
   */
  export type AttractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Attraction to update in case it exists.
     */
    where: AttractionWhereUniqueInput
    /**
     * In case the Attraction found by the `where` argument doesn't exist, create a new Attraction with this data.
     */
    create: XOR<AttractionCreateInput, AttractionUncheckedCreateInput>
    /**
     * In case the Attraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttractionUpdateInput, AttractionUncheckedUpdateInput>
  }

  /**
   * Attraction delete
   */
  export type AttractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter which Attraction to delete.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction deleteMany
   */
  export type AttractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attractions to delete
     */
    where?: AttractionWhereInput
    /**
     * Limit how many Attractions to delete.
     */
    limit?: number
  }

  /**
   * Attraction.media
   */
  export type Attraction$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Attraction.reviews
   */
  export type Attraction$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Attraction.tags
   */
  export type Attraction$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Attraction.operatingHours
   */
  export type Attraction$operatingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    where?: OperatingHoursWhereInput
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    cursor?: OperatingHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * Attraction.routes
   */
  export type Attraction$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Attraction.AttractionToTag
   */
  export type Attraction$AttractionToTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    where?: AttractionToTagWhereInput
    orderBy?: AttractionToTagOrderByWithRelationInput | AttractionToTagOrderByWithRelationInput[]
    cursor?: AttractionToTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttractionToTagScalarFieldEnum | AttractionToTagScalarFieldEnum[]
  }

  /**
   * Attraction.RouteToAttraction
   */
  export type Attraction$RouteToAttractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    where?: RouteToAttractionWhereInput
    orderBy?: RouteToAttractionOrderByWithRelationInput | RouteToAttractionOrderByWithRelationInput[]
    cursor?: RouteToAttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteToAttractionScalarFieldEnum | RouteToAttractionScalarFieldEnum[]
  }

  /**
   * Attraction without action
   */
  export type AttractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    address: number
    city: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    latitude: number
    longitude: number
    address: string | null
    city: string | null
    country: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | Location$attractionArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "address" | "city" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | Location$attractionArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      attraction: Prisma.$AttractionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latitude: number
      longitude: number
      address: string | null
      city: string | null
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attraction<T extends Location$attractionArgs<ExtArgs> = {}>(args?: Subset<T, Location$attractionArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly latitude: FieldRef<"Location", 'Float'>
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.attraction
   */
  export type Location$attractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    where?: AttractionWhereInput
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: $Enums.TouristPlaceCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: $Enums.TouristPlaceCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: $Enums.TouristPlaceCategory
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attractions?: boolean | Category$attractionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractions?: boolean | Category$attractionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      attractions: Prisma.$AttractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.TouristPlaceCategory
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attractions<T extends Category$attractionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$attractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'TouristPlaceCategory'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.attractions
   */
  export type Category$attractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    where?: AttractionWhereInput
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    cursor?: AttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    attractionId: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    attractionId: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    attractionId: number | null
    url: string | null
    type: string | null
    caption: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    attractionId: number | null
    url: string | null
    type: string | null
    caption: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    attractionId: number
    url: number
    type: number
    caption: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    attractionId?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    attractionId?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    attractionId?: true
    url?: true
    type?: true
    caption?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    attractionId?: true
    url?: true
    type?: true
    caption?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    attractionId?: true
    url?: true
    type?: true
    caption?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    attractionId: number
    url: string
    type: string
    caption: string | null
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    url?: boolean
    type?: boolean
    caption?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    url?: boolean
    type?: boolean
    caption?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    url?: boolean
    type?: boolean
    caption?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    attractionId?: boolean
    url?: boolean
    type?: boolean
    caption?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attractionId" | "url" | "type" | "caption" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      attraction: Prisma.$AttractionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attractionId: number
      url: string
      type: string
      caption: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attraction<T extends AttractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttractionDefaultArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly attractionId: FieldRef<"Media", 'Int'>
    readonly url: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'String'>
    readonly caption: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    attractionId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    attractionId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    attractionId: number | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    attractionId: number | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    attractionId: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    attractionId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    attractionId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    attractionId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    attractionId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    attractionId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    attractionId: number
    userId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    attractionId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attractionId" | "userId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      attraction: Prisma.$AttractionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attractionId: number
      userId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attraction<T extends AttractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttractionDefaultArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly attractionId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attractions?: boolean | Tag$attractionsArgs<ExtArgs>
    AttractionToTag?: boolean | Tag$AttractionToTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractions?: boolean | Tag$attractionsArgs<ExtArgs>
    AttractionToTag?: boolean | Tag$AttractionToTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      attractions: Prisma.$AttractionPayload<ExtArgs>[]
      AttractionToTag: Prisma.$AttractionToTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attractions<T extends Tag$attractionsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$attractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AttractionToTag<T extends Tag$AttractionToTagArgs<ExtArgs> = {}>(args?: Subset<T, Tag$AttractionToTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.attractions
   */
  export type Tag$attractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    where?: AttractionWhereInput
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    cursor?: AttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Tag.AttractionToTag
   */
  export type Tag$AttractionToTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    where?: AttractionToTagWhereInput
    orderBy?: AttractionToTagOrderByWithRelationInput | AttractionToTagOrderByWithRelationInput[]
    cursor?: AttractionToTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttractionToTagScalarFieldEnum | AttractionToTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model OperatingHours
   */

  export type AggregateOperatingHours = {
    _count: OperatingHoursCountAggregateOutputType | null
    _avg: OperatingHoursAvgAggregateOutputType | null
    _sum: OperatingHoursSumAggregateOutputType | null
    _min: OperatingHoursMinAggregateOutputType | null
    _max: OperatingHoursMaxAggregateOutputType | null
  }

  export type OperatingHoursAvgAggregateOutputType = {
    id: number | null
    attractionId: number | null
  }

  export type OperatingHoursSumAggregateOutputType = {
    id: number | null
    attractionId: number | null
  }

  export type OperatingHoursMinAggregateOutputType = {
    id: number | null
    attractionId: number | null
    dayOfWeek: string | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperatingHoursMaxAggregateOutputType = {
    id: number | null
    attractionId: number | null
    dayOfWeek: string | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperatingHoursCountAggregateOutputType = {
    id: number
    attractionId: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    isClosed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperatingHoursAvgAggregateInputType = {
    id?: true
    attractionId?: true
  }

  export type OperatingHoursSumAggregateInputType = {
    id?: true
    attractionId?: true
  }

  export type OperatingHoursMinAggregateInputType = {
    id?: true
    attractionId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperatingHoursMaxAggregateInputType = {
    id?: true
    attractionId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperatingHoursCountAggregateInputType = {
    id?: true
    attractionId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperatingHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatingHours to aggregate.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperatingHours
    **/
    _count?: true | OperatingHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperatingHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperatingHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatingHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatingHoursMaxAggregateInputType
  }

  export type GetOperatingHoursAggregateType<T extends OperatingHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateOperatingHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperatingHours[P]>
      : GetScalarType<T[P], AggregateOperatingHours[P]>
  }




  export type OperatingHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatingHoursWhereInput
    orderBy?: OperatingHoursOrderByWithAggregationInput | OperatingHoursOrderByWithAggregationInput[]
    by: OperatingHoursScalarFieldEnum[] | OperatingHoursScalarFieldEnum
    having?: OperatingHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatingHoursCountAggregateInputType | true
    _avg?: OperatingHoursAvgAggregateInputType
    _sum?: OperatingHoursSumAggregateInputType
    _min?: OperatingHoursMinAggregateInputType
    _max?: OperatingHoursMaxAggregateInputType
  }

  export type OperatingHoursGroupByOutputType = {
    id: number
    attractionId: number
    dayOfWeek: string
    openTime: string | null
    closeTime: string | null
    isClosed: boolean
    createdAt: Date
    updatedAt: Date
    _count: OperatingHoursCountAggregateOutputType | null
    _avg: OperatingHoursAvgAggregateOutputType | null
    _sum: OperatingHoursSumAggregateOutputType | null
    _min: OperatingHoursMinAggregateOutputType | null
    _max: OperatingHoursMaxAggregateOutputType | null
  }

  type GetOperatingHoursGroupByPayload<T extends OperatingHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatingHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatingHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatingHoursGroupByOutputType[P]>
            : GetScalarType<T[P], OperatingHoursGroupByOutputType[P]>
        }
      >
    >


  export type OperatingHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHours"]>

  export type OperatingHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHours"]>

  export type OperatingHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attractionId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHours"]>

  export type OperatingHoursSelectScalar = {
    id?: boolean
    attractionId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperatingHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attractionId" | "dayOfWeek" | "openTime" | "closeTime" | "isClosed" | "createdAt" | "updatedAt", ExtArgs["result"]["operatingHours"]>
  export type OperatingHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }
  export type OperatingHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }
  export type OperatingHoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }

  export type $OperatingHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperatingHours"
    objects: {
      attraction: Prisma.$AttractionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attractionId: number
      dayOfWeek: string
      openTime: string | null
      closeTime: string | null
      isClosed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operatingHours"]>
    composites: {}
  }

  type OperatingHoursGetPayload<S extends boolean | null | undefined | OperatingHoursDefaultArgs> = $Result.GetResult<Prisma.$OperatingHoursPayload, S>

  type OperatingHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperatingHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatingHoursCountAggregateInputType | true
    }

  export interface OperatingHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperatingHours'], meta: { name: 'OperatingHours' } }
    /**
     * Find zero or one OperatingHours that matches the filter.
     * @param {OperatingHoursFindUniqueArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatingHoursFindUniqueArgs>(args: SelectSubset<T, OperatingHoursFindUniqueArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OperatingHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperatingHoursFindUniqueOrThrowArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatingHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatingHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperatingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursFindFirstArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatingHoursFindFirstArgs>(args?: SelectSubset<T, OperatingHoursFindFirstArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperatingHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursFindFirstOrThrowArgs} args - Arguments to find a OperatingHours
     * @example
     * // Get one OperatingHours
     * const operatingHours = await prisma.operatingHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatingHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatingHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OperatingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperatingHours
     * const operatingHours = await prisma.operatingHours.findMany()
     * 
     * // Get first 10 OperatingHours
     * const operatingHours = await prisma.operatingHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatingHoursWithIdOnly = await prisma.operatingHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatingHoursFindManyArgs>(args?: SelectSubset<T, OperatingHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OperatingHours.
     * @param {OperatingHoursCreateArgs} args - Arguments to create a OperatingHours.
     * @example
     * // Create one OperatingHours
     * const OperatingHours = await prisma.operatingHours.create({
     *   data: {
     *     // ... data to create a OperatingHours
     *   }
     * })
     * 
     */
    create<T extends OperatingHoursCreateArgs>(args: SelectSubset<T, OperatingHoursCreateArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OperatingHours.
     * @param {OperatingHoursCreateManyArgs} args - Arguments to create many OperatingHours.
     * @example
     * // Create many OperatingHours
     * const operatingHours = await prisma.operatingHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatingHoursCreateManyArgs>(args?: SelectSubset<T, OperatingHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OperatingHours and returns the data saved in the database.
     * @param {OperatingHoursCreateManyAndReturnArgs} args - Arguments to create many OperatingHours.
     * @example
     * // Create many OperatingHours
     * const operatingHours = await prisma.operatingHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OperatingHours and only return the `id`
     * const operatingHoursWithIdOnly = await prisma.operatingHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatingHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatingHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OperatingHours.
     * @param {OperatingHoursDeleteArgs} args - Arguments to delete one OperatingHours.
     * @example
     * // Delete one OperatingHours
     * const OperatingHours = await prisma.operatingHours.delete({
     *   where: {
     *     // ... filter to delete one OperatingHours
     *   }
     * })
     * 
     */
    delete<T extends OperatingHoursDeleteArgs>(args: SelectSubset<T, OperatingHoursDeleteArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OperatingHours.
     * @param {OperatingHoursUpdateArgs} args - Arguments to update one OperatingHours.
     * @example
     * // Update one OperatingHours
     * const operatingHours = await prisma.operatingHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatingHoursUpdateArgs>(args: SelectSubset<T, OperatingHoursUpdateArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OperatingHours.
     * @param {OperatingHoursDeleteManyArgs} args - Arguments to filter OperatingHours to delete.
     * @example
     * // Delete a few OperatingHours
     * const { count } = await prisma.operatingHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatingHoursDeleteManyArgs>(args?: SelectSubset<T, OperatingHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperatingHours
     * const operatingHours = await prisma.operatingHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatingHoursUpdateManyArgs>(args: SelectSubset<T, OperatingHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperatingHours and returns the data updated in the database.
     * @param {OperatingHoursUpdateManyAndReturnArgs} args - Arguments to update many OperatingHours.
     * @example
     * // Update many OperatingHours
     * const operatingHours = await prisma.operatingHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OperatingHours and only return the `id`
     * const operatingHoursWithIdOnly = await prisma.operatingHours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperatingHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, OperatingHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OperatingHours.
     * @param {OperatingHoursUpsertArgs} args - Arguments to update or create a OperatingHours.
     * @example
     * // Update or create a OperatingHours
     * const operatingHours = await prisma.operatingHours.upsert({
     *   create: {
     *     // ... data to create a OperatingHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperatingHours we want to update
     *   }
     * })
     */
    upsert<T extends OperatingHoursUpsertArgs>(args: SelectSubset<T, OperatingHoursUpsertArgs<ExtArgs>>): Prisma__OperatingHoursClient<$Result.GetResult<Prisma.$OperatingHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursCountArgs} args - Arguments to filter OperatingHours to count.
     * @example
     * // Count the number of OperatingHours
     * const count = await prisma.operatingHours.count({
     *   where: {
     *     // ... the filter for the OperatingHours we want to count
     *   }
     * })
    **/
    count<T extends OperatingHoursCountArgs>(
      args?: Subset<T, OperatingHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatingHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatingHoursAggregateArgs>(args: Subset<T, OperatingHoursAggregateArgs>): Prisma.PrismaPromise<GetOperatingHoursAggregateType<T>>

    /**
     * Group by OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperatingHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatingHoursGroupByArgs['orderBy'] }
        : { orderBy?: OperatingHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatingHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatingHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperatingHours model
   */
  readonly fields: OperatingHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperatingHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatingHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attraction<T extends AttractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttractionDefaultArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OperatingHours model
   */
  interface OperatingHoursFieldRefs {
    readonly id: FieldRef<"OperatingHours", 'Int'>
    readonly attractionId: FieldRef<"OperatingHours", 'Int'>
    readonly dayOfWeek: FieldRef<"OperatingHours", 'String'>
    readonly openTime: FieldRef<"OperatingHours", 'String'>
    readonly closeTime: FieldRef<"OperatingHours", 'String'>
    readonly isClosed: FieldRef<"OperatingHours", 'Boolean'>
    readonly createdAt: FieldRef<"OperatingHours", 'DateTime'>
    readonly updatedAt: FieldRef<"OperatingHours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OperatingHours findUnique
   */
  export type OperatingHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours findUniqueOrThrow
   */
  export type OperatingHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours findFirst
   */
  export type OperatingHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatingHours.
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * OperatingHours findFirstOrThrow
   */
  export type OperatingHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatingHours.
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * OperatingHours findMany
   */
  export type OperatingHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHoursOrderByWithRelationInput | OperatingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperatingHours.
     */
    cursor?: OperatingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    distinct?: OperatingHoursScalarFieldEnum | OperatingHoursScalarFieldEnum[]
  }

  /**
   * OperatingHours create
   */
  export type OperatingHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a OperatingHours.
     */
    data: XOR<OperatingHoursCreateInput, OperatingHoursUncheckedCreateInput>
  }

  /**
   * OperatingHours createMany
   */
  export type OperatingHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperatingHours.
     */
    data: OperatingHoursCreateManyInput | OperatingHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperatingHours createManyAndReturn
   */
  export type OperatingHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * The data used to create many OperatingHours.
     */
    data: OperatingHoursCreateManyInput | OperatingHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperatingHours update
   */
  export type OperatingHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a OperatingHours.
     */
    data: XOR<OperatingHoursUpdateInput, OperatingHoursUncheckedUpdateInput>
    /**
     * Choose, which OperatingHours to update.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours updateMany
   */
  export type OperatingHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperatingHours.
     */
    data: XOR<OperatingHoursUpdateManyMutationInput, OperatingHoursUncheckedUpdateManyInput>
    /**
     * Filter which OperatingHours to update
     */
    where?: OperatingHoursWhereInput
    /**
     * Limit how many OperatingHours to update.
     */
    limit?: number
  }

  /**
   * OperatingHours updateManyAndReturn
   */
  export type OperatingHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * The data used to update OperatingHours.
     */
    data: XOR<OperatingHoursUpdateManyMutationInput, OperatingHoursUncheckedUpdateManyInput>
    /**
     * Filter which OperatingHours to update
     */
    where?: OperatingHoursWhereInput
    /**
     * Limit how many OperatingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperatingHours upsert
   */
  export type OperatingHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the OperatingHours to update in case it exists.
     */
    where: OperatingHoursWhereUniqueInput
    /**
     * In case the OperatingHours found by the `where` argument doesn't exist, create a new OperatingHours with this data.
     */
    create: XOR<OperatingHoursCreateInput, OperatingHoursUncheckedCreateInput>
    /**
     * In case the OperatingHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatingHoursUpdateInput, OperatingHoursUncheckedUpdateInput>
  }

  /**
   * OperatingHours delete
   */
  export type OperatingHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
    /**
     * Filter which OperatingHours to delete.
     */
    where: OperatingHoursWhereUniqueInput
  }

  /**
   * OperatingHours deleteMany
   */
  export type OperatingHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatingHours to delete
     */
    where?: OperatingHoursWhereInput
    /**
     * Limit how many OperatingHours to delete.
     */
    limit?: number
  }

  /**
   * OperatingHours without action
   */
  export type OperatingHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHours
     */
    select?: OperatingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHours
     */
    omit?: OperatingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHoursInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    distance: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    duration: number | null
    distance: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: string | null
    isGenerated: boolean | null
    duration: number | null
    distance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: string | null
    isGenerated: boolean | null
    duration: number | null
    distance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    isGenerated: number
    duration: number
    distance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    duration?: true
    distance?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    duration?: true
    distance?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isGenerated?: true
    duration?: true
    distance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isGenerated?: true
    duration?: true
    distance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isGenerated?: true
    duration?: true
    distance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    name: string
    description: string | null
    userId: string
    isGenerated: boolean
    duration: number | null
    distance: number | null
    createdAt: Date
    updatedAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isGenerated?: boolean
    duration?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    attractions?: boolean | Route$attractionsArgs<ExtArgs>
    ratings?: boolean | Route$ratingsArgs<ExtArgs>
    RouteToAttraction?: boolean | Route$RouteToAttractionArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isGenerated?: boolean
    duration?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isGenerated?: boolean
    duration?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isGenerated?: boolean
    duration?: boolean
    distance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "isGenerated" | "duration" | "distance" | "createdAt" | "updatedAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    attractions?: boolean | Route$attractionsArgs<ExtArgs>
    ratings?: boolean | Route$ratingsArgs<ExtArgs>
    RouteToAttraction?: boolean | Route$RouteToAttractionArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      attractions: Prisma.$AttractionPayload<ExtArgs>[]
      ratings: Prisma.$RouteRatingPayload<ExtArgs>[]
      RouteToAttraction: Prisma.$RouteToAttractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      userId: string
      isGenerated: boolean
      duration: number | null
      distance: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attractions<T extends Route$attractionsArgs<ExtArgs> = {}>(args?: Subset<T, Route$attractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Route$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Route$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RouteToAttraction<T extends Route$RouteToAttractionArgs<ExtArgs> = {}>(args?: Subset<T, Route$RouteToAttractionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly name: FieldRef<"Route", 'String'>
    readonly description: FieldRef<"Route", 'String'>
    readonly userId: FieldRef<"Route", 'String'>
    readonly isGenerated: FieldRef<"Route", 'Boolean'>
    readonly duration: FieldRef<"Route", 'Float'>
    readonly distance: FieldRef<"Route", 'Float'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.attractions
   */
  export type Route$attractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    where?: AttractionWhereInput
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    cursor?: AttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Route.ratings
   */
  export type Route$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    where?: RouteRatingWhereInput
    orderBy?: RouteRatingOrderByWithRelationInput | RouteRatingOrderByWithRelationInput[]
    cursor?: RouteRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteRatingScalarFieldEnum | RouteRatingScalarFieldEnum[]
  }

  /**
   * Route.RouteToAttraction
   */
  export type Route$RouteToAttractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    where?: RouteToAttractionWhereInput
    orderBy?: RouteToAttractionOrderByWithRelationInput | RouteToAttractionOrderByWithRelationInput[]
    cursor?: RouteToAttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteToAttractionScalarFieldEnum | RouteToAttractionScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RouteRating
   */

  export type AggregateRouteRating = {
    _count: RouteRatingCountAggregateOutputType | null
    _avg: RouteRatingAvgAggregateOutputType | null
    _sum: RouteRatingSumAggregateOutputType | null
    _min: RouteRatingMinAggregateOutputType | null
    _max: RouteRatingMaxAggregateOutputType | null
  }

  export type RouteRatingAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
    rating: number | null
  }

  export type RouteRatingSumAggregateOutputType = {
    id: number | null
    routeId: number | null
    rating: number | null
  }

  export type RouteRatingMinAggregateOutputType = {
    id: number | null
    routeId: number | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteRatingMaxAggregateOutputType = {
    id: number | null
    routeId: number | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteRatingCountAggregateOutputType = {
    id: number
    routeId: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteRatingAvgAggregateInputType = {
    id?: true
    routeId?: true
    rating?: true
  }

  export type RouteRatingSumAggregateInputType = {
    id?: true
    routeId?: true
    rating?: true
  }

  export type RouteRatingMinAggregateInputType = {
    id?: true
    routeId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteRatingMaxAggregateInputType = {
    id?: true
    routeId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteRatingCountAggregateInputType = {
    id?: true
    routeId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteRating to aggregate.
     */
    where?: RouteRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteRatings to fetch.
     */
    orderBy?: RouteRatingOrderByWithRelationInput | RouteRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteRatings
    **/
    _count?: true | RouteRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteRatingMaxAggregateInputType
  }

  export type GetRouteRatingAggregateType<T extends RouteRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteRating[P]>
      : GetScalarType<T[P], AggregateRouteRating[P]>
  }




  export type RouteRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteRatingWhereInput
    orderBy?: RouteRatingOrderByWithAggregationInput | RouteRatingOrderByWithAggregationInput[]
    by: RouteRatingScalarFieldEnum[] | RouteRatingScalarFieldEnum
    having?: RouteRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteRatingCountAggregateInputType | true
    _avg?: RouteRatingAvgAggregateInputType
    _sum?: RouteRatingSumAggregateInputType
    _min?: RouteRatingMinAggregateInputType
    _max?: RouteRatingMaxAggregateInputType
  }

  export type RouteRatingGroupByOutputType = {
    id: number
    routeId: number
    userId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: RouteRatingCountAggregateOutputType | null
    _avg: RouteRatingAvgAggregateOutputType | null
    _sum: RouteRatingSumAggregateOutputType | null
    _min: RouteRatingMinAggregateOutputType | null
    _max: RouteRatingMaxAggregateOutputType | null
  }

  type GetRouteRatingGroupByPayload<T extends RouteRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteRatingGroupByOutputType[P]>
            : GetScalarType<T[P], RouteRatingGroupByOutputType[P]>
        }
      >
    >


  export type RouteRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeRating"]>

  export type RouteRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeRating"]>

  export type RouteRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeRating"]>

  export type RouteRatingSelectScalar = {
    id?: boolean
    routeId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "userId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["routeRating"]>
  export type RouteRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RouteRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RouteRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RouteRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteRating"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: number
      userId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routeRating"]>
    composites: {}
  }

  type RouteRatingGetPayload<S extends boolean | null | undefined | RouteRatingDefaultArgs> = $Result.GetResult<Prisma.$RouteRatingPayload, S>

  type RouteRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteRatingCountAggregateInputType | true
    }

  export interface RouteRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteRating'], meta: { name: 'RouteRating' } }
    /**
     * Find zero or one RouteRating that matches the filter.
     * @param {RouteRatingFindUniqueArgs} args - Arguments to find a RouteRating
     * @example
     * // Get one RouteRating
     * const routeRating = await prisma.routeRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteRatingFindUniqueArgs>(args: SelectSubset<T, RouteRatingFindUniqueArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteRatingFindUniqueOrThrowArgs} args - Arguments to find a RouteRating
     * @example
     * // Get one RouteRating
     * const routeRating = await prisma.routeRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingFindFirstArgs} args - Arguments to find a RouteRating
     * @example
     * // Get one RouteRating
     * const routeRating = await prisma.routeRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteRatingFindFirstArgs>(args?: SelectSubset<T, RouteRatingFindFirstArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingFindFirstOrThrowArgs} args - Arguments to find a RouteRating
     * @example
     * // Get one RouteRating
     * const routeRating = await prisma.routeRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteRatings
     * const routeRatings = await prisma.routeRating.findMany()
     * 
     * // Get first 10 RouteRatings
     * const routeRatings = await prisma.routeRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeRatingWithIdOnly = await prisma.routeRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteRatingFindManyArgs>(args?: SelectSubset<T, RouteRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteRating.
     * @param {RouteRatingCreateArgs} args - Arguments to create a RouteRating.
     * @example
     * // Create one RouteRating
     * const RouteRating = await prisma.routeRating.create({
     *   data: {
     *     // ... data to create a RouteRating
     *   }
     * })
     * 
     */
    create<T extends RouteRatingCreateArgs>(args: SelectSubset<T, RouteRatingCreateArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteRatings.
     * @param {RouteRatingCreateManyArgs} args - Arguments to create many RouteRatings.
     * @example
     * // Create many RouteRatings
     * const routeRating = await prisma.routeRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteRatingCreateManyArgs>(args?: SelectSubset<T, RouteRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteRatings and returns the data saved in the database.
     * @param {RouteRatingCreateManyAndReturnArgs} args - Arguments to create many RouteRatings.
     * @example
     * // Create many RouteRatings
     * const routeRating = await prisma.routeRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteRatings and only return the `id`
     * const routeRatingWithIdOnly = await prisma.routeRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteRating.
     * @param {RouteRatingDeleteArgs} args - Arguments to delete one RouteRating.
     * @example
     * // Delete one RouteRating
     * const RouteRating = await prisma.routeRating.delete({
     *   where: {
     *     // ... filter to delete one RouteRating
     *   }
     * })
     * 
     */
    delete<T extends RouteRatingDeleteArgs>(args: SelectSubset<T, RouteRatingDeleteArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteRating.
     * @param {RouteRatingUpdateArgs} args - Arguments to update one RouteRating.
     * @example
     * // Update one RouteRating
     * const routeRating = await prisma.routeRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteRatingUpdateArgs>(args: SelectSubset<T, RouteRatingUpdateArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteRatings.
     * @param {RouteRatingDeleteManyArgs} args - Arguments to filter RouteRatings to delete.
     * @example
     * // Delete a few RouteRatings
     * const { count } = await prisma.routeRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteRatingDeleteManyArgs>(args?: SelectSubset<T, RouteRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteRatings
     * const routeRating = await prisma.routeRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteRatingUpdateManyArgs>(args: SelectSubset<T, RouteRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteRatings and returns the data updated in the database.
     * @param {RouteRatingUpdateManyAndReturnArgs} args - Arguments to update many RouteRatings.
     * @example
     * // Update many RouteRatings
     * const routeRating = await prisma.routeRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteRatings and only return the `id`
     * const routeRatingWithIdOnly = await prisma.routeRating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteRating.
     * @param {RouteRatingUpsertArgs} args - Arguments to update or create a RouteRating.
     * @example
     * // Update or create a RouteRating
     * const routeRating = await prisma.routeRating.upsert({
     *   create: {
     *     // ... data to create a RouteRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteRating we want to update
     *   }
     * })
     */
    upsert<T extends RouteRatingUpsertArgs>(args: SelectSubset<T, RouteRatingUpsertArgs<ExtArgs>>): Prisma__RouteRatingClient<$Result.GetResult<Prisma.$RouteRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingCountArgs} args - Arguments to filter RouteRatings to count.
     * @example
     * // Count the number of RouteRatings
     * const count = await prisma.routeRating.count({
     *   where: {
     *     // ... the filter for the RouteRatings we want to count
     *   }
     * })
    **/
    count<T extends RouteRatingCountArgs>(
      args?: Subset<T, RouteRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteRatingAggregateArgs>(args: Subset<T, RouteRatingAggregateArgs>): Prisma.PrismaPromise<GetRouteRatingAggregateType<T>>

    /**
     * Group by RouteRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteRatingGroupByArgs['orderBy'] }
        : { orderBy?: RouteRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteRating model
   */
  readonly fields: RouteRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteRating model
   */
  interface RouteRatingFieldRefs {
    readonly id: FieldRef<"RouteRating", 'Int'>
    readonly routeId: FieldRef<"RouteRating", 'Int'>
    readonly userId: FieldRef<"RouteRating", 'String'>
    readonly rating: FieldRef<"RouteRating", 'Int'>
    readonly comment: FieldRef<"RouteRating", 'String'>
    readonly createdAt: FieldRef<"RouteRating", 'DateTime'>
    readonly updatedAt: FieldRef<"RouteRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RouteRating findUnique
   */
  export type RouteRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * Filter, which RouteRating to fetch.
     */
    where: RouteRatingWhereUniqueInput
  }

  /**
   * RouteRating findUniqueOrThrow
   */
  export type RouteRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * Filter, which RouteRating to fetch.
     */
    where: RouteRatingWhereUniqueInput
  }

  /**
   * RouteRating findFirst
   */
  export type RouteRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * Filter, which RouteRating to fetch.
     */
    where?: RouteRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteRatings to fetch.
     */
    orderBy?: RouteRatingOrderByWithRelationInput | RouteRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteRatings.
     */
    cursor?: RouteRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteRatings.
     */
    distinct?: RouteRatingScalarFieldEnum | RouteRatingScalarFieldEnum[]
  }

  /**
   * RouteRating findFirstOrThrow
   */
  export type RouteRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * Filter, which RouteRating to fetch.
     */
    where?: RouteRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteRatings to fetch.
     */
    orderBy?: RouteRatingOrderByWithRelationInput | RouteRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteRatings.
     */
    cursor?: RouteRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteRatings.
     */
    distinct?: RouteRatingScalarFieldEnum | RouteRatingScalarFieldEnum[]
  }

  /**
   * RouteRating findMany
   */
  export type RouteRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * Filter, which RouteRatings to fetch.
     */
    where?: RouteRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteRatings to fetch.
     */
    orderBy?: RouteRatingOrderByWithRelationInput | RouteRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteRatings.
     */
    cursor?: RouteRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteRatings.
     */
    skip?: number
    distinct?: RouteRatingScalarFieldEnum | RouteRatingScalarFieldEnum[]
  }

  /**
   * RouteRating create
   */
  export type RouteRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteRating.
     */
    data: XOR<RouteRatingCreateInput, RouteRatingUncheckedCreateInput>
  }

  /**
   * RouteRating createMany
   */
  export type RouteRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteRatings.
     */
    data: RouteRatingCreateManyInput | RouteRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteRating createManyAndReturn
   */
  export type RouteRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * The data used to create many RouteRatings.
     */
    data: RouteRatingCreateManyInput | RouteRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteRating update
   */
  export type RouteRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteRating.
     */
    data: XOR<RouteRatingUpdateInput, RouteRatingUncheckedUpdateInput>
    /**
     * Choose, which RouteRating to update.
     */
    where: RouteRatingWhereUniqueInput
  }

  /**
   * RouteRating updateMany
   */
  export type RouteRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteRatings.
     */
    data: XOR<RouteRatingUpdateManyMutationInput, RouteRatingUncheckedUpdateManyInput>
    /**
     * Filter which RouteRatings to update
     */
    where?: RouteRatingWhereInput
    /**
     * Limit how many RouteRatings to update.
     */
    limit?: number
  }

  /**
   * RouteRating updateManyAndReturn
   */
  export type RouteRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * The data used to update RouteRatings.
     */
    data: XOR<RouteRatingUpdateManyMutationInput, RouteRatingUncheckedUpdateManyInput>
    /**
     * Filter which RouteRatings to update
     */
    where?: RouteRatingWhereInput
    /**
     * Limit how many RouteRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteRating upsert
   */
  export type RouteRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteRating to update in case it exists.
     */
    where: RouteRatingWhereUniqueInput
    /**
     * In case the RouteRating found by the `where` argument doesn't exist, create a new RouteRating with this data.
     */
    create: XOR<RouteRatingCreateInput, RouteRatingUncheckedCreateInput>
    /**
     * In case the RouteRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteRatingUpdateInput, RouteRatingUncheckedUpdateInput>
  }

  /**
   * RouteRating delete
   */
  export type RouteRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
    /**
     * Filter which RouteRating to delete.
     */
    where: RouteRatingWhereUniqueInput
  }

  /**
   * RouteRating deleteMany
   */
  export type RouteRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteRatings to delete
     */
    where?: RouteRatingWhereInput
    /**
     * Limit how many RouteRatings to delete.
     */
    limit?: number
  }

  /**
   * RouteRating without action
   */
  export type RouteRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteRating
     */
    select?: RouteRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteRating
     */
    omit?: RouteRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteRatingInclude<ExtArgs> | null
  }


  /**
   * Model AttractionToTag
   */

  export type AggregateAttractionToTag = {
    _count: AttractionToTagCountAggregateOutputType | null
    _avg: AttractionToTagAvgAggregateOutputType | null
    _sum: AttractionToTagSumAggregateOutputType | null
    _min: AttractionToTagMinAggregateOutputType | null
    _max: AttractionToTagMaxAggregateOutputType | null
  }

  export type AttractionToTagAvgAggregateOutputType = {
    attractionId: number | null
    tagId: number | null
  }

  export type AttractionToTagSumAggregateOutputType = {
    attractionId: number | null
    tagId: number | null
  }

  export type AttractionToTagMinAggregateOutputType = {
    attractionId: number | null
    tagId: number | null
  }

  export type AttractionToTagMaxAggregateOutputType = {
    attractionId: number | null
    tagId: number | null
  }

  export type AttractionToTagCountAggregateOutputType = {
    attractionId: number
    tagId: number
    _all: number
  }


  export type AttractionToTagAvgAggregateInputType = {
    attractionId?: true
    tagId?: true
  }

  export type AttractionToTagSumAggregateInputType = {
    attractionId?: true
    tagId?: true
  }

  export type AttractionToTagMinAggregateInputType = {
    attractionId?: true
    tagId?: true
  }

  export type AttractionToTagMaxAggregateInputType = {
    attractionId?: true
    tagId?: true
  }

  export type AttractionToTagCountAggregateInputType = {
    attractionId?: true
    tagId?: true
    _all?: true
  }

  export type AttractionToTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttractionToTag to aggregate.
     */
    where?: AttractionToTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionToTags to fetch.
     */
    orderBy?: AttractionToTagOrderByWithRelationInput | AttractionToTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttractionToTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionToTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionToTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttractionToTags
    **/
    _count?: true | AttractionToTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttractionToTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttractionToTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttractionToTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttractionToTagMaxAggregateInputType
  }

  export type GetAttractionToTagAggregateType<T extends AttractionToTagAggregateArgs> = {
        [P in keyof T & keyof AggregateAttractionToTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttractionToTag[P]>
      : GetScalarType<T[P], AggregateAttractionToTag[P]>
  }




  export type AttractionToTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionToTagWhereInput
    orderBy?: AttractionToTagOrderByWithAggregationInput | AttractionToTagOrderByWithAggregationInput[]
    by: AttractionToTagScalarFieldEnum[] | AttractionToTagScalarFieldEnum
    having?: AttractionToTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttractionToTagCountAggregateInputType | true
    _avg?: AttractionToTagAvgAggregateInputType
    _sum?: AttractionToTagSumAggregateInputType
    _min?: AttractionToTagMinAggregateInputType
    _max?: AttractionToTagMaxAggregateInputType
  }

  export type AttractionToTagGroupByOutputType = {
    attractionId: number
    tagId: number
    _count: AttractionToTagCountAggregateOutputType | null
    _avg: AttractionToTagAvgAggregateOutputType | null
    _sum: AttractionToTagSumAggregateOutputType | null
    _min: AttractionToTagMinAggregateOutputType | null
    _max: AttractionToTagMaxAggregateOutputType | null
  }

  type GetAttractionToTagGroupByPayload<T extends AttractionToTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttractionToTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttractionToTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttractionToTagGroupByOutputType[P]>
            : GetScalarType<T[P], AttractionToTagGroupByOutputType[P]>
        }
      >
    >


  export type AttractionToTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attractionId?: boolean
    tagId?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attractionToTag"]>

  export type AttractionToTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attractionId?: boolean
    tagId?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attractionToTag"]>

  export type AttractionToTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attractionId?: boolean
    tagId?: boolean
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attractionToTag"]>

  export type AttractionToTagSelectScalar = {
    attractionId?: boolean
    tagId?: boolean
  }

  export type AttractionToTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attractionId" | "tagId", ExtArgs["result"]["attractionToTag"]>
  export type AttractionToTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type AttractionToTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type AttractionToTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $AttractionToTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttractionToTag"
    objects: {
      attraction: Prisma.$AttractionPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attractionId: number
      tagId: number
    }, ExtArgs["result"]["attractionToTag"]>
    composites: {}
  }

  type AttractionToTagGetPayload<S extends boolean | null | undefined | AttractionToTagDefaultArgs> = $Result.GetResult<Prisma.$AttractionToTagPayload, S>

  type AttractionToTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttractionToTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttractionToTagCountAggregateInputType | true
    }

  export interface AttractionToTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttractionToTag'], meta: { name: 'AttractionToTag' } }
    /**
     * Find zero or one AttractionToTag that matches the filter.
     * @param {AttractionToTagFindUniqueArgs} args - Arguments to find a AttractionToTag
     * @example
     * // Get one AttractionToTag
     * const attractionToTag = await prisma.attractionToTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttractionToTagFindUniqueArgs>(args: SelectSubset<T, AttractionToTagFindUniqueArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttractionToTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttractionToTagFindUniqueOrThrowArgs} args - Arguments to find a AttractionToTag
     * @example
     * // Get one AttractionToTag
     * const attractionToTag = await prisma.attractionToTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttractionToTagFindUniqueOrThrowArgs>(args: SelectSubset<T, AttractionToTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttractionToTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagFindFirstArgs} args - Arguments to find a AttractionToTag
     * @example
     * // Get one AttractionToTag
     * const attractionToTag = await prisma.attractionToTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttractionToTagFindFirstArgs>(args?: SelectSubset<T, AttractionToTagFindFirstArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttractionToTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagFindFirstOrThrowArgs} args - Arguments to find a AttractionToTag
     * @example
     * // Get one AttractionToTag
     * const attractionToTag = await prisma.attractionToTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttractionToTagFindFirstOrThrowArgs>(args?: SelectSubset<T, AttractionToTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttractionToTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttractionToTags
     * const attractionToTags = await prisma.attractionToTag.findMany()
     * 
     * // Get first 10 AttractionToTags
     * const attractionToTags = await prisma.attractionToTag.findMany({ take: 10 })
     * 
     * // Only select the `attractionId`
     * const attractionToTagWithAttractionIdOnly = await prisma.attractionToTag.findMany({ select: { attractionId: true } })
     * 
     */
    findMany<T extends AttractionToTagFindManyArgs>(args?: SelectSubset<T, AttractionToTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttractionToTag.
     * @param {AttractionToTagCreateArgs} args - Arguments to create a AttractionToTag.
     * @example
     * // Create one AttractionToTag
     * const AttractionToTag = await prisma.attractionToTag.create({
     *   data: {
     *     // ... data to create a AttractionToTag
     *   }
     * })
     * 
     */
    create<T extends AttractionToTagCreateArgs>(args: SelectSubset<T, AttractionToTagCreateArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttractionToTags.
     * @param {AttractionToTagCreateManyArgs} args - Arguments to create many AttractionToTags.
     * @example
     * // Create many AttractionToTags
     * const attractionToTag = await prisma.attractionToTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttractionToTagCreateManyArgs>(args?: SelectSubset<T, AttractionToTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttractionToTags and returns the data saved in the database.
     * @param {AttractionToTagCreateManyAndReturnArgs} args - Arguments to create many AttractionToTags.
     * @example
     * // Create many AttractionToTags
     * const attractionToTag = await prisma.attractionToTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttractionToTags and only return the `attractionId`
     * const attractionToTagWithAttractionIdOnly = await prisma.attractionToTag.createManyAndReturn({
     *   select: { attractionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttractionToTagCreateManyAndReturnArgs>(args?: SelectSubset<T, AttractionToTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttractionToTag.
     * @param {AttractionToTagDeleteArgs} args - Arguments to delete one AttractionToTag.
     * @example
     * // Delete one AttractionToTag
     * const AttractionToTag = await prisma.attractionToTag.delete({
     *   where: {
     *     // ... filter to delete one AttractionToTag
     *   }
     * })
     * 
     */
    delete<T extends AttractionToTagDeleteArgs>(args: SelectSubset<T, AttractionToTagDeleteArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttractionToTag.
     * @param {AttractionToTagUpdateArgs} args - Arguments to update one AttractionToTag.
     * @example
     * // Update one AttractionToTag
     * const attractionToTag = await prisma.attractionToTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttractionToTagUpdateArgs>(args: SelectSubset<T, AttractionToTagUpdateArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttractionToTags.
     * @param {AttractionToTagDeleteManyArgs} args - Arguments to filter AttractionToTags to delete.
     * @example
     * // Delete a few AttractionToTags
     * const { count } = await prisma.attractionToTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttractionToTagDeleteManyArgs>(args?: SelectSubset<T, AttractionToTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttractionToTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttractionToTags
     * const attractionToTag = await prisma.attractionToTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttractionToTagUpdateManyArgs>(args: SelectSubset<T, AttractionToTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttractionToTags and returns the data updated in the database.
     * @param {AttractionToTagUpdateManyAndReturnArgs} args - Arguments to update many AttractionToTags.
     * @example
     * // Update many AttractionToTags
     * const attractionToTag = await prisma.attractionToTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttractionToTags and only return the `attractionId`
     * const attractionToTagWithAttractionIdOnly = await prisma.attractionToTag.updateManyAndReturn({
     *   select: { attractionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttractionToTagUpdateManyAndReturnArgs>(args: SelectSubset<T, AttractionToTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttractionToTag.
     * @param {AttractionToTagUpsertArgs} args - Arguments to update or create a AttractionToTag.
     * @example
     * // Update or create a AttractionToTag
     * const attractionToTag = await prisma.attractionToTag.upsert({
     *   create: {
     *     // ... data to create a AttractionToTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttractionToTag we want to update
     *   }
     * })
     */
    upsert<T extends AttractionToTagUpsertArgs>(args: SelectSubset<T, AttractionToTagUpsertArgs<ExtArgs>>): Prisma__AttractionToTagClient<$Result.GetResult<Prisma.$AttractionToTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttractionToTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagCountArgs} args - Arguments to filter AttractionToTags to count.
     * @example
     * // Count the number of AttractionToTags
     * const count = await prisma.attractionToTag.count({
     *   where: {
     *     // ... the filter for the AttractionToTags we want to count
     *   }
     * })
    **/
    count<T extends AttractionToTagCountArgs>(
      args?: Subset<T, AttractionToTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttractionToTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttractionToTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttractionToTagAggregateArgs>(args: Subset<T, AttractionToTagAggregateArgs>): Prisma.PrismaPromise<GetAttractionToTagAggregateType<T>>

    /**
     * Group by AttractionToTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionToTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttractionToTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttractionToTagGroupByArgs['orderBy'] }
        : { orderBy?: AttractionToTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttractionToTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttractionToTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttractionToTag model
   */
  readonly fields: AttractionToTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttractionToTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttractionToTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attraction<T extends AttractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttractionDefaultArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttractionToTag model
   */
  interface AttractionToTagFieldRefs {
    readonly attractionId: FieldRef<"AttractionToTag", 'Int'>
    readonly tagId: FieldRef<"AttractionToTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AttractionToTag findUnique
   */
  export type AttractionToTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * Filter, which AttractionToTag to fetch.
     */
    where: AttractionToTagWhereUniqueInput
  }

  /**
   * AttractionToTag findUniqueOrThrow
   */
  export type AttractionToTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * Filter, which AttractionToTag to fetch.
     */
    where: AttractionToTagWhereUniqueInput
  }

  /**
   * AttractionToTag findFirst
   */
  export type AttractionToTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * Filter, which AttractionToTag to fetch.
     */
    where?: AttractionToTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionToTags to fetch.
     */
    orderBy?: AttractionToTagOrderByWithRelationInput | AttractionToTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttractionToTags.
     */
    cursor?: AttractionToTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionToTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionToTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttractionToTags.
     */
    distinct?: AttractionToTagScalarFieldEnum | AttractionToTagScalarFieldEnum[]
  }

  /**
   * AttractionToTag findFirstOrThrow
   */
  export type AttractionToTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * Filter, which AttractionToTag to fetch.
     */
    where?: AttractionToTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionToTags to fetch.
     */
    orderBy?: AttractionToTagOrderByWithRelationInput | AttractionToTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttractionToTags.
     */
    cursor?: AttractionToTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionToTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionToTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttractionToTags.
     */
    distinct?: AttractionToTagScalarFieldEnum | AttractionToTagScalarFieldEnum[]
  }

  /**
   * AttractionToTag findMany
   */
  export type AttractionToTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * Filter, which AttractionToTags to fetch.
     */
    where?: AttractionToTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionToTags to fetch.
     */
    orderBy?: AttractionToTagOrderByWithRelationInput | AttractionToTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttractionToTags.
     */
    cursor?: AttractionToTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionToTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionToTags.
     */
    skip?: number
    distinct?: AttractionToTagScalarFieldEnum | AttractionToTagScalarFieldEnum[]
  }

  /**
   * AttractionToTag create
   */
  export type AttractionToTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * The data needed to create a AttractionToTag.
     */
    data: XOR<AttractionToTagCreateInput, AttractionToTagUncheckedCreateInput>
  }

  /**
   * AttractionToTag createMany
   */
  export type AttractionToTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttractionToTags.
     */
    data: AttractionToTagCreateManyInput | AttractionToTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttractionToTag createManyAndReturn
   */
  export type AttractionToTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * The data used to create many AttractionToTags.
     */
    data: AttractionToTagCreateManyInput | AttractionToTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttractionToTag update
   */
  export type AttractionToTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * The data needed to update a AttractionToTag.
     */
    data: XOR<AttractionToTagUpdateInput, AttractionToTagUncheckedUpdateInput>
    /**
     * Choose, which AttractionToTag to update.
     */
    where: AttractionToTagWhereUniqueInput
  }

  /**
   * AttractionToTag updateMany
   */
  export type AttractionToTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttractionToTags.
     */
    data: XOR<AttractionToTagUpdateManyMutationInput, AttractionToTagUncheckedUpdateManyInput>
    /**
     * Filter which AttractionToTags to update
     */
    where?: AttractionToTagWhereInput
    /**
     * Limit how many AttractionToTags to update.
     */
    limit?: number
  }

  /**
   * AttractionToTag updateManyAndReturn
   */
  export type AttractionToTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * The data used to update AttractionToTags.
     */
    data: XOR<AttractionToTagUpdateManyMutationInput, AttractionToTagUncheckedUpdateManyInput>
    /**
     * Filter which AttractionToTags to update
     */
    where?: AttractionToTagWhereInput
    /**
     * Limit how many AttractionToTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttractionToTag upsert
   */
  export type AttractionToTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * The filter to search for the AttractionToTag to update in case it exists.
     */
    where: AttractionToTagWhereUniqueInput
    /**
     * In case the AttractionToTag found by the `where` argument doesn't exist, create a new AttractionToTag with this data.
     */
    create: XOR<AttractionToTagCreateInput, AttractionToTagUncheckedCreateInput>
    /**
     * In case the AttractionToTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttractionToTagUpdateInput, AttractionToTagUncheckedUpdateInput>
  }

  /**
   * AttractionToTag delete
   */
  export type AttractionToTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
    /**
     * Filter which AttractionToTag to delete.
     */
    where: AttractionToTagWhereUniqueInput
  }

  /**
   * AttractionToTag deleteMany
   */
  export type AttractionToTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttractionToTags to delete
     */
    where?: AttractionToTagWhereInput
    /**
     * Limit how many AttractionToTags to delete.
     */
    limit?: number
  }

  /**
   * AttractionToTag without action
   */
  export type AttractionToTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionToTag
     */
    select?: AttractionToTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttractionToTag
     */
    omit?: AttractionToTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionToTagInclude<ExtArgs> | null
  }


  /**
   * Model RouteToAttraction
   */

  export type AggregateRouteToAttraction = {
    _count: RouteToAttractionCountAggregateOutputType | null
    _avg: RouteToAttractionAvgAggregateOutputType | null
    _sum: RouteToAttractionSumAggregateOutputType | null
    _min: RouteToAttractionMinAggregateOutputType | null
    _max: RouteToAttractionMaxAggregateOutputType | null
  }

  export type RouteToAttractionAvgAggregateOutputType = {
    routeId: number | null
    attractionId: number | null
  }

  export type RouteToAttractionSumAggregateOutputType = {
    routeId: number | null
    attractionId: number | null
  }

  export type RouteToAttractionMinAggregateOutputType = {
    routeId: number | null
    attractionId: number | null
  }

  export type RouteToAttractionMaxAggregateOutputType = {
    routeId: number | null
    attractionId: number | null
  }

  export type RouteToAttractionCountAggregateOutputType = {
    routeId: number
    attractionId: number
    _all: number
  }


  export type RouteToAttractionAvgAggregateInputType = {
    routeId?: true
    attractionId?: true
  }

  export type RouteToAttractionSumAggregateInputType = {
    routeId?: true
    attractionId?: true
  }

  export type RouteToAttractionMinAggregateInputType = {
    routeId?: true
    attractionId?: true
  }

  export type RouteToAttractionMaxAggregateInputType = {
    routeId?: true
    attractionId?: true
  }

  export type RouteToAttractionCountAggregateInputType = {
    routeId?: true
    attractionId?: true
    _all?: true
  }

  export type RouteToAttractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteToAttraction to aggregate.
     */
    where?: RouteToAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteToAttractions to fetch.
     */
    orderBy?: RouteToAttractionOrderByWithRelationInput | RouteToAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteToAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteToAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteToAttractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteToAttractions
    **/
    _count?: true | RouteToAttractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteToAttractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteToAttractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteToAttractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteToAttractionMaxAggregateInputType
  }

  export type GetRouteToAttractionAggregateType<T extends RouteToAttractionAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteToAttraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteToAttraction[P]>
      : GetScalarType<T[P], AggregateRouteToAttraction[P]>
  }




  export type RouteToAttractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteToAttractionWhereInput
    orderBy?: RouteToAttractionOrderByWithAggregationInput | RouteToAttractionOrderByWithAggregationInput[]
    by: RouteToAttractionScalarFieldEnum[] | RouteToAttractionScalarFieldEnum
    having?: RouteToAttractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteToAttractionCountAggregateInputType | true
    _avg?: RouteToAttractionAvgAggregateInputType
    _sum?: RouteToAttractionSumAggregateInputType
    _min?: RouteToAttractionMinAggregateInputType
    _max?: RouteToAttractionMaxAggregateInputType
  }

  export type RouteToAttractionGroupByOutputType = {
    routeId: number
    attractionId: number
    _count: RouteToAttractionCountAggregateOutputType | null
    _avg: RouteToAttractionAvgAggregateOutputType | null
    _sum: RouteToAttractionSumAggregateOutputType | null
    _min: RouteToAttractionMinAggregateOutputType | null
    _max: RouteToAttractionMaxAggregateOutputType | null
  }

  type GetRouteToAttractionGroupByPayload<T extends RouteToAttractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteToAttractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteToAttractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteToAttractionGroupByOutputType[P]>
            : GetScalarType<T[P], RouteToAttractionGroupByOutputType[P]>
        }
      >
    >


  export type RouteToAttractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    attractionId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeToAttraction"]>

  export type RouteToAttractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    attractionId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeToAttraction"]>

  export type RouteToAttractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    routeId?: boolean
    attractionId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeToAttraction"]>

  export type RouteToAttractionSelectScalar = {
    routeId?: boolean
    attractionId?: boolean
  }

  export type RouteToAttractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"routeId" | "attractionId", ExtArgs["result"]["routeToAttraction"]>
  export type RouteToAttractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }
  export type RouteToAttractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }
  export type RouteToAttractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    attraction?: boolean | AttractionDefaultArgs<ExtArgs>
  }

  export type $RouteToAttractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteToAttraction"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      attraction: Prisma.$AttractionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      routeId: number
      attractionId: number
    }, ExtArgs["result"]["routeToAttraction"]>
    composites: {}
  }

  type RouteToAttractionGetPayload<S extends boolean | null | undefined | RouteToAttractionDefaultArgs> = $Result.GetResult<Prisma.$RouteToAttractionPayload, S>

  type RouteToAttractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteToAttractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteToAttractionCountAggregateInputType | true
    }

  export interface RouteToAttractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteToAttraction'], meta: { name: 'RouteToAttraction' } }
    /**
     * Find zero or one RouteToAttraction that matches the filter.
     * @param {RouteToAttractionFindUniqueArgs} args - Arguments to find a RouteToAttraction
     * @example
     * // Get one RouteToAttraction
     * const routeToAttraction = await prisma.routeToAttraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteToAttractionFindUniqueArgs>(args: SelectSubset<T, RouteToAttractionFindUniqueArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteToAttraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteToAttractionFindUniqueOrThrowArgs} args - Arguments to find a RouteToAttraction
     * @example
     * // Get one RouteToAttraction
     * const routeToAttraction = await prisma.routeToAttraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteToAttractionFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteToAttractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteToAttraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionFindFirstArgs} args - Arguments to find a RouteToAttraction
     * @example
     * // Get one RouteToAttraction
     * const routeToAttraction = await prisma.routeToAttraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteToAttractionFindFirstArgs>(args?: SelectSubset<T, RouteToAttractionFindFirstArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteToAttraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionFindFirstOrThrowArgs} args - Arguments to find a RouteToAttraction
     * @example
     * // Get one RouteToAttraction
     * const routeToAttraction = await prisma.routeToAttraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteToAttractionFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteToAttractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteToAttractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteToAttractions
     * const routeToAttractions = await prisma.routeToAttraction.findMany()
     * 
     * // Get first 10 RouteToAttractions
     * const routeToAttractions = await prisma.routeToAttraction.findMany({ take: 10 })
     * 
     * // Only select the `routeId`
     * const routeToAttractionWithRouteIdOnly = await prisma.routeToAttraction.findMany({ select: { routeId: true } })
     * 
     */
    findMany<T extends RouteToAttractionFindManyArgs>(args?: SelectSubset<T, RouteToAttractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteToAttraction.
     * @param {RouteToAttractionCreateArgs} args - Arguments to create a RouteToAttraction.
     * @example
     * // Create one RouteToAttraction
     * const RouteToAttraction = await prisma.routeToAttraction.create({
     *   data: {
     *     // ... data to create a RouteToAttraction
     *   }
     * })
     * 
     */
    create<T extends RouteToAttractionCreateArgs>(args: SelectSubset<T, RouteToAttractionCreateArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteToAttractions.
     * @param {RouteToAttractionCreateManyArgs} args - Arguments to create many RouteToAttractions.
     * @example
     * // Create many RouteToAttractions
     * const routeToAttraction = await prisma.routeToAttraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteToAttractionCreateManyArgs>(args?: SelectSubset<T, RouteToAttractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteToAttractions and returns the data saved in the database.
     * @param {RouteToAttractionCreateManyAndReturnArgs} args - Arguments to create many RouteToAttractions.
     * @example
     * // Create many RouteToAttractions
     * const routeToAttraction = await prisma.routeToAttraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteToAttractions and only return the `routeId`
     * const routeToAttractionWithRouteIdOnly = await prisma.routeToAttraction.createManyAndReturn({
     *   select: { routeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteToAttractionCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteToAttractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteToAttraction.
     * @param {RouteToAttractionDeleteArgs} args - Arguments to delete one RouteToAttraction.
     * @example
     * // Delete one RouteToAttraction
     * const RouteToAttraction = await prisma.routeToAttraction.delete({
     *   where: {
     *     // ... filter to delete one RouteToAttraction
     *   }
     * })
     * 
     */
    delete<T extends RouteToAttractionDeleteArgs>(args: SelectSubset<T, RouteToAttractionDeleteArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteToAttraction.
     * @param {RouteToAttractionUpdateArgs} args - Arguments to update one RouteToAttraction.
     * @example
     * // Update one RouteToAttraction
     * const routeToAttraction = await prisma.routeToAttraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteToAttractionUpdateArgs>(args: SelectSubset<T, RouteToAttractionUpdateArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteToAttractions.
     * @param {RouteToAttractionDeleteManyArgs} args - Arguments to filter RouteToAttractions to delete.
     * @example
     * // Delete a few RouteToAttractions
     * const { count } = await prisma.routeToAttraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteToAttractionDeleteManyArgs>(args?: SelectSubset<T, RouteToAttractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteToAttractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteToAttractions
     * const routeToAttraction = await prisma.routeToAttraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteToAttractionUpdateManyArgs>(args: SelectSubset<T, RouteToAttractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteToAttractions and returns the data updated in the database.
     * @param {RouteToAttractionUpdateManyAndReturnArgs} args - Arguments to update many RouteToAttractions.
     * @example
     * // Update many RouteToAttractions
     * const routeToAttraction = await prisma.routeToAttraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteToAttractions and only return the `routeId`
     * const routeToAttractionWithRouteIdOnly = await prisma.routeToAttraction.updateManyAndReturn({
     *   select: { routeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteToAttractionUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteToAttractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteToAttraction.
     * @param {RouteToAttractionUpsertArgs} args - Arguments to update or create a RouteToAttraction.
     * @example
     * // Update or create a RouteToAttraction
     * const routeToAttraction = await prisma.routeToAttraction.upsert({
     *   create: {
     *     // ... data to create a RouteToAttraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteToAttraction we want to update
     *   }
     * })
     */
    upsert<T extends RouteToAttractionUpsertArgs>(args: SelectSubset<T, RouteToAttractionUpsertArgs<ExtArgs>>): Prisma__RouteToAttractionClient<$Result.GetResult<Prisma.$RouteToAttractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteToAttractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionCountArgs} args - Arguments to filter RouteToAttractions to count.
     * @example
     * // Count the number of RouteToAttractions
     * const count = await prisma.routeToAttraction.count({
     *   where: {
     *     // ... the filter for the RouteToAttractions we want to count
     *   }
     * })
    **/
    count<T extends RouteToAttractionCountArgs>(
      args?: Subset<T, RouteToAttractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteToAttractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteToAttraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteToAttractionAggregateArgs>(args: Subset<T, RouteToAttractionAggregateArgs>): Prisma.PrismaPromise<GetRouteToAttractionAggregateType<T>>

    /**
     * Group by RouteToAttraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteToAttractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteToAttractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteToAttractionGroupByArgs['orderBy'] }
        : { orderBy?: RouteToAttractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteToAttractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteToAttractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteToAttraction model
   */
  readonly fields: RouteToAttractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteToAttraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteToAttractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attraction<T extends AttractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttractionDefaultArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteToAttraction model
   */
  interface RouteToAttractionFieldRefs {
    readonly routeId: FieldRef<"RouteToAttraction", 'Int'>
    readonly attractionId: FieldRef<"RouteToAttraction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RouteToAttraction findUnique
   */
  export type RouteToAttractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * Filter, which RouteToAttraction to fetch.
     */
    where: RouteToAttractionWhereUniqueInput
  }

  /**
   * RouteToAttraction findUniqueOrThrow
   */
  export type RouteToAttractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * Filter, which RouteToAttraction to fetch.
     */
    where: RouteToAttractionWhereUniqueInput
  }

  /**
   * RouteToAttraction findFirst
   */
  export type RouteToAttractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * Filter, which RouteToAttraction to fetch.
     */
    where?: RouteToAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteToAttractions to fetch.
     */
    orderBy?: RouteToAttractionOrderByWithRelationInput | RouteToAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteToAttractions.
     */
    cursor?: RouteToAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteToAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteToAttractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteToAttractions.
     */
    distinct?: RouteToAttractionScalarFieldEnum | RouteToAttractionScalarFieldEnum[]
  }

  /**
   * RouteToAttraction findFirstOrThrow
   */
  export type RouteToAttractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * Filter, which RouteToAttraction to fetch.
     */
    where?: RouteToAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteToAttractions to fetch.
     */
    orderBy?: RouteToAttractionOrderByWithRelationInput | RouteToAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteToAttractions.
     */
    cursor?: RouteToAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteToAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteToAttractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteToAttractions.
     */
    distinct?: RouteToAttractionScalarFieldEnum | RouteToAttractionScalarFieldEnum[]
  }

  /**
   * RouteToAttraction findMany
   */
  export type RouteToAttractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * Filter, which RouteToAttractions to fetch.
     */
    where?: RouteToAttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteToAttractions to fetch.
     */
    orderBy?: RouteToAttractionOrderByWithRelationInput | RouteToAttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteToAttractions.
     */
    cursor?: RouteToAttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteToAttractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteToAttractions.
     */
    skip?: number
    distinct?: RouteToAttractionScalarFieldEnum | RouteToAttractionScalarFieldEnum[]
  }

  /**
   * RouteToAttraction create
   */
  export type RouteToAttractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteToAttraction.
     */
    data: XOR<RouteToAttractionCreateInput, RouteToAttractionUncheckedCreateInput>
  }

  /**
   * RouteToAttraction createMany
   */
  export type RouteToAttractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteToAttractions.
     */
    data: RouteToAttractionCreateManyInput | RouteToAttractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteToAttraction createManyAndReturn
   */
  export type RouteToAttractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * The data used to create many RouteToAttractions.
     */
    data: RouteToAttractionCreateManyInput | RouteToAttractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteToAttraction update
   */
  export type RouteToAttractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteToAttraction.
     */
    data: XOR<RouteToAttractionUpdateInput, RouteToAttractionUncheckedUpdateInput>
    /**
     * Choose, which RouteToAttraction to update.
     */
    where: RouteToAttractionWhereUniqueInput
  }

  /**
   * RouteToAttraction updateMany
   */
  export type RouteToAttractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteToAttractions.
     */
    data: XOR<RouteToAttractionUpdateManyMutationInput, RouteToAttractionUncheckedUpdateManyInput>
    /**
     * Filter which RouteToAttractions to update
     */
    where?: RouteToAttractionWhereInput
    /**
     * Limit how many RouteToAttractions to update.
     */
    limit?: number
  }

  /**
   * RouteToAttraction updateManyAndReturn
   */
  export type RouteToAttractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * The data used to update RouteToAttractions.
     */
    data: XOR<RouteToAttractionUpdateManyMutationInput, RouteToAttractionUncheckedUpdateManyInput>
    /**
     * Filter which RouteToAttractions to update
     */
    where?: RouteToAttractionWhereInput
    /**
     * Limit how many RouteToAttractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteToAttraction upsert
   */
  export type RouteToAttractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteToAttraction to update in case it exists.
     */
    where: RouteToAttractionWhereUniqueInput
    /**
     * In case the RouteToAttraction found by the `where` argument doesn't exist, create a new RouteToAttraction with this data.
     */
    create: XOR<RouteToAttractionCreateInput, RouteToAttractionUncheckedCreateInput>
    /**
     * In case the RouteToAttraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteToAttractionUpdateInput, RouteToAttractionUncheckedUpdateInput>
  }

  /**
   * RouteToAttraction delete
   */
  export type RouteToAttractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
    /**
     * Filter which RouteToAttraction to delete.
     */
    where: RouteToAttractionWhereUniqueInput
  }

  /**
   * RouteToAttraction deleteMany
   */
  export type RouteToAttractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteToAttractions to delete
     */
    where?: RouteToAttractionWhereInput
    /**
     * Limit how many RouteToAttractions to delete.
     */
    limit?: number
  }

  /**
   * RouteToAttraction without action
   */
  export type RouteToAttractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteToAttraction
     */
    select?: RouteToAttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteToAttraction
     */
    omit?: RouteToAttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteToAttractionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AttractionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    locationId: 'locationId',
    averageRating: 'averageRating',
    visitDuration: 'visitDuration',
    entryFee: 'entryFee',
    website: 'website',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttractionScalarFieldEnum = (typeof AttractionScalarFieldEnum)[keyof typeof AttractionScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    city: 'city',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    attractionId: 'attractionId',
    url: 'url',
    type: 'type',
    caption: 'caption',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    attractionId: 'attractionId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const OperatingHoursScalarFieldEnum: {
    id: 'id',
    attractionId: 'attractionId',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isClosed: 'isClosed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperatingHoursScalarFieldEnum = (typeof OperatingHoursScalarFieldEnum)[keyof typeof OperatingHoursScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    isGenerated: 'isGenerated',
    duration: 'duration',
    distance: 'distance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RouteRatingScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteRatingScalarFieldEnum = (typeof RouteRatingScalarFieldEnum)[keyof typeof RouteRatingScalarFieldEnum]


  export const AttractionToTagScalarFieldEnum: {
    attractionId: 'attractionId',
    tagId: 'tagId'
  };

  export type AttractionToTagScalarFieldEnum = (typeof AttractionToTagScalarFieldEnum)[keyof typeof AttractionToTagScalarFieldEnum]


  export const RouteToAttractionScalarFieldEnum: {
    routeId: 'routeId',
    attractionId: 'attractionId'
  };

  export type RouteToAttractionScalarFieldEnum = (typeof RouteToAttractionScalarFieldEnum)[keyof typeof RouteToAttractionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TouristPlaceCategory'
   */
  export type EnumTouristPlaceCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TouristPlaceCategory'>
    


  /**
   * Reference to a field of type 'TouristPlaceCategory[]'
   */
  export type ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TouristPlaceCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    routes?: RouteListRelationFilter
    reviews?: ReviewListRelationFilter
    routeRatings?: RouteRatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    routes?: RouteOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    routeRatings?: RouteRatingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    routes?: RouteListRelationFilter
    reviews?: ReviewListRelationFilter
    routeRatings?: RouteRatingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
  }

  export type AttractionWhereInput = {
    AND?: AttractionWhereInput | AttractionWhereInput[]
    OR?: AttractionWhereInput[]
    NOT?: AttractionWhereInput | AttractionWhereInput[]
    id?: IntFilter<"Attraction"> | number
    name?: StringFilter<"Attraction"> | string
    description?: StringNullableFilter<"Attraction"> | string | null
    categoryId?: IntFilter<"Attraction"> | number
    locationId?: IntFilter<"Attraction"> | number
    averageRating?: FloatNullableFilter<"Attraction"> | number | null
    visitDuration?: FloatNullableFilter<"Attraction"> | number | null
    entryFee?: FloatNullableFilter<"Attraction"> | number | null
    website?: StringNullableFilter<"Attraction"> | string | null
    phone?: StringNullableFilter<"Attraction"> | string | null
    createdAt?: DateTimeFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeFilter<"Attraction"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    media?: MediaListRelationFilter
    reviews?: ReviewListRelationFilter
    tags?: TagListRelationFilter
    operatingHours?: OperatingHoursListRelationFilter
    routes?: RouteListRelationFilter
    AttractionToTag?: AttractionToTagListRelationFilter
    RouteToAttraction?: RouteToAttractionListRelationFilter
  }

  export type AttractionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    visitDuration?: SortOrderInput | SortOrder
    entryFee?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    operatingHours?: OperatingHoursOrderByRelationAggregateInput
    routes?: RouteOrderByRelationAggregateInput
    AttractionToTag?: AttractionToTagOrderByRelationAggregateInput
    RouteToAttraction?: RouteToAttractionOrderByRelationAggregateInput
  }

  export type AttractionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    locationId?: number
    AND?: AttractionWhereInput | AttractionWhereInput[]
    OR?: AttractionWhereInput[]
    NOT?: AttractionWhereInput | AttractionWhereInput[]
    name?: StringFilter<"Attraction"> | string
    description?: StringNullableFilter<"Attraction"> | string | null
    categoryId?: IntFilter<"Attraction"> | number
    averageRating?: FloatNullableFilter<"Attraction"> | number | null
    visitDuration?: FloatNullableFilter<"Attraction"> | number | null
    entryFee?: FloatNullableFilter<"Attraction"> | number | null
    website?: StringNullableFilter<"Attraction"> | string | null
    phone?: StringNullableFilter<"Attraction"> | string | null
    createdAt?: DateTimeFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeFilter<"Attraction"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    media?: MediaListRelationFilter
    reviews?: ReviewListRelationFilter
    tags?: TagListRelationFilter
    operatingHours?: OperatingHoursListRelationFilter
    routes?: RouteListRelationFilter
    AttractionToTag?: AttractionToTagListRelationFilter
    RouteToAttraction?: RouteToAttractionListRelationFilter
  }, "id" | "locationId">

  export type AttractionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    visitDuration?: SortOrderInput | SortOrder
    entryFee?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttractionCountOrderByAggregateInput
    _avg?: AttractionAvgOrderByAggregateInput
    _max?: AttractionMaxOrderByAggregateInput
    _min?: AttractionMinOrderByAggregateInput
    _sum?: AttractionSumOrderByAggregateInput
  }

  export type AttractionScalarWhereWithAggregatesInput = {
    AND?: AttractionScalarWhereWithAggregatesInput | AttractionScalarWhereWithAggregatesInput[]
    OR?: AttractionScalarWhereWithAggregatesInput[]
    NOT?: AttractionScalarWhereWithAggregatesInput | AttractionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attraction"> | number
    name?: StringWithAggregatesFilter<"Attraction"> | string
    description?: StringNullableWithAggregatesFilter<"Attraction"> | string | null
    categoryId?: IntWithAggregatesFilter<"Attraction"> | number
    locationId?: IntWithAggregatesFilter<"Attraction"> | number
    averageRating?: FloatNullableWithAggregatesFilter<"Attraction"> | number | null
    visitDuration?: FloatNullableWithAggregatesFilter<"Attraction"> | number | null
    entryFee?: FloatNullableWithAggregatesFilter<"Attraction"> | number | null
    website?: StringNullableWithAggregatesFilter<"Attraction"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Attraction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attraction"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    address?: StringNullableFilter<"Location"> | string | null
    city?: StringNullableFilter<"Location"> | string | null
    country?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    attraction?: XOR<AttractionNullableScalarRelationFilter, AttractionWhereInput> | null
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attraction?: AttractionOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    address?: StringNullableFilter<"Location"> | string | null
    city?: StringNullableFilter<"Location"> | string | null
    country?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    attraction?: XOR<AttractionNullableScalarRelationFilter, AttractionWhereInput> | null
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    latitude?: FloatWithAggregatesFilter<"Location"> | number
    longitude?: FloatWithAggregatesFilter<"Location"> | number
    address?: StringNullableWithAggregatesFilter<"Location"> | string | null
    city?: StringNullableWithAggregatesFilter<"Location"> | string | null
    country?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: EnumTouristPlaceCategoryFilter<"Category"> | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    attractions?: AttractionListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attractions?: AttractionOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: EnumTouristPlaceCategoryFilter<"Category"> | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    attractions?: AttractionListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: EnumTouristPlaceCategoryWithAggregatesFilter<"Category"> | $Enums.TouristPlaceCategory
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    attractionId?: IntFilter<"Media"> | number
    url?: StringFilter<"Media"> | string
    type?: StringFilter<"Media"> | string
    caption?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    attractionId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attraction?: AttractionOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    attractionId?: IntFilter<"Media"> | number
    url?: StringFilter<"Media"> | string
    type?: StringFilter<"Media"> | string
    caption?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    attractionId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    attractionId?: IntWithAggregatesFilter<"Media"> | number
    url?: StringWithAggregatesFilter<"Media"> | string
    type?: StringWithAggregatesFilter<"Media"> | string
    caption?: StringNullableWithAggregatesFilter<"Media"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    attractionId?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    attractionId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attraction?: AttractionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    attractionId?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    attractionId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    attractionId?: IntWithAggregatesFilter<"Review"> | number
    userId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    attractions?: AttractionListRelationFilter
    AttractionToTag?: AttractionToTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attractions?: AttractionOrderByRelationAggregateInput
    AttractionToTag?: AttractionToTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    attractions?: AttractionListRelationFilter
    AttractionToTag?: AttractionToTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type OperatingHoursWhereInput = {
    AND?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    OR?: OperatingHoursWhereInput[]
    NOT?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    id?: IntFilter<"OperatingHours"> | number
    attractionId?: IntFilter<"OperatingHours"> | number
    dayOfWeek?: StringFilter<"OperatingHours"> | string
    openTime?: StringNullableFilter<"OperatingHours"> | string | null
    closeTime?: StringNullableFilter<"OperatingHours"> | string | null
    isClosed?: BoolFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeFilter<"OperatingHours"> | Date | string
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
  }

  export type OperatingHoursOrderByWithRelationInput = {
    id?: SortOrder
    attractionId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attraction?: AttractionOrderByWithRelationInput
  }

  export type OperatingHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    OR?: OperatingHoursWhereInput[]
    NOT?: OperatingHoursWhereInput | OperatingHoursWhereInput[]
    attractionId?: IntFilter<"OperatingHours"> | number
    dayOfWeek?: StringFilter<"OperatingHours"> | string
    openTime?: StringNullableFilter<"OperatingHours"> | string | null
    closeTime?: StringNullableFilter<"OperatingHours"> | string | null
    isClosed?: BoolFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeFilter<"OperatingHours"> | Date | string
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
  }, "id">

  export type OperatingHoursOrderByWithAggregationInput = {
    id?: SortOrder
    attractionId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperatingHoursCountOrderByAggregateInput
    _avg?: OperatingHoursAvgOrderByAggregateInput
    _max?: OperatingHoursMaxOrderByAggregateInput
    _min?: OperatingHoursMinOrderByAggregateInput
    _sum?: OperatingHoursSumOrderByAggregateInput
  }

  export type OperatingHoursScalarWhereWithAggregatesInput = {
    AND?: OperatingHoursScalarWhereWithAggregatesInput | OperatingHoursScalarWhereWithAggregatesInput[]
    OR?: OperatingHoursScalarWhereWithAggregatesInput[]
    NOT?: OperatingHoursScalarWhereWithAggregatesInput | OperatingHoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OperatingHours"> | number
    attractionId?: IntWithAggregatesFilter<"OperatingHours"> | number
    dayOfWeek?: StringWithAggregatesFilter<"OperatingHours"> | string
    openTime?: StringNullableWithAggregatesFilter<"OperatingHours"> | string | null
    closeTime?: StringNullableWithAggregatesFilter<"OperatingHours"> | string | null
    isClosed?: BoolWithAggregatesFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OperatingHours"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    userId?: StringFilter<"Route"> | string
    isGenerated?: BoolFilter<"Route"> | boolean
    duration?: FloatNullableFilter<"Route"> | number | null
    distance?: FloatNullableFilter<"Route"> | number | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attractions?: AttractionListRelationFilter
    ratings?: RouteRatingListRelationFilter
    RouteToAttraction?: RouteToAttractionListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    isGenerated?: SortOrder
    duration?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    attractions?: AttractionOrderByRelationAggregateInput
    ratings?: RouteRatingOrderByRelationAggregateInput
    RouteToAttraction?: RouteToAttractionOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    userId?: StringFilter<"Route"> | string
    isGenerated?: BoolFilter<"Route"> | boolean
    duration?: FloatNullableFilter<"Route"> | number | null
    distance?: FloatNullableFilter<"Route"> | number | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attractions?: AttractionListRelationFilter
    ratings?: RouteRatingListRelationFilter
    RouteToAttraction?: RouteToAttractionListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    isGenerated?: SortOrder
    duration?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    name?: StringWithAggregatesFilter<"Route"> | string
    description?: StringNullableWithAggregatesFilter<"Route"> | string | null
    userId?: StringWithAggregatesFilter<"Route"> | string
    isGenerated?: BoolWithAggregatesFilter<"Route"> | boolean
    duration?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    distance?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type RouteRatingWhereInput = {
    AND?: RouteRatingWhereInput | RouteRatingWhereInput[]
    OR?: RouteRatingWhereInput[]
    NOT?: RouteRatingWhereInput | RouteRatingWhereInput[]
    id?: IntFilter<"RouteRating"> | number
    routeId?: IntFilter<"RouteRating"> | number
    userId?: StringFilter<"RouteRating"> | string
    rating?: IntFilter<"RouteRating"> | number
    comment?: StringNullableFilter<"RouteRating"> | string | null
    createdAt?: DateTimeFilter<"RouteRating"> | Date | string
    updatedAt?: DateTimeFilter<"RouteRating"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RouteRatingOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    route?: RouteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RouteRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteRatingWhereInput | RouteRatingWhereInput[]
    OR?: RouteRatingWhereInput[]
    NOT?: RouteRatingWhereInput | RouteRatingWhereInput[]
    routeId?: IntFilter<"RouteRating"> | number
    userId?: StringFilter<"RouteRating"> | string
    rating?: IntFilter<"RouteRating"> | number
    comment?: StringNullableFilter<"RouteRating"> | string | null
    createdAt?: DateTimeFilter<"RouteRating"> | Date | string
    updatedAt?: DateTimeFilter<"RouteRating"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RouteRatingOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteRatingCountOrderByAggregateInput
    _avg?: RouteRatingAvgOrderByAggregateInput
    _max?: RouteRatingMaxOrderByAggregateInput
    _min?: RouteRatingMinOrderByAggregateInput
    _sum?: RouteRatingSumOrderByAggregateInput
  }

  export type RouteRatingScalarWhereWithAggregatesInput = {
    AND?: RouteRatingScalarWhereWithAggregatesInput | RouteRatingScalarWhereWithAggregatesInput[]
    OR?: RouteRatingScalarWhereWithAggregatesInput[]
    NOT?: RouteRatingScalarWhereWithAggregatesInput | RouteRatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteRating"> | number
    routeId?: IntWithAggregatesFilter<"RouteRating"> | number
    userId?: StringWithAggregatesFilter<"RouteRating"> | string
    rating?: IntWithAggregatesFilter<"RouteRating"> | number
    comment?: StringNullableWithAggregatesFilter<"RouteRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RouteRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RouteRating"> | Date | string
  }

  export type AttractionToTagWhereInput = {
    AND?: AttractionToTagWhereInput | AttractionToTagWhereInput[]
    OR?: AttractionToTagWhereInput[]
    NOT?: AttractionToTagWhereInput | AttractionToTagWhereInput[]
    attractionId?: IntFilter<"AttractionToTag"> | number
    tagId?: IntFilter<"AttractionToTag"> | number
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type AttractionToTagOrderByWithRelationInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
    attraction?: AttractionOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type AttractionToTagWhereUniqueInput = Prisma.AtLeast<{
    attractionId_tagId?: AttractionToTagAttractionIdTagIdCompoundUniqueInput
    AND?: AttractionToTagWhereInput | AttractionToTagWhereInput[]
    OR?: AttractionToTagWhereInput[]
    NOT?: AttractionToTagWhereInput | AttractionToTagWhereInput[]
    attractionId?: IntFilter<"AttractionToTag"> | number
    tagId?: IntFilter<"AttractionToTag"> | number
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "attractionId_tagId">

  export type AttractionToTagOrderByWithAggregationInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
    _count?: AttractionToTagCountOrderByAggregateInput
    _avg?: AttractionToTagAvgOrderByAggregateInput
    _max?: AttractionToTagMaxOrderByAggregateInput
    _min?: AttractionToTagMinOrderByAggregateInput
    _sum?: AttractionToTagSumOrderByAggregateInput
  }

  export type AttractionToTagScalarWhereWithAggregatesInput = {
    AND?: AttractionToTagScalarWhereWithAggregatesInput | AttractionToTagScalarWhereWithAggregatesInput[]
    OR?: AttractionToTagScalarWhereWithAggregatesInput[]
    NOT?: AttractionToTagScalarWhereWithAggregatesInput | AttractionToTagScalarWhereWithAggregatesInput[]
    attractionId?: IntWithAggregatesFilter<"AttractionToTag"> | number
    tagId?: IntWithAggregatesFilter<"AttractionToTag"> | number
  }

  export type RouteToAttractionWhereInput = {
    AND?: RouteToAttractionWhereInput | RouteToAttractionWhereInput[]
    OR?: RouteToAttractionWhereInput[]
    NOT?: RouteToAttractionWhereInput | RouteToAttractionWhereInput[]
    routeId?: IntFilter<"RouteToAttraction"> | number
    attractionId?: IntFilter<"RouteToAttraction"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
  }

  export type RouteToAttractionOrderByWithRelationInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
    route?: RouteOrderByWithRelationInput
    attraction?: AttractionOrderByWithRelationInput
  }

  export type RouteToAttractionWhereUniqueInput = Prisma.AtLeast<{
    routeId_attractionId?: RouteToAttractionRouteIdAttractionIdCompoundUniqueInput
    AND?: RouteToAttractionWhereInput | RouteToAttractionWhereInput[]
    OR?: RouteToAttractionWhereInput[]
    NOT?: RouteToAttractionWhereInput | RouteToAttractionWhereInput[]
    routeId?: IntFilter<"RouteToAttraction"> | number
    attractionId?: IntFilter<"RouteToAttraction"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    attraction?: XOR<AttractionScalarRelationFilter, AttractionWhereInput>
  }, "routeId_attractionId">

  export type RouteToAttractionOrderByWithAggregationInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
    _count?: RouteToAttractionCountOrderByAggregateInput
    _avg?: RouteToAttractionAvgOrderByAggregateInput
    _max?: RouteToAttractionMaxOrderByAggregateInput
    _min?: RouteToAttractionMinOrderByAggregateInput
    _sum?: RouteToAttractionSumOrderByAggregateInput
  }

  export type RouteToAttractionScalarWhereWithAggregatesInput = {
    AND?: RouteToAttractionScalarWhereWithAggregatesInput | RouteToAttractionScalarWhereWithAggregatesInput[]
    OR?: RouteToAttractionScalarWhereWithAggregatesInput[]
    NOT?: RouteToAttractionScalarWhereWithAggregatesInput | RouteToAttractionScalarWhereWithAggregatesInput[]
    routeId?: IntWithAggregatesFilter<"RouteToAttraction"> | number
    attractionId?: IntWithAggregatesFilter<"RouteToAttraction"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    routes?: RouteCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    routeRatings?: RouteRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    routeRatings?: RouteRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    routes?: RouteUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    routeRatings?: RouteRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    routeRatings?: RouteRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type AttractionCreateInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    latitude: number
    longitude: number
    address?: string | null
    city?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attraction?: AttractionCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    latitude: number
    longitude: number
    address?: string | null
    city?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attraction?: AttractionUncheckedCreateNestedOneWithoutLocationInput
  }

  export type LocationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attraction?: AttractionUpdateOneWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attraction?: AttractionUncheckedUpdateOneWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    latitude: number
    longitude: number
    address?: string | null
    city?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name?: $Enums.TouristPlaceCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name?: $Enums.TouristPlaceCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: EnumTouristPlaceCategoryFieldUpdateOperationsInput | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumTouristPlaceCategoryFieldUpdateOperationsInput | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name?: $Enums.TouristPlaceCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: EnumTouristPlaceCategoryFieldUpdateOperationsInput | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumTouristPlaceCategoryFieldUpdateOperationsInput | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    url: string
    type: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attraction: AttractionCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    attractionId: number
    url: string
    type: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attraction?: AttractionUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: number
    attractionId: number
    url: string
    type: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attraction: AttractionCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    attractionId: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attraction?: AttractionUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    attractionId: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutTagsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutTagsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutTagsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutTagsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursCreateInput = {
    dayOfWeek: string
    openTime?: string | null
    closeTime?: string | null
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attraction: AttractionCreateNestedOneWithoutOperatingHoursInput
  }

  export type OperatingHoursUncheckedCreateInput = {
    id?: number
    attractionId: number
    dayOfWeek: string
    openTime?: string | null
    closeTime?: string | null
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUpdateInput = {
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attraction?: AttractionUpdateOneRequiredWithoutOperatingHoursNestedInput
  }

  export type OperatingHoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursCreateManyInput = {
    id?: number
    attractionId: number
    dayOfWeek: string
    openTime?: string | null
    closeTime?: string | null
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUpdateManyMutationInput = {
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    attractions?: AttractionCreateNestedManyWithoutRoutesInput
    ratings?: RouteRatingCreateNestedManyWithoutRouteInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    userId: string
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutRoutesInput
    ratings?: RouteRatingUncheckedCreateNestedManyWithoutRouteInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    attractions?: AttractionUpdateManyWithoutRoutesNestedInput
    ratings?: RouteRatingUpdateManyWithoutRouteNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutRoutesNestedInput
    ratings?: RouteRatingUncheckedUpdateManyWithoutRouteNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    userId: string
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutRouteRatingsInput
  }

  export type RouteRatingUncheckedCreateInput = {
    id?: number
    routeId: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteRatingUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutRouteRatingsNestedInput
  }

  export type RouteRatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingCreateManyInput = {
    id?: number
    routeId: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteRatingUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionToTagCreateInput = {
    attraction: AttractionCreateNestedOneWithoutAttractionToTagInput
    tag: TagCreateNestedOneWithoutAttractionToTagInput
  }

  export type AttractionToTagUncheckedCreateInput = {
    attractionId: number
    tagId: number
  }

  export type AttractionToTagUpdateInput = {
    attraction?: AttractionUpdateOneRequiredWithoutAttractionToTagNestedInput
    tag?: TagUpdateOneRequiredWithoutAttractionToTagNestedInput
  }

  export type AttractionToTagUncheckedUpdateInput = {
    attractionId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type AttractionToTagCreateManyInput = {
    attractionId: number
    tagId: number
  }

  export type AttractionToTagUpdateManyMutationInput = {

  }

  export type AttractionToTagUncheckedUpdateManyInput = {
    attractionId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteToAttractionCreateInput = {
    route: RouteCreateNestedOneWithoutRouteToAttractionInput
    attraction: AttractionCreateNestedOneWithoutRouteToAttractionInput
  }

  export type RouteToAttractionUncheckedCreateInput = {
    routeId: number
    attractionId: number
  }

  export type RouteToAttractionUpdateInput = {
    route?: RouteUpdateOneRequiredWithoutRouteToAttractionNestedInput
    attraction?: AttractionUpdateOneRequiredWithoutRouteToAttractionNestedInput
  }

  export type RouteToAttractionUncheckedUpdateInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteToAttractionCreateManyInput = {
    routeId: number
    attractionId: number
  }

  export type RouteToAttractionUpdateManyMutationInput = {

  }

  export type RouteToAttractionUncheckedUpdateManyInput = {
    routeId?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type RouteRatingListRelationFilter = {
    every?: RouteRatingWhereInput
    some?: RouteRatingWhereInput
    none?: RouteRatingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type OperatingHoursListRelationFilter = {
    every?: OperatingHoursWhereInput
    some?: OperatingHoursWhereInput
    none?: OperatingHoursWhereInput
  }

  export type AttractionToTagListRelationFilter = {
    every?: AttractionToTagWhereInput
    some?: AttractionToTagWhereInput
    none?: AttractionToTagWhereInput
  }

  export type RouteToAttractionListRelationFilter = {
    every?: RouteToAttractionWhereInput
    some?: RouteToAttractionWhereInput
    none?: RouteToAttractionWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperatingHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttractionToTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteToAttractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttractionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrder
    visitDuration?: SortOrder
    entryFee?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrder
    visitDuration?: SortOrder
    entryFee?: SortOrder
  }

  export type AttractionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrder
    visitDuration?: SortOrder
    entryFee?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrder
    visitDuration?: SortOrder
    entryFee?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    locationId?: SortOrder
    averageRating?: SortOrder
    visitDuration?: SortOrder
    entryFee?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AttractionNullableScalarRelationFilter = {
    is?: AttractionWhereInput | null
    isNot?: AttractionWhereInput | null
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTouristPlaceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TouristPlaceCategory | EnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTouristPlaceCategoryFilter<$PrismaModel> | $Enums.TouristPlaceCategory
  }

  export type AttractionListRelationFilter = {
    every?: AttractionWhereInput
    some?: AttractionWhereInput
    none?: AttractionWhereInput
  }

  export type AttractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTouristPlaceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TouristPlaceCategory | EnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTouristPlaceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TouristPlaceCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTouristPlaceCategoryFilter<$PrismaModel>
    _max?: NestedEnumTouristPlaceCategoryFilter<$PrismaModel>
  }

  export type AttractionScalarRelationFilter = {
    is?: AttractionWhereInput
    isNot?: AttractionWhereInput
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    rating?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OperatingHoursCountOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatingHoursAvgOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
  }

  export type OperatingHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatingHoursMinOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatingHoursSumOrderByAggregateInput = {
    id?: SortOrder
    attractionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isGenerated?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isGenerated?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isGenerated?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type RouteRatingCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteRatingAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    rating?: SortOrder
  }

  export type RouteRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteRatingMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteRatingSumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    rating?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type AttractionToTagAttractionIdTagIdCompoundUniqueInput = {
    attractionId: number
    tagId: number
  }

  export type AttractionToTagCountOrderByAggregateInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
  }

  export type AttractionToTagAvgOrderByAggregateInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
  }

  export type AttractionToTagMaxOrderByAggregateInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
  }

  export type AttractionToTagMinOrderByAggregateInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
  }

  export type AttractionToTagSumOrderByAggregateInput = {
    attractionId?: SortOrder
    tagId?: SortOrder
  }

  export type RouteToAttractionRouteIdAttractionIdCompoundUniqueInput = {
    routeId: number
    attractionId: number
  }

  export type RouteToAttractionCountOrderByAggregateInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
  }

  export type RouteToAttractionAvgOrderByAggregateInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
  }

  export type RouteToAttractionMaxOrderByAggregateInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
  }

  export type RouteToAttractionMinOrderByAggregateInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
  }

  export type RouteToAttractionSumOrderByAggregateInput = {
    routeId?: SortOrder
    attractionId?: SortOrder
  }

  export type RouteCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RouteRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteRatingCreateWithoutUserInput, RouteRatingUncheckedCreateWithoutUserInput> | RouteRatingCreateWithoutUserInput[] | RouteRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutUserInput | RouteRatingCreateOrConnectWithoutUserInput[]
    createMany?: RouteRatingCreateManyUserInputEnvelope
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RouteRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteRatingCreateWithoutUserInput, RouteRatingUncheckedCreateWithoutUserInput> | RouteRatingCreateWithoutUserInput[] | RouteRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutUserInput | RouteRatingCreateOrConnectWithoutUserInput[]
    createMany?: RouteRatingCreateManyUserInputEnvelope
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type RouteUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RouteRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteRatingCreateWithoutUserInput, RouteRatingUncheckedCreateWithoutUserInput> | RouteRatingCreateWithoutUserInput[] | RouteRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutUserInput | RouteRatingCreateOrConnectWithoutUserInput[]
    upsert?: RouteRatingUpsertWithWhereUniqueWithoutUserInput | RouteRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteRatingCreateManyUserInputEnvelope
    set?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    disconnect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    delete?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    update?: RouteRatingUpdateWithWhereUniqueWithoutUserInput | RouteRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteRatingUpdateManyWithWhereWithoutUserInput | RouteRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteRatingScalarWhereInput | RouteRatingScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RouteRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteRatingCreateWithoutUserInput, RouteRatingUncheckedCreateWithoutUserInput> | RouteRatingCreateWithoutUserInput[] | RouteRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutUserInput | RouteRatingCreateOrConnectWithoutUserInput[]
    upsert?: RouteRatingUpsertWithWhereUniqueWithoutUserInput | RouteRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteRatingCreateManyUserInputEnvelope
    set?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    disconnect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    delete?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    update?: RouteRatingUpdateWithWhereUniqueWithoutUserInput | RouteRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteRatingUpdateManyWithWhereWithoutUserInput | RouteRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteRatingScalarWhereInput | RouteRatingScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutAttractionsInput = {
    create?: XOR<CategoryCreateWithoutAttractionsInput, CategoryUncheckedCreateWithoutAttractionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAttractionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutAttractionInput = {
    create?: XOR<LocationCreateWithoutAttractionInput, LocationUncheckedCreateWithoutAttractionInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAttractionInput
    connect?: LocationWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutAttractionInput = {
    create?: XOR<MediaCreateWithoutAttractionInput, MediaUncheckedCreateWithoutAttractionInput> | MediaCreateWithoutAttractionInput[] | MediaUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAttractionInput | MediaCreateOrConnectWithoutAttractionInput[]
    createMany?: MediaCreateManyAttractionInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAttractionInput = {
    create?: XOR<ReviewCreateWithoutAttractionInput, ReviewUncheckedCreateWithoutAttractionInput> | ReviewCreateWithoutAttractionInput[] | ReviewUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAttractionInput | ReviewCreateOrConnectWithoutAttractionInput[]
    createMany?: ReviewCreateManyAttractionInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutAttractionsInput = {
    create?: XOR<TagCreateWithoutAttractionsInput, TagUncheckedCreateWithoutAttractionsInput> | TagCreateWithoutAttractionsInput[] | TagUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAttractionsInput | TagCreateOrConnectWithoutAttractionsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OperatingHoursCreateNestedManyWithoutAttractionInput = {
    create?: XOR<OperatingHoursCreateWithoutAttractionInput, OperatingHoursUncheckedCreateWithoutAttractionInput> | OperatingHoursCreateWithoutAttractionInput[] | OperatingHoursUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutAttractionInput | OperatingHoursCreateOrConnectWithoutAttractionInput[]
    createMany?: OperatingHoursCreateManyAttractionInputEnvelope
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutAttractionsInput = {
    create?: XOR<RouteCreateWithoutAttractionsInput, RouteUncheckedCreateWithoutAttractionsInput> | RouteCreateWithoutAttractionsInput[] | RouteUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutAttractionsInput | RouteCreateOrConnectWithoutAttractionsInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type AttractionToTagCreateNestedManyWithoutAttractionInput = {
    create?: XOR<AttractionToTagCreateWithoutAttractionInput, AttractionToTagUncheckedCreateWithoutAttractionInput> | AttractionToTagCreateWithoutAttractionInput[] | AttractionToTagUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutAttractionInput | AttractionToTagCreateOrConnectWithoutAttractionInput[]
    createMany?: AttractionToTagCreateManyAttractionInputEnvelope
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
  }

  export type RouteToAttractionCreateNestedManyWithoutAttractionInput = {
    create?: XOR<RouteToAttractionCreateWithoutAttractionInput, RouteToAttractionUncheckedCreateWithoutAttractionInput> | RouteToAttractionCreateWithoutAttractionInput[] | RouteToAttractionUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutAttractionInput | RouteToAttractionCreateOrConnectWithoutAttractionInput[]
    createMany?: RouteToAttractionCreateManyAttractionInputEnvelope
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutAttractionInput = {
    create?: XOR<MediaCreateWithoutAttractionInput, MediaUncheckedCreateWithoutAttractionInput> | MediaCreateWithoutAttractionInput[] | MediaUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAttractionInput | MediaCreateOrConnectWithoutAttractionInput[]
    createMany?: MediaCreateManyAttractionInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAttractionInput = {
    create?: XOR<ReviewCreateWithoutAttractionInput, ReviewUncheckedCreateWithoutAttractionInput> | ReviewCreateWithoutAttractionInput[] | ReviewUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAttractionInput | ReviewCreateOrConnectWithoutAttractionInput[]
    createMany?: ReviewCreateManyAttractionInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutAttractionsInput = {
    create?: XOR<TagCreateWithoutAttractionsInput, TagUncheckedCreateWithoutAttractionsInput> | TagCreateWithoutAttractionsInput[] | TagUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAttractionsInput | TagCreateOrConnectWithoutAttractionsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput = {
    create?: XOR<OperatingHoursCreateWithoutAttractionInput, OperatingHoursUncheckedCreateWithoutAttractionInput> | OperatingHoursCreateWithoutAttractionInput[] | OperatingHoursUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutAttractionInput | OperatingHoursCreateOrConnectWithoutAttractionInput[]
    createMany?: OperatingHoursCreateManyAttractionInputEnvelope
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutAttractionsInput = {
    create?: XOR<RouteCreateWithoutAttractionsInput, RouteUncheckedCreateWithoutAttractionsInput> | RouteCreateWithoutAttractionsInput[] | RouteUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutAttractionsInput | RouteCreateOrConnectWithoutAttractionsInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput = {
    create?: XOR<AttractionToTagCreateWithoutAttractionInput, AttractionToTagUncheckedCreateWithoutAttractionInput> | AttractionToTagCreateWithoutAttractionInput[] | AttractionToTagUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutAttractionInput | AttractionToTagCreateOrConnectWithoutAttractionInput[]
    createMany?: AttractionToTagCreateManyAttractionInputEnvelope
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
  }

  export type RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput = {
    create?: XOR<RouteToAttractionCreateWithoutAttractionInput, RouteToAttractionUncheckedCreateWithoutAttractionInput> | RouteToAttractionCreateWithoutAttractionInput[] | RouteToAttractionUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutAttractionInput | RouteToAttractionCreateOrConnectWithoutAttractionInput[]
    createMany?: RouteToAttractionCreateManyAttractionInputEnvelope
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutAttractionsNestedInput = {
    create?: XOR<CategoryCreateWithoutAttractionsInput, CategoryUncheckedCreateWithoutAttractionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAttractionsInput
    upsert?: CategoryUpsertWithoutAttractionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAttractionsInput, CategoryUpdateWithoutAttractionsInput>, CategoryUncheckedUpdateWithoutAttractionsInput>
  }

  export type LocationUpdateOneRequiredWithoutAttractionNestedInput = {
    create?: XOR<LocationCreateWithoutAttractionInput, LocationUncheckedCreateWithoutAttractionInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAttractionInput
    upsert?: LocationUpsertWithoutAttractionInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAttractionInput, LocationUpdateWithoutAttractionInput>, LocationUncheckedUpdateWithoutAttractionInput>
  }

  export type MediaUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<MediaCreateWithoutAttractionInput, MediaUncheckedCreateWithoutAttractionInput> | MediaCreateWithoutAttractionInput[] | MediaUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAttractionInput | MediaCreateOrConnectWithoutAttractionInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutAttractionInput | MediaUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: MediaCreateManyAttractionInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutAttractionInput | MediaUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutAttractionInput | MediaUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<ReviewCreateWithoutAttractionInput, ReviewUncheckedCreateWithoutAttractionInput> | ReviewCreateWithoutAttractionInput[] | ReviewUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAttractionInput | ReviewCreateOrConnectWithoutAttractionInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAttractionInput | ReviewUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: ReviewCreateManyAttractionInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAttractionInput | ReviewUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAttractionInput | ReviewUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TagUpdateManyWithoutAttractionsNestedInput = {
    create?: XOR<TagCreateWithoutAttractionsInput, TagUncheckedCreateWithoutAttractionsInput> | TagCreateWithoutAttractionsInput[] | TagUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAttractionsInput | TagCreateOrConnectWithoutAttractionsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutAttractionsInput | TagUpsertWithWhereUniqueWithoutAttractionsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutAttractionsInput | TagUpdateWithWhereUniqueWithoutAttractionsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutAttractionsInput | TagUpdateManyWithWhereWithoutAttractionsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OperatingHoursUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<OperatingHoursCreateWithoutAttractionInput, OperatingHoursUncheckedCreateWithoutAttractionInput> | OperatingHoursCreateWithoutAttractionInput[] | OperatingHoursUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutAttractionInput | OperatingHoursCreateOrConnectWithoutAttractionInput[]
    upsert?: OperatingHoursUpsertWithWhereUniqueWithoutAttractionInput | OperatingHoursUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: OperatingHoursCreateManyAttractionInputEnvelope
    set?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    disconnect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    delete?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    update?: OperatingHoursUpdateWithWhereUniqueWithoutAttractionInput | OperatingHoursUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: OperatingHoursUpdateManyWithWhereWithoutAttractionInput | OperatingHoursUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutAttractionsNestedInput = {
    create?: XOR<RouteCreateWithoutAttractionsInput, RouteUncheckedCreateWithoutAttractionsInput> | RouteCreateWithoutAttractionsInput[] | RouteUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutAttractionsInput | RouteCreateOrConnectWithoutAttractionsInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutAttractionsInput | RouteUpsertWithWhereUniqueWithoutAttractionsInput[]
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutAttractionsInput | RouteUpdateWithWhereUniqueWithoutAttractionsInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutAttractionsInput | RouteUpdateManyWithWhereWithoutAttractionsInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type AttractionToTagUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<AttractionToTagCreateWithoutAttractionInput, AttractionToTagUncheckedCreateWithoutAttractionInput> | AttractionToTagCreateWithoutAttractionInput[] | AttractionToTagUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutAttractionInput | AttractionToTagCreateOrConnectWithoutAttractionInput[]
    upsert?: AttractionToTagUpsertWithWhereUniqueWithoutAttractionInput | AttractionToTagUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: AttractionToTagCreateManyAttractionInputEnvelope
    set?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    disconnect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    delete?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    update?: AttractionToTagUpdateWithWhereUniqueWithoutAttractionInput | AttractionToTagUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: AttractionToTagUpdateManyWithWhereWithoutAttractionInput | AttractionToTagUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: AttractionToTagScalarWhereInput | AttractionToTagScalarWhereInput[]
  }

  export type RouteToAttractionUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<RouteToAttractionCreateWithoutAttractionInput, RouteToAttractionUncheckedCreateWithoutAttractionInput> | RouteToAttractionCreateWithoutAttractionInput[] | RouteToAttractionUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutAttractionInput | RouteToAttractionCreateOrConnectWithoutAttractionInput[]
    upsert?: RouteToAttractionUpsertWithWhereUniqueWithoutAttractionInput | RouteToAttractionUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: RouteToAttractionCreateManyAttractionInputEnvelope
    set?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    disconnect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    delete?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    update?: RouteToAttractionUpdateWithWhereUniqueWithoutAttractionInput | RouteToAttractionUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: RouteToAttractionUpdateManyWithWhereWithoutAttractionInput | RouteToAttractionUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: RouteToAttractionScalarWhereInput | RouteToAttractionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MediaUncheckedUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<MediaCreateWithoutAttractionInput, MediaUncheckedCreateWithoutAttractionInput> | MediaCreateWithoutAttractionInput[] | MediaUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAttractionInput | MediaCreateOrConnectWithoutAttractionInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutAttractionInput | MediaUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: MediaCreateManyAttractionInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutAttractionInput | MediaUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutAttractionInput | MediaUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<ReviewCreateWithoutAttractionInput, ReviewUncheckedCreateWithoutAttractionInput> | ReviewCreateWithoutAttractionInput[] | ReviewUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAttractionInput | ReviewCreateOrConnectWithoutAttractionInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAttractionInput | ReviewUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: ReviewCreateManyAttractionInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAttractionInput | ReviewUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAttractionInput | ReviewUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutAttractionsNestedInput = {
    create?: XOR<TagCreateWithoutAttractionsInput, TagUncheckedCreateWithoutAttractionsInput> | TagCreateWithoutAttractionsInput[] | TagUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAttractionsInput | TagCreateOrConnectWithoutAttractionsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutAttractionsInput | TagUpsertWithWhereUniqueWithoutAttractionsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutAttractionsInput | TagUpdateWithWhereUniqueWithoutAttractionsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutAttractionsInput | TagUpdateManyWithWhereWithoutAttractionsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<OperatingHoursCreateWithoutAttractionInput, OperatingHoursUncheckedCreateWithoutAttractionInput> | OperatingHoursCreateWithoutAttractionInput[] | OperatingHoursUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: OperatingHoursCreateOrConnectWithoutAttractionInput | OperatingHoursCreateOrConnectWithoutAttractionInput[]
    upsert?: OperatingHoursUpsertWithWhereUniqueWithoutAttractionInput | OperatingHoursUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: OperatingHoursCreateManyAttractionInputEnvelope
    set?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    disconnect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    delete?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    connect?: OperatingHoursWhereUniqueInput | OperatingHoursWhereUniqueInput[]
    update?: OperatingHoursUpdateWithWhereUniqueWithoutAttractionInput | OperatingHoursUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: OperatingHoursUpdateManyWithWhereWithoutAttractionInput | OperatingHoursUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutAttractionsNestedInput = {
    create?: XOR<RouteCreateWithoutAttractionsInput, RouteUncheckedCreateWithoutAttractionsInput> | RouteCreateWithoutAttractionsInput[] | RouteUncheckedCreateWithoutAttractionsInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutAttractionsInput | RouteCreateOrConnectWithoutAttractionsInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutAttractionsInput | RouteUpsertWithWhereUniqueWithoutAttractionsInput[]
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutAttractionsInput | RouteUpdateWithWhereUniqueWithoutAttractionsInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutAttractionsInput | RouteUpdateManyWithWhereWithoutAttractionsInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<AttractionToTagCreateWithoutAttractionInput, AttractionToTagUncheckedCreateWithoutAttractionInput> | AttractionToTagCreateWithoutAttractionInput[] | AttractionToTagUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutAttractionInput | AttractionToTagCreateOrConnectWithoutAttractionInput[]
    upsert?: AttractionToTagUpsertWithWhereUniqueWithoutAttractionInput | AttractionToTagUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: AttractionToTagCreateManyAttractionInputEnvelope
    set?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    disconnect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    delete?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    update?: AttractionToTagUpdateWithWhereUniqueWithoutAttractionInput | AttractionToTagUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: AttractionToTagUpdateManyWithWhereWithoutAttractionInput | AttractionToTagUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: AttractionToTagScalarWhereInput | AttractionToTagScalarWhereInput[]
  }

  export type RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<RouteToAttractionCreateWithoutAttractionInput, RouteToAttractionUncheckedCreateWithoutAttractionInput> | RouteToAttractionCreateWithoutAttractionInput[] | RouteToAttractionUncheckedCreateWithoutAttractionInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutAttractionInput | RouteToAttractionCreateOrConnectWithoutAttractionInput[]
    upsert?: RouteToAttractionUpsertWithWhereUniqueWithoutAttractionInput | RouteToAttractionUpsertWithWhereUniqueWithoutAttractionInput[]
    createMany?: RouteToAttractionCreateManyAttractionInputEnvelope
    set?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    disconnect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    delete?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    update?: RouteToAttractionUpdateWithWhereUniqueWithoutAttractionInput | RouteToAttractionUpdateWithWhereUniqueWithoutAttractionInput[]
    updateMany?: RouteToAttractionUpdateManyWithWhereWithoutAttractionInput | RouteToAttractionUpdateManyWithWhereWithoutAttractionInput[]
    deleteMany?: RouteToAttractionScalarWhereInput | RouteToAttractionScalarWhereInput[]
  }

  export type AttractionCreateNestedOneWithoutLocationInput = {
    create?: XOR<AttractionCreateWithoutLocationInput, AttractionUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutLocationInput
    connect?: AttractionWhereUniqueInput
  }

  export type AttractionUncheckedCreateNestedOneWithoutLocationInput = {
    create?: XOR<AttractionCreateWithoutLocationInput, AttractionUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutLocationInput
    connect?: AttractionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttractionUpdateOneWithoutLocationNestedInput = {
    create?: XOR<AttractionCreateWithoutLocationInput, AttractionUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutLocationInput
    upsert?: AttractionUpsertWithoutLocationInput
    disconnect?: AttractionWhereInput | boolean
    delete?: AttractionWhereInput | boolean
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutLocationInput, AttractionUpdateWithoutLocationInput>, AttractionUncheckedUpdateWithoutLocationInput>
  }

  export type AttractionUncheckedUpdateOneWithoutLocationNestedInput = {
    create?: XOR<AttractionCreateWithoutLocationInput, AttractionUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutLocationInput
    upsert?: AttractionUpsertWithoutLocationInput
    disconnect?: AttractionWhereInput | boolean
    delete?: AttractionWhereInput | boolean
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutLocationInput, AttractionUpdateWithoutLocationInput>, AttractionUncheckedUpdateWithoutLocationInput>
  }

  export type AttractionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AttractionCreateWithoutCategoryInput, AttractionUncheckedCreateWithoutCategoryInput> | AttractionCreateWithoutCategoryInput[] | AttractionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutCategoryInput | AttractionCreateOrConnectWithoutCategoryInput[]
    createMany?: AttractionCreateManyCategoryInputEnvelope
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type AttractionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AttractionCreateWithoutCategoryInput, AttractionUncheckedCreateWithoutCategoryInput> | AttractionCreateWithoutCategoryInput[] | AttractionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutCategoryInput | AttractionCreateOrConnectWithoutCategoryInput[]
    createMany?: AttractionCreateManyCategoryInputEnvelope
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type EnumTouristPlaceCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TouristPlaceCategory
  }

  export type AttractionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AttractionCreateWithoutCategoryInput, AttractionUncheckedCreateWithoutCategoryInput> | AttractionCreateWithoutCategoryInput[] | AttractionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutCategoryInput | AttractionCreateOrConnectWithoutCategoryInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutCategoryInput | AttractionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AttractionCreateManyCategoryInputEnvelope
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutCategoryInput | AttractionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutCategoryInput | AttractionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type AttractionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AttractionCreateWithoutCategoryInput, AttractionUncheckedCreateWithoutCategoryInput> | AttractionCreateWithoutCategoryInput[] | AttractionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutCategoryInput | AttractionCreateOrConnectWithoutCategoryInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutCategoryInput | AttractionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AttractionCreateManyCategoryInputEnvelope
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutCategoryInput | AttractionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutCategoryInput | AttractionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type AttractionCreateNestedOneWithoutMediaInput = {
    create?: XOR<AttractionCreateWithoutMediaInput, AttractionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutMediaInput
    connect?: AttractionWhereUniqueInput
  }

  export type AttractionUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<AttractionCreateWithoutMediaInput, AttractionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutMediaInput
    upsert?: AttractionUpsertWithoutMediaInput
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutMediaInput, AttractionUpdateWithoutMediaInput>, AttractionUncheckedUpdateWithoutMediaInput>
  }

  export type AttractionCreateNestedOneWithoutReviewsInput = {
    create?: XOR<AttractionCreateWithoutReviewsInput, AttractionUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutReviewsInput
    connect?: AttractionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type AttractionUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<AttractionCreateWithoutReviewsInput, AttractionUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutReviewsInput
    upsert?: AttractionUpsertWithoutReviewsInput
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutReviewsInput, AttractionUpdateWithoutReviewsInput>, AttractionUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type AttractionCreateNestedManyWithoutTagsInput = {
    create?: XOR<AttractionCreateWithoutTagsInput, AttractionUncheckedCreateWithoutTagsInput> | AttractionCreateWithoutTagsInput[] | AttractionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutTagsInput | AttractionCreateOrConnectWithoutTagsInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type AttractionToTagCreateNestedManyWithoutTagInput = {
    create?: XOR<AttractionToTagCreateWithoutTagInput, AttractionToTagUncheckedCreateWithoutTagInput> | AttractionToTagCreateWithoutTagInput[] | AttractionToTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutTagInput | AttractionToTagCreateOrConnectWithoutTagInput[]
    createMany?: AttractionToTagCreateManyTagInputEnvelope
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
  }

  export type AttractionUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<AttractionCreateWithoutTagsInput, AttractionUncheckedCreateWithoutTagsInput> | AttractionCreateWithoutTagsInput[] | AttractionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutTagsInput | AttractionCreateOrConnectWithoutTagsInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type AttractionToTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<AttractionToTagCreateWithoutTagInput, AttractionToTagUncheckedCreateWithoutTagInput> | AttractionToTagCreateWithoutTagInput[] | AttractionToTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutTagInput | AttractionToTagCreateOrConnectWithoutTagInput[]
    createMany?: AttractionToTagCreateManyTagInputEnvelope
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
  }

  export type AttractionUpdateManyWithoutTagsNestedInput = {
    create?: XOR<AttractionCreateWithoutTagsInput, AttractionUncheckedCreateWithoutTagsInput> | AttractionCreateWithoutTagsInput[] | AttractionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutTagsInput | AttractionCreateOrConnectWithoutTagsInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutTagsInput | AttractionUpsertWithWhereUniqueWithoutTagsInput[]
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutTagsInput | AttractionUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutTagsInput | AttractionUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type AttractionToTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<AttractionToTagCreateWithoutTagInput, AttractionToTagUncheckedCreateWithoutTagInput> | AttractionToTagCreateWithoutTagInput[] | AttractionToTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutTagInput | AttractionToTagCreateOrConnectWithoutTagInput[]
    upsert?: AttractionToTagUpsertWithWhereUniqueWithoutTagInput | AttractionToTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: AttractionToTagCreateManyTagInputEnvelope
    set?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    disconnect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    delete?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    update?: AttractionToTagUpdateWithWhereUniqueWithoutTagInput | AttractionToTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: AttractionToTagUpdateManyWithWhereWithoutTagInput | AttractionToTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: AttractionToTagScalarWhereInput | AttractionToTagScalarWhereInput[]
  }

  export type AttractionUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<AttractionCreateWithoutTagsInput, AttractionUncheckedCreateWithoutTagsInput> | AttractionCreateWithoutTagsInput[] | AttractionUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutTagsInput | AttractionCreateOrConnectWithoutTagsInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutTagsInput | AttractionUpsertWithWhereUniqueWithoutTagsInput[]
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutTagsInput | AttractionUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutTagsInput | AttractionUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type AttractionToTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<AttractionToTagCreateWithoutTagInput, AttractionToTagUncheckedCreateWithoutTagInput> | AttractionToTagCreateWithoutTagInput[] | AttractionToTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: AttractionToTagCreateOrConnectWithoutTagInput | AttractionToTagCreateOrConnectWithoutTagInput[]
    upsert?: AttractionToTagUpsertWithWhereUniqueWithoutTagInput | AttractionToTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: AttractionToTagCreateManyTagInputEnvelope
    set?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    disconnect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    delete?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    connect?: AttractionToTagWhereUniqueInput | AttractionToTagWhereUniqueInput[]
    update?: AttractionToTagUpdateWithWhereUniqueWithoutTagInput | AttractionToTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: AttractionToTagUpdateManyWithWhereWithoutTagInput | AttractionToTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: AttractionToTagScalarWhereInput | AttractionToTagScalarWhereInput[]
  }

  export type AttractionCreateNestedOneWithoutOperatingHoursInput = {
    create?: XOR<AttractionCreateWithoutOperatingHoursInput, AttractionUncheckedCreateWithoutOperatingHoursInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutOperatingHoursInput
    connect?: AttractionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AttractionUpdateOneRequiredWithoutOperatingHoursNestedInput = {
    create?: XOR<AttractionCreateWithoutOperatingHoursInput, AttractionUncheckedCreateWithoutOperatingHoursInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutOperatingHoursInput
    upsert?: AttractionUpsertWithoutOperatingHoursInput
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutOperatingHoursInput, AttractionUpdateWithoutOperatingHoursInput>, AttractionUncheckedUpdateWithoutOperatingHoursInput>
  }

  export type UserCreateNestedOneWithoutRoutesInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    connect?: UserWhereUniqueInput
  }

  export type AttractionCreateNestedManyWithoutRoutesInput = {
    create?: XOR<AttractionCreateWithoutRoutesInput, AttractionUncheckedCreateWithoutRoutesInput> | AttractionCreateWithoutRoutesInput[] | AttractionUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutRoutesInput | AttractionCreateOrConnectWithoutRoutesInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type RouteRatingCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteRatingCreateWithoutRouteInput, RouteRatingUncheckedCreateWithoutRouteInput> | RouteRatingCreateWithoutRouteInput[] | RouteRatingUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutRouteInput | RouteRatingCreateOrConnectWithoutRouteInput[]
    createMany?: RouteRatingCreateManyRouteInputEnvelope
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
  }

  export type RouteToAttractionCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteToAttractionCreateWithoutRouteInput, RouteToAttractionUncheckedCreateWithoutRouteInput> | RouteToAttractionCreateWithoutRouteInput[] | RouteToAttractionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutRouteInput | RouteToAttractionCreateOrConnectWithoutRouteInput[]
    createMany?: RouteToAttractionCreateManyRouteInputEnvelope
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
  }

  export type AttractionUncheckedCreateNestedManyWithoutRoutesInput = {
    create?: XOR<AttractionCreateWithoutRoutesInput, AttractionUncheckedCreateWithoutRoutesInput> | AttractionCreateWithoutRoutesInput[] | AttractionUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutRoutesInput | AttractionCreateOrConnectWithoutRoutesInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type RouteRatingUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteRatingCreateWithoutRouteInput, RouteRatingUncheckedCreateWithoutRouteInput> | RouteRatingCreateWithoutRouteInput[] | RouteRatingUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutRouteInput | RouteRatingCreateOrConnectWithoutRouteInput[]
    createMany?: RouteRatingCreateManyRouteInputEnvelope
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
  }

  export type RouteToAttractionUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteToAttractionCreateWithoutRouteInput, RouteToAttractionUncheckedCreateWithoutRouteInput> | RouteToAttractionCreateWithoutRouteInput[] | RouteToAttractionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutRouteInput | RouteToAttractionCreateOrConnectWithoutRouteInput[]
    createMany?: RouteToAttractionCreateManyRouteInputEnvelope
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    upsert?: UserUpsertWithoutRoutesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutesInput, UserUpdateWithoutRoutesInput>, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type AttractionUpdateManyWithoutRoutesNestedInput = {
    create?: XOR<AttractionCreateWithoutRoutesInput, AttractionUncheckedCreateWithoutRoutesInput> | AttractionCreateWithoutRoutesInput[] | AttractionUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutRoutesInput | AttractionCreateOrConnectWithoutRoutesInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutRoutesInput | AttractionUpsertWithWhereUniqueWithoutRoutesInput[]
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutRoutesInput | AttractionUpdateWithWhereUniqueWithoutRoutesInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutRoutesInput | AttractionUpdateManyWithWhereWithoutRoutesInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type RouteRatingUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteRatingCreateWithoutRouteInput, RouteRatingUncheckedCreateWithoutRouteInput> | RouteRatingCreateWithoutRouteInput[] | RouteRatingUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutRouteInput | RouteRatingCreateOrConnectWithoutRouteInput[]
    upsert?: RouteRatingUpsertWithWhereUniqueWithoutRouteInput | RouteRatingUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteRatingCreateManyRouteInputEnvelope
    set?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    disconnect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    delete?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    update?: RouteRatingUpdateWithWhereUniqueWithoutRouteInput | RouteRatingUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteRatingUpdateManyWithWhereWithoutRouteInput | RouteRatingUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteRatingScalarWhereInput | RouteRatingScalarWhereInput[]
  }

  export type RouteToAttractionUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteToAttractionCreateWithoutRouteInput, RouteToAttractionUncheckedCreateWithoutRouteInput> | RouteToAttractionCreateWithoutRouteInput[] | RouteToAttractionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutRouteInput | RouteToAttractionCreateOrConnectWithoutRouteInput[]
    upsert?: RouteToAttractionUpsertWithWhereUniqueWithoutRouteInput | RouteToAttractionUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteToAttractionCreateManyRouteInputEnvelope
    set?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    disconnect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    delete?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    update?: RouteToAttractionUpdateWithWhereUniqueWithoutRouteInput | RouteToAttractionUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteToAttractionUpdateManyWithWhereWithoutRouteInput | RouteToAttractionUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteToAttractionScalarWhereInput | RouteToAttractionScalarWhereInput[]
  }

  export type AttractionUncheckedUpdateManyWithoutRoutesNestedInput = {
    create?: XOR<AttractionCreateWithoutRoutesInput, AttractionUncheckedCreateWithoutRoutesInput> | AttractionCreateWithoutRoutesInput[] | AttractionUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutRoutesInput | AttractionCreateOrConnectWithoutRoutesInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutRoutesInput | AttractionUpsertWithWhereUniqueWithoutRoutesInput[]
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutRoutesInput | AttractionUpdateWithWhereUniqueWithoutRoutesInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutRoutesInput | AttractionUpdateManyWithWhereWithoutRoutesInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type RouteRatingUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteRatingCreateWithoutRouteInput, RouteRatingUncheckedCreateWithoutRouteInput> | RouteRatingCreateWithoutRouteInput[] | RouteRatingUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteRatingCreateOrConnectWithoutRouteInput | RouteRatingCreateOrConnectWithoutRouteInput[]
    upsert?: RouteRatingUpsertWithWhereUniqueWithoutRouteInput | RouteRatingUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteRatingCreateManyRouteInputEnvelope
    set?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    disconnect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    delete?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    connect?: RouteRatingWhereUniqueInput | RouteRatingWhereUniqueInput[]
    update?: RouteRatingUpdateWithWhereUniqueWithoutRouteInput | RouteRatingUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteRatingUpdateManyWithWhereWithoutRouteInput | RouteRatingUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteRatingScalarWhereInput | RouteRatingScalarWhereInput[]
  }

  export type RouteToAttractionUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteToAttractionCreateWithoutRouteInput, RouteToAttractionUncheckedCreateWithoutRouteInput> | RouteToAttractionCreateWithoutRouteInput[] | RouteToAttractionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteToAttractionCreateOrConnectWithoutRouteInput | RouteToAttractionCreateOrConnectWithoutRouteInput[]
    upsert?: RouteToAttractionUpsertWithWhereUniqueWithoutRouteInput | RouteToAttractionUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteToAttractionCreateManyRouteInputEnvelope
    set?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    disconnect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    delete?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    connect?: RouteToAttractionWhereUniqueInput | RouteToAttractionWhereUniqueInput[]
    update?: RouteToAttractionUpdateWithWhereUniqueWithoutRouteInput | RouteToAttractionUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteToAttractionUpdateManyWithWhereWithoutRouteInput | RouteToAttractionUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteToAttractionScalarWhereInput | RouteToAttractionScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutRatingsInput = {
    create?: XOR<RouteCreateWithoutRatingsInput, RouteUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRatingsInput
    connect?: RouteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRouteRatingsInput = {
    create?: XOR<UserCreateWithoutRouteRatingsInput, UserUncheckedCreateWithoutRouteRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRouteRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<RouteCreateWithoutRatingsInput, RouteUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRatingsInput
    upsert?: RouteUpsertWithoutRatingsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRatingsInput, RouteUpdateWithoutRatingsInput>, RouteUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutRouteRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRouteRatingsInput, UserUncheckedCreateWithoutRouteRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRouteRatingsInput
    upsert?: UserUpsertWithoutRouteRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRouteRatingsInput, UserUpdateWithoutRouteRatingsInput>, UserUncheckedUpdateWithoutRouteRatingsInput>
  }

  export type AttractionCreateNestedOneWithoutAttractionToTagInput = {
    create?: XOR<AttractionCreateWithoutAttractionToTagInput, AttractionUncheckedCreateWithoutAttractionToTagInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutAttractionToTagInput
    connect?: AttractionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutAttractionToTagInput = {
    create?: XOR<TagCreateWithoutAttractionToTagInput, TagUncheckedCreateWithoutAttractionToTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutAttractionToTagInput
    connect?: TagWhereUniqueInput
  }

  export type AttractionUpdateOneRequiredWithoutAttractionToTagNestedInput = {
    create?: XOR<AttractionCreateWithoutAttractionToTagInput, AttractionUncheckedCreateWithoutAttractionToTagInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutAttractionToTagInput
    upsert?: AttractionUpsertWithoutAttractionToTagInput
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutAttractionToTagInput, AttractionUpdateWithoutAttractionToTagInput>, AttractionUncheckedUpdateWithoutAttractionToTagInput>
  }

  export type TagUpdateOneRequiredWithoutAttractionToTagNestedInput = {
    create?: XOR<TagCreateWithoutAttractionToTagInput, TagUncheckedCreateWithoutAttractionToTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutAttractionToTagInput
    upsert?: TagUpsertWithoutAttractionToTagInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutAttractionToTagInput, TagUpdateWithoutAttractionToTagInput>, TagUncheckedUpdateWithoutAttractionToTagInput>
  }

  export type RouteCreateNestedOneWithoutRouteToAttractionInput = {
    create?: XOR<RouteCreateWithoutRouteToAttractionInput, RouteUncheckedCreateWithoutRouteToAttractionInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteToAttractionInput
    connect?: RouteWhereUniqueInput
  }

  export type AttractionCreateNestedOneWithoutRouteToAttractionInput = {
    create?: XOR<AttractionCreateWithoutRouteToAttractionInput, AttractionUncheckedCreateWithoutRouteToAttractionInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutRouteToAttractionInput
    connect?: AttractionWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutRouteToAttractionNestedInput = {
    create?: XOR<RouteCreateWithoutRouteToAttractionInput, RouteUncheckedCreateWithoutRouteToAttractionInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteToAttractionInput
    upsert?: RouteUpsertWithoutRouteToAttractionInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRouteToAttractionInput, RouteUpdateWithoutRouteToAttractionInput>, RouteUncheckedUpdateWithoutRouteToAttractionInput>
  }

  export type AttractionUpdateOneRequiredWithoutRouteToAttractionNestedInput = {
    create?: XOR<AttractionCreateWithoutRouteToAttractionInput, AttractionUncheckedCreateWithoutRouteToAttractionInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutRouteToAttractionInput
    upsert?: AttractionUpsertWithoutRouteToAttractionInput
    connect?: AttractionWhereUniqueInput
    update?: XOR<XOR<AttractionUpdateToOneWithWhereWithoutRouteToAttractionInput, AttractionUpdateWithoutRouteToAttractionInput>, AttractionUncheckedUpdateWithoutRouteToAttractionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTouristPlaceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TouristPlaceCategory | EnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTouristPlaceCategoryFilter<$PrismaModel> | $Enums.TouristPlaceCategory
  }

  export type NestedEnumTouristPlaceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TouristPlaceCategory | EnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TouristPlaceCategory[] | ListEnumTouristPlaceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTouristPlaceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TouristPlaceCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTouristPlaceCategoryFilter<$PrismaModel>
    _max?: NestedEnumTouristPlaceCategoryFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RouteCreateWithoutUserInput = {
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutRoutesInput
    ratings?: RouteRatingCreateNestedManyWithoutRouteInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutRoutesInput
    ratings?: RouteRatingUncheckedCreateNestedManyWithoutRouteInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutUserInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateManyUserInputEnvelope = {
    data: RouteCreateManyUserInput | RouteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attraction: AttractionCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    attractionId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RouteRatingCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutRatingsInput
  }

  export type RouteRatingUncheckedCreateWithoutUserInput = {
    id?: number
    routeId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteRatingCreateOrConnectWithoutUserInput = {
    where: RouteRatingWhereUniqueInput
    create: XOR<RouteRatingCreateWithoutUserInput, RouteRatingUncheckedCreateWithoutUserInput>
  }

  export type RouteRatingCreateManyUserInputEnvelope = {
    data: RouteRatingCreateManyUserInput | RouteRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
  }

  export type RouteUpdateManyWithWhereWithoutUserInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutUserInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    userId?: StringFilter<"Route"> | string
    isGenerated?: BoolFilter<"Route"> | boolean
    duration?: FloatNullableFilter<"Route"> | number | null
    distance?: FloatNullableFilter<"Route"> | number | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    attractionId?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type RouteRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RouteRatingWhereUniqueInput
    update: XOR<RouteRatingUpdateWithoutUserInput, RouteRatingUncheckedUpdateWithoutUserInput>
    create: XOR<RouteRatingCreateWithoutUserInput, RouteRatingUncheckedCreateWithoutUserInput>
  }

  export type RouteRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RouteRatingWhereUniqueInput
    data: XOR<RouteRatingUpdateWithoutUserInput, RouteRatingUncheckedUpdateWithoutUserInput>
  }

  export type RouteRatingUpdateManyWithWhereWithoutUserInput = {
    where: RouteRatingScalarWhereInput
    data: XOR<RouteRatingUpdateManyMutationInput, RouteRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type RouteRatingScalarWhereInput = {
    AND?: RouteRatingScalarWhereInput | RouteRatingScalarWhereInput[]
    OR?: RouteRatingScalarWhereInput[]
    NOT?: RouteRatingScalarWhereInput | RouteRatingScalarWhereInput[]
    id?: IntFilter<"RouteRating"> | number
    routeId?: IntFilter<"RouteRating"> | number
    userId?: StringFilter<"RouteRating"> | string
    rating?: IntFilter<"RouteRating"> | number
    comment?: StringNullableFilter<"RouteRating"> | string | null
    createdAt?: DateTimeFilter<"RouteRating"> | Date | string
    updatedAt?: DateTimeFilter<"RouteRating"> | Date | string
  }

  export type CategoryCreateWithoutAttractionsInput = {
    name?: $Enums.TouristPlaceCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutAttractionsInput = {
    id?: number
    name?: $Enums.TouristPlaceCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutAttractionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAttractionsInput, CategoryUncheckedCreateWithoutAttractionsInput>
  }

  export type LocationCreateWithoutAttractionInput = {
    latitude: number
    longitude: number
    address?: string | null
    city?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutAttractionInput = {
    id?: number
    latitude: number
    longitude: number
    address?: string | null
    city?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutAttractionInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAttractionInput, LocationUncheckedCreateWithoutAttractionInput>
  }

  export type MediaCreateWithoutAttractionInput = {
    url: string
    type: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutAttractionInput = {
    id?: number
    url: string
    type: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutAttractionInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutAttractionInput, MediaUncheckedCreateWithoutAttractionInput>
  }

  export type MediaCreateManyAttractionInputEnvelope = {
    data: MediaCreateManyAttractionInput | MediaCreateManyAttractionInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutAttractionInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutAttractionInput = {
    id?: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAttractionInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAttractionInput, ReviewUncheckedCreateWithoutAttractionInput>
  }

  export type ReviewCreateManyAttractionInputEnvelope = {
    data: ReviewCreateManyAttractionInput | ReviewCreateManyAttractionInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutAttractionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutAttractionsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutAttractionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutAttractionsInput, TagUncheckedCreateWithoutAttractionsInput>
  }

  export type OperatingHoursCreateWithoutAttractionInput = {
    dayOfWeek: string
    openTime?: string | null
    closeTime?: string | null
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursUncheckedCreateWithoutAttractionInput = {
    id?: number
    dayOfWeek: string
    openTime?: string | null
    closeTime?: string | null
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursCreateOrConnectWithoutAttractionInput = {
    where: OperatingHoursWhereUniqueInput
    create: XOR<OperatingHoursCreateWithoutAttractionInput, OperatingHoursUncheckedCreateWithoutAttractionInput>
  }

  export type OperatingHoursCreateManyAttractionInputEnvelope = {
    data: OperatingHoursCreateManyAttractionInput | OperatingHoursCreateManyAttractionInput[]
    skipDuplicates?: boolean
  }

  export type RouteCreateWithoutAttractionsInput = {
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    ratings?: RouteRatingCreateNestedManyWithoutRouteInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutAttractionsInput = {
    id?: number
    name: string
    description?: string | null
    userId: string
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: RouteRatingUncheckedCreateNestedManyWithoutRouteInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutAttractionsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutAttractionsInput, RouteUncheckedCreateWithoutAttractionsInput>
  }

  export type AttractionToTagCreateWithoutAttractionInput = {
    tag: TagCreateNestedOneWithoutAttractionToTagInput
  }

  export type AttractionToTagUncheckedCreateWithoutAttractionInput = {
    tagId: number
  }

  export type AttractionToTagCreateOrConnectWithoutAttractionInput = {
    where: AttractionToTagWhereUniqueInput
    create: XOR<AttractionToTagCreateWithoutAttractionInput, AttractionToTagUncheckedCreateWithoutAttractionInput>
  }

  export type AttractionToTagCreateManyAttractionInputEnvelope = {
    data: AttractionToTagCreateManyAttractionInput | AttractionToTagCreateManyAttractionInput[]
    skipDuplicates?: boolean
  }

  export type RouteToAttractionCreateWithoutAttractionInput = {
    route: RouteCreateNestedOneWithoutRouteToAttractionInput
  }

  export type RouteToAttractionUncheckedCreateWithoutAttractionInput = {
    routeId: number
  }

  export type RouteToAttractionCreateOrConnectWithoutAttractionInput = {
    where: RouteToAttractionWhereUniqueInput
    create: XOR<RouteToAttractionCreateWithoutAttractionInput, RouteToAttractionUncheckedCreateWithoutAttractionInput>
  }

  export type RouteToAttractionCreateManyAttractionInputEnvelope = {
    data: RouteToAttractionCreateManyAttractionInput | RouteToAttractionCreateManyAttractionInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutAttractionsInput = {
    update: XOR<CategoryUpdateWithoutAttractionsInput, CategoryUncheckedUpdateWithoutAttractionsInput>
    create: XOR<CategoryCreateWithoutAttractionsInput, CategoryUncheckedCreateWithoutAttractionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAttractionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAttractionsInput, CategoryUncheckedUpdateWithoutAttractionsInput>
  }

  export type CategoryUpdateWithoutAttractionsInput = {
    name?: EnumTouristPlaceCategoryFieldUpdateOperationsInput | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumTouristPlaceCategoryFieldUpdateOperationsInput | $Enums.TouristPlaceCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithoutAttractionInput = {
    update: XOR<LocationUpdateWithoutAttractionInput, LocationUncheckedUpdateWithoutAttractionInput>
    create: XOR<LocationCreateWithoutAttractionInput, LocationUncheckedCreateWithoutAttractionInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutAttractionInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAttractionInput, LocationUncheckedUpdateWithoutAttractionInput>
  }

  export type LocationUpdateWithoutAttractionInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutAttractionInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutAttractionInput, MediaUncheckedUpdateWithoutAttractionInput>
    create: XOR<MediaCreateWithoutAttractionInput, MediaUncheckedCreateWithoutAttractionInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutAttractionInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutAttractionInput, MediaUncheckedUpdateWithoutAttractionInput>
  }

  export type MediaUpdateManyWithWhereWithoutAttractionInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutAttractionInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    attractionId?: IntFilter<"Media"> | number
    url?: StringFilter<"Media"> | string
    type?: StringFilter<"Media"> | string
    caption?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutAttractionInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAttractionInput, ReviewUncheckedUpdateWithoutAttractionInput>
    create: XOR<ReviewCreateWithoutAttractionInput, ReviewUncheckedCreateWithoutAttractionInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAttractionInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAttractionInput, ReviewUncheckedUpdateWithoutAttractionInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAttractionInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAttractionInput>
  }

  export type TagUpsertWithWhereUniqueWithoutAttractionsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutAttractionsInput, TagUncheckedUpdateWithoutAttractionsInput>
    create: XOR<TagCreateWithoutAttractionsInput, TagUncheckedCreateWithoutAttractionsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutAttractionsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutAttractionsInput, TagUncheckedUpdateWithoutAttractionsInput>
  }

  export type TagUpdateManyWithWhereWithoutAttractionsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutAttractionsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type OperatingHoursUpsertWithWhereUniqueWithoutAttractionInput = {
    where: OperatingHoursWhereUniqueInput
    update: XOR<OperatingHoursUpdateWithoutAttractionInput, OperatingHoursUncheckedUpdateWithoutAttractionInput>
    create: XOR<OperatingHoursCreateWithoutAttractionInput, OperatingHoursUncheckedCreateWithoutAttractionInput>
  }

  export type OperatingHoursUpdateWithWhereUniqueWithoutAttractionInput = {
    where: OperatingHoursWhereUniqueInput
    data: XOR<OperatingHoursUpdateWithoutAttractionInput, OperatingHoursUncheckedUpdateWithoutAttractionInput>
  }

  export type OperatingHoursUpdateManyWithWhereWithoutAttractionInput = {
    where: OperatingHoursScalarWhereInput
    data: XOR<OperatingHoursUpdateManyMutationInput, OperatingHoursUncheckedUpdateManyWithoutAttractionInput>
  }

  export type OperatingHoursScalarWhereInput = {
    AND?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
    OR?: OperatingHoursScalarWhereInput[]
    NOT?: OperatingHoursScalarWhereInput | OperatingHoursScalarWhereInput[]
    id?: IntFilter<"OperatingHours"> | number
    attractionId?: IntFilter<"OperatingHours"> | number
    dayOfWeek?: StringFilter<"OperatingHours"> | string
    openTime?: StringNullableFilter<"OperatingHours"> | string | null
    closeTime?: StringNullableFilter<"OperatingHours"> | string | null
    isClosed?: BoolFilter<"OperatingHours"> | boolean
    createdAt?: DateTimeFilter<"OperatingHours"> | Date | string
    updatedAt?: DateTimeFilter<"OperatingHours"> | Date | string
  }

  export type RouteUpsertWithWhereUniqueWithoutAttractionsInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutAttractionsInput, RouteUncheckedUpdateWithoutAttractionsInput>
    create: XOR<RouteCreateWithoutAttractionsInput, RouteUncheckedCreateWithoutAttractionsInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutAttractionsInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutAttractionsInput, RouteUncheckedUpdateWithoutAttractionsInput>
  }

  export type RouteUpdateManyWithWhereWithoutAttractionsInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutAttractionsInput>
  }

  export type AttractionToTagUpsertWithWhereUniqueWithoutAttractionInput = {
    where: AttractionToTagWhereUniqueInput
    update: XOR<AttractionToTagUpdateWithoutAttractionInput, AttractionToTagUncheckedUpdateWithoutAttractionInput>
    create: XOR<AttractionToTagCreateWithoutAttractionInput, AttractionToTagUncheckedCreateWithoutAttractionInput>
  }

  export type AttractionToTagUpdateWithWhereUniqueWithoutAttractionInput = {
    where: AttractionToTagWhereUniqueInput
    data: XOR<AttractionToTagUpdateWithoutAttractionInput, AttractionToTagUncheckedUpdateWithoutAttractionInput>
  }

  export type AttractionToTagUpdateManyWithWhereWithoutAttractionInput = {
    where: AttractionToTagScalarWhereInput
    data: XOR<AttractionToTagUpdateManyMutationInput, AttractionToTagUncheckedUpdateManyWithoutAttractionInput>
  }

  export type AttractionToTagScalarWhereInput = {
    AND?: AttractionToTagScalarWhereInput | AttractionToTagScalarWhereInput[]
    OR?: AttractionToTagScalarWhereInput[]
    NOT?: AttractionToTagScalarWhereInput | AttractionToTagScalarWhereInput[]
    attractionId?: IntFilter<"AttractionToTag"> | number
    tagId?: IntFilter<"AttractionToTag"> | number
  }

  export type RouteToAttractionUpsertWithWhereUniqueWithoutAttractionInput = {
    where: RouteToAttractionWhereUniqueInput
    update: XOR<RouteToAttractionUpdateWithoutAttractionInput, RouteToAttractionUncheckedUpdateWithoutAttractionInput>
    create: XOR<RouteToAttractionCreateWithoutAttractionInput, RouteToAttractionUncheckedCreateWithoutAttractionInput>
  }

  export type RouteToAttractionUpdateWithWhereUniqueWithoutAttractionInput = {
    where: RouteToAttractionWhereUniqueInput
    data: XOR<RouteToAttractionUpdateWithoutAttractionInput, RouteToAttractionUncheckedUpdateWithoutAttractionInput>
  }

  export type RouteToAttractionUpdateManyWithWhereWithoutAttractionInput = {
    where: RouteToAttractionScalarWhereInput
    data: XOR<RouteToAttractionUpdateManyMutationInput, RouteToAttractionUncheckedUpdateManyWithoutAttractionInput>
  }

  export type RouteToAttractionScalarWhereInput = {
    AND?: RouteToAttractionScalarWhereInput | RouteToAttractionScalarWhereInput[]
    OR?: RouteToAttractionScalarWhereInput[]
    NOT?: RouteToAttractionScalarWhereInput | RouteToAttractionScalarWhereInput[]
    routeId?: IntFilter<"RouteToAttraction"> | number
    attractionId?: IntFilter<"RouteToAttraction"> | number
  }

  export type AttractionCreateWithoutLocationInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutLocationInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutLocationInput, AttractionUncheckedCreateWithoutLocationInput>
  }

  export type AttractionUpsertWithoutLocationInput = {
    update: XOR<AttractionUpdateWithoutLocationInput, AttractionUncheckedUpdateWithoutLocationInput>
    create: XOR<AttractionCreateWithoutLocationInput, AttractionUncheckedCreateWithoutLocationInput>
    where?: AttractionWhereInput
  }

  export type AttractionUpdateToOneWithWhereWithoutLocationInput = {
    where?: AttractionWhereInput
    data: XOR<AttractionUpdateWithoutLocationInput, AttractionUncheckedUpdateWithoutLocationInput>
  }

  export type AttractionUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutCategoryInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutCategoryInput, AttractionUncheckedCreateWithoutCategoryInput>
  }

  export type AttractionCreateManyCategoryInputEnvelope = {
    data: AttractionCreateManyCategoryInput | AttractionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AttractionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AttractionWhereUniqueInput
    update: XOR<AttractionUpdateWithoutCategoryInput, AttractionUncheckedUpdateWithoutCategoryInput>
    create: XOR<AttractionCreateWithoutCategoryInput, AttractionUncheckedCreateWithoutCategoryInput>
  }

  export type AttractionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AttractionWhereUniqueInput
    data: XOR<AttractionUpdateWithoutCategoryInput, AttractionUncheckedUpdateWithoutCategoryInput>
  }

  export type AttractionUpdateManyWithWhereWithoutCategoryInput = {
    where: AttractionScalarWhereInput
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AttractionScalarWhereInput = {
    AND?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
    OR?: AttractionScalarWhereInput[]
    NOT?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
    id?: IntFilter<"Attraction"> | number
    name?: StringFilter<"Attraction"> | string
    description?: StringNullableFilter<"Attraction"> | string | null
    categoryId?: IntFilter<"Attraction"> | number
    locationId?: IntFilter<"Attraction"> | number
    averageRating?: FloatNullableFilter<"Attraction"> | number | null
    visitDuration?: FloatNullableFilter<"Attraction"> | number | null
    entryFee?: FloatNullableFilter<"Attraction"> | number | null
    website?: StringNullableFilter<"Attraction"> | string | null
    phone?: StringNullableFilter<"Attraction"> | string | null
    createdAt?: DateTimeFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeFilter<"Attraction"> | Date | string
  }

  export type AttractionCreateWithoutMediaInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutMediaInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutMediaInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutMediaInput, AttractionUncheckedCreateWithoutMediaInput>
  }

  export type AttractionUpsertWithoutMediaInput = {
    update: XOR<AttractionUpdateWithoutMediaInput, AttractionUncheckedUpdateWithoutMediaInput>
    create: XOR<AttractionCreateWithoutMediaInput, AttractionUncheckedCreateWithoutMediaInput>
    where?: AttractionWhereInput
  }

  export type AttractionUpdateToOneWithWhereWithoutMediaInput = {
    where?: AttractionWhereInput
    data: XOR<AttractionUpdateWithoutMediaInput, AttractionUncheckedUpdateWithoutMediaInput>
  }

  export type AttractionUpdateWithoutMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionCreateWithoutReviewsInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutReviewsInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutReviewsInput, AttractionUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    routes?: RouteCreateNestedManyWithoutUserInput
    routeRatings?: RouteRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    routeRatings?: RouteRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type AttractionUpsertWithoutReviewsInput = {
    update: XOR<AttractionUpdateWithoutReviewsInput, AttractionUncheckedUpdateWithoutReviewsInput>
    create: XOR<AttractionCreateWithoutReviewsInput, AttractionUncheckedCreateWithoutReviewsInput>
    where?: AttractionWhereInput
  }

  export type AttractionUpdateToOneWithWhereWithoutReviewsInput = {
    where?: AttractionWhereInput
    data: XOR<AttractionUpdateWithoutReviewsInput, AttractionUncheckedUpdateWithoutReviewsInput>
  }

  export type AttractionUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    routes?: RouteUpdateManyWithoutUserNestedInput
    routeRatings?: RouteRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    routeRatings?: RouteRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttractionCreateWithoutTagsInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutTagsInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutTagsInput, AttractionUncheckedCreateWithoutTagsInput>
  }

  export type AttractionToTagCreateWithoutTagInput = {
    attraction: AttractionCreateNestedOneWithoutAttractionToTagInput
  }

  export type AttractionToTagUncheckedCreateWithoutTagInput = {
    attractionId: number
  }

  export type AttractionToTagCreateOrConnectWithoutTagInput = {
    where: AttractionToTagWhereUniqueInput
    create: XOR<AttractionToTagCreateWithoutTagInput, AttractionToTagUncheckedCreateWithoutTagInput>
  }

  export type AttractionToTagCreateManyTagInputEnvelope = {
    data: AttractionToTagCreateManyTagInput | AttractionToTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type AttractionUpsertWithWhereUniqueWithoutTagsInput = {
    where: AttractionWhereUniqueInput
    update: XOR<AttractionUpdateWithoutTagsInput, AttractionUncheckedUpdateWithoutTagsInput>
    create: XOR<AttractionCreateWithoutTagsInput, AttractionUncheckedCreateWithoutTagsInput>
  }

  export type AttractionUpdateWithWhereUniqueWithoutTagsInput = {
    where: AttractionWhereUniqueInput
    data: XOR<AttractionUpdateWithoutTagsInput, AttractionUncheckedUpdateWithoutTagsInput>
  }

  export type AttractionUpdateManyWithWhereWithoutTagsInput = {
    where: AttractionScalarWhereInput
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyWithoutTagsInput>
  }

  export type AttractionToTagUpsertWithWhereUniqueWithoutTagInput = {
    where: AttractionToTagWhereUniqueInput
    update: XOR<AttractionToTagUpdateWithoutTagInput, AttractionToTagUncheckedUpdateWithoutTagInput>
    create: XOR<AttractionToTagCreateWithoutTagInput, AttractionToTagUncheckedCreateWithoutTagInput>
  }

  export type AttractionToTagUpdateWithWhereUniqueWithoutTagInput = {
    where: AttractionToTagWhereUniqueInput
    data: XOR<AttractionToTagUpdateWithoutTagInput, AttractionToTagUncheckedUpdateWithoutTagInput>
  }

  export type AttractionToTagUpdateManyWithWhereWithoutTagInput = {
    where: AttractionToTagScalarWhereInput
    data: XOR<AttractionToTagUpdateManyMutationInput, AttractionToTagUncheckedUpdateManyWithoutTagInput>
  }

  export type AttractionCreateWithoutOperatingHoursInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutOperatingHoursInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutOperatingHoursInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutOperatingHoursInput, AttractionUncheckedCreateWithoutOperatingHoursInput>
  }

  export type AttractionUpsertWithoutOperatingHoursInput = {
    update: XOR<AttractionUpdateWithoutOperatingHoursInput, AttractionUncheckedUpdateWithoutOperatingHoursInput>
    create: XOR<AttractionCreateWithoutOperatingHoursInput, AttractionUncheckedCreateWithoutOperatingHoursInput>
    where?: AttractionWhereInput
  }

  export type AttractionUpdateToOneWithWhereWithoutOperatingHoursInput = {
    where?: AttractionWhereInput
    data: XOR<AttractionUpdateWithoutOperatingHoursInput, AttractionUncheckedUpdateWithoutOperatingHoursInput>
  }

  export type AttractionUpdateWithoutOperatingHoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutOperatingHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type UserCreateWithoutRoutesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    reviews?: ReviewCreateNestedManyWithoutUserInput
    routeRatings?: RouteRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    routeRatings?: RouteRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
  }

  export type AttractionCreateWithoutRoutesInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutRoutesInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutRoutesInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutRoutesInput, AttractionUncheckedCreateWithoutRoutesInput>
  }

  export type RouteRatingCreateWithoutRouteInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRouteRatingsInput
  }

  export type RouteRatingUncheckedCreateWithoutRouteInput = {
    id?: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteRatingCreateOrConnectWithoutRouteInput = {
    where: RouteRatingWhereUniqueInput
    create: XOR<RouteRatingCreateWithoutRouteInput, RouteRatingUncheckedCreateWithoutRouteInput>
  }

  export type RouteRatingCreateManyRouteInputEnvelope = {
    data: RouteRatingCreateManyRouteInput | RouteRatingCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type RouteToAttractionCreateWithoutRouteInput = {
    attraction: AttractionCreateNestedOneWithoutRouteToAttractionInput
  }

  export type RouteToAttractionUncheckedCreateWithoutRouteInput = {
    attractionId: number
  }

  export type RouteToAttractionCreateOrConnectWithoutRouteInput = {
    where: RouteToAttractionWhereUniqueInput
    create: XOR<RouteToAttractionCreateWithoutRouteInput, RouteToAttractionUncheckedCreateWithoutRouteInput>
  }

  export type RouteToAttractionCreateManyRouteInputEnvelope = {
    data: RouteToAttractionCreateManyRouteInput | RouteToAttractionCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutesInput = {
    update: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type UserUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    routeRatings?: RouteRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    routeRatings?: RouteRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttractionUpsertWithWhereUniqueWithoutRoutesInput = {
    where: AttractionWhereUniqueInput
    update: XOR<AttractionUpdateWithoutRoutesInput, AttractionUncheckedUpdateWithoutRoutesInput>
    create: XOR<AttractionCreateWithoutRoutesInput, AttractionUncheckedCreateWithoutRoutesInput>
  }

  export type AttractionUpdateWithWhereUniqueWithoutRoutesInput = {
    where: AttractionWhereUniqueInput
    data: XOR<AttractionUpdateWithoutRoutesInput, AttractionUncheckedUpdateWithoutRoutesInput>
  }

  export type AttractionUpdateManyWithWhereWithoutRoutesInput = {
    where: AttractionScalarWhereInput
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyWithoutRoutesInput>
  }

  export type RouteRatingUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteRatingWhereUniqueInput
    update: XOR<RouteRatingUpdateWithoutRouteInput, RouteRatingUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteRatingCreateWithoutRouteInput, RouteRatingUncheckedCreateWithoutRouteInput>
  }

  export type RouteRatingUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteRatingWhereUniqueInput
    data: XOR<RouteRatingUpdateWithoutRouteInput, RouteRatingUncheckedUpdateWithoutRouteInput>
  }

  export type RouteRatingUpdateManyWithWhereWithoutRouteInput = {
    where: RouteRatingScalarWhereInput
    data: XOR<RouteRatingUpdateManyMutationInput, RouteRatingUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteToAttractionUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteToAttractionWhereUniqueInput
    update: XOR<RouteToAttractionUpdateWithoutRouteInput, RouteToAttractionUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteToAttractionCreateWithoutRouteInput, RouteToAttractionUncheckedCreateWithoutRouteInput>
  }

  export type RouteToAttractionUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteToAttractionWhereUniqueInput
    data: XOR<RouteToAttractionUpdateWithoutRouteInput, RouteToAttractionUncheckedUpdateWithoutRouteInput>
  }

  export type RouteToAttractionUpdateManyWithWhereWithoutRouteInput = {
    where: RouteToAttractionScalarWhereInput
    data: XOR<RouteToAttractionUpdateManyMutationInput, RouteToAttractionUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteCreateWithoutRatingsInput = {
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    attractions?: AttractionCreateNestedManyWithoutRoutesInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRatingsInput = {
    id?: number
    name: string
    description?: string | null
    userId: string
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutRoutesInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRatingsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRatingsInput, RouteUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutRouteRatingsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    routes?: RouteCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRouteRatingsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Roles
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRouteRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRouteRatingsInput, UserUncheckedCreateWithoutRouteRatingsInput>
  }

  export type RouteUpsertWithoutRatingsInput = {
    update: XOR<RouteUpdateWithoutRatingsInput, RouteUncheckedUpdateWithoutRatingsInput>
    create: XOR<RouteCreateWithoutRatingsInput, RouteUncheckedCreateWithoutRatingsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRatingsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRatingsInput, RouteUncheckedUpdateWithoutRatingsInput>
  }

  export type RouteUpdateWithoutRatingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    attractions?: AttractionUpdateManyWithoutRoutesNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutRoutesNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type UserUpsertWithoutRouteRatingsInput = {
    update: XOR<UserUpdateWithoutRouteRatingsInput, UserUncheckedUpdateWithoutRouteRatingsInput>
    create: XOR<UserCreateWithoutRouteRatingsInput, UserUncheckedCreateWithoutRouteRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRouteRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRouteRatingsInput, UserUncheckedUpdateWithoutRouteRatingsInput>
  }

  export type UserUpdateWithoutRouteRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    routes?: RouteUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRouteRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttractionCreateWithoutAttractionToTagInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    RouteToAttraction?: RouteToAttractionCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutAttractionToTagInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    RouteToAttraction?: RouteToAttractionUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutAttractionToTagInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutAttractionToTagInput, AttractionUncheckedCreateWithoutAttractionToTagInput>
  }

  export type TagCreateWithoutAttractionToTagInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutAttractionToTagInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutAttractionToTagInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutAttractionToTagInput, TagUncheckedCreateWithoutAttractionToTagInput>
  }

  export type AttractionUpsertWithoutAttractionToTagInput = {
    update: XOR<AttractionUpdateWithoutAttractionToTagInput, AttractionUncheckedUpdateWithoutAttractionToTagInput>
    create: XOR<AttractionCreateWithoutAttractionToTagInput, AttractionUncheckedCreateWithoutAttractionToTagInput>
    where?: AttractionWhereInput
  }

  export type AttractionUpdateToOneWithWhereWithoutAttractionToTagInput = {
    where?: AttractionWhereInput
    data: XOR<AttractionUpdateWithoutAttractionToTagInput, AttractionUncheckedUpdateWithoutAttractionToTagInput>
  }

  export type AttractionUpdateWithoutAttractionToTagInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutAttractionToTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type TagUpsertWithoutAttractionToTagInput = {
    update: XOR<TagUpdateWithoutAttractionToTagInput, TagUncheckedUpdateWithoutAttractionToTagInput>
    create: XOR<TagCreateWithoutAttractionToTagInput, TagUncheckedCreateWithoutAttractionToTagInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutAttractionToTagInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutAttractionToTagInput, TagUncheckedUpdateWithoutAttractionToTagInput>
  }

  export type TagUpdateWithoutAttractionToTagInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutAttractionToTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type RouteCreateWithoutRouteToAttractionInput = {
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    attractions?: AttractionCreateNestedManyWithoutRoutesInput
    ratings?: RouteRatingCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRouteToAttractionInput = {
    id?: number
    name: string
    description?: string | null
    userId: string
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutRoutesInput
    ratings?: RouteRatingUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRouteToAttractionInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRouteToAttractionInput, RouteUncheckedCreateWithoutRouteToAttractionInput>
  }

  export type AttractionCreateWithoutRouteToAttractionInput = {
    name: string
    description?: string | null
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutAttractionsInput
    location: LocationCreateNestedOneWithoutAttractionInput
    media?: MediaCreateNestedManyWithoutAttractionInput
    reviews?: ReviewCreateNestedManyWithoutAttractionInput
    tags?: TagCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursCreateNestedManyWithoutAttractionInput
    routes?: RouteCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutRouteToAttractionInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutAttractionInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAttractionInput
    tags?: TagUncheckedCreateNestedManyWithoutAttractionsInput
    operatingHours?: OperatingHoursUncheckedCreateNestedManyWithoutAttractionInput
    routes?: RouteUncheckedCreateNestedManyWithoutAttractionsInput
    AttractionToTag?: AttractionToTagUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutRouteToAttractionInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutRouteToAttractionInput, AttractionUncheckedCreateWithoutRouteToAttractionInput>
  }

  export type RouteUpsertWithoutRouteToAttractionInput = {
    update: XOR<RouteUpdateWithoutRouteToAttractionInput, RouteUncheckedUpdateWithoutRouteToAttractionInput>
    create: XOR<RouteCreateWithoutRouteToAttractionInput, RouteUncheckedCreateWithoutRouteToAttractionInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRouteToAttractionInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRouteToAttractionInput, RouteUncheckedUpdateWithoutRouteToAttractionInput>
  }

  export type RouteUpdateWithoutRouteToAttractionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    attractions?: AttractionUpdateManyWithoutRoutesNestedInput
    ratings?: RouteRatingUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRouteToAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutRoutesNestedInput
    ratings?: RouteRatingUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type AttractionUpsertWithoutRouteToAttractionInput = {
    update: XOR<AttractionUpdateWithoutRouteToAttractionInput, AttractionUncheckedUpdateWithoutRouteToAttractionInput>
    create: XOR<AttractionCreateWithoutRouteToAttractionInput, AttractionUncheckedCreateWithoutRouteToAttractionInput>
    where?: AttractionWhereInput
  }

  export type AttractionUpdateToOneWithWhereWithoutRouteToAttractionInput = {
    where?: AttractionWhereInput
    data: XOR<AttractionUpdateWithoutRouteToAttractionInput, AttractionUncheckedUpdateWithoutRouteToAttractionInput>
  }

  export type AttractionUpdateWithoutRouteToAttractionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutRouteToAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type RouteCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    isGenerated?: boolean
    duration?: number | null
    distance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    attractionId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteRatingCreateManyUserInput = {
    id?: number
    routeId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutRoutesNestedInput
    ratings?: RouteRatingUpdateManyWithoutRouteNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutRoutesNestedInput
    ratings?: RouteRatingUncheckedUpdateManyWithoutRouteNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attraction?: AttractionUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    attractionId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RouteRatingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyAttractionInput = {
    id?: number
    url: string
    type: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyAttractionInput = {
    id?: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHoursCreateManyAttractionInput = {
    id?: number
    dayOfWeek: string
    openTime?: string | null
    closeTime?: string | null
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionToTagCreateManyAttractionInput = {
    tagId: number
  }

  export type RouteToAttractionCreateManyAttractionInput = {
    routeId: number
  }

  export type MediaUpdateWithoutAttractionInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutAttractionInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutAttractionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AttractionToTag?: AttractionToTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUpdateWithoutAttractionInput = {
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUncheckedUpdateWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHoursUncheckedUpdateManyWithoutAttractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutAttractionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    ratings?: RouteRatingUpdateManyWithoutRouteNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: RouteRatingUncheckedUpdateManyWithoutRouteNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    isGenerated?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionToTagUpdateWithoutAttractionInput = {
    tag?: TagUpdateOneRequiredWithoutAttractionToTagNestedInput
  }

  export type AttractionToTagUncheckedUpdateWithoutAttractionInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type AttractionToTagUncheckedUpdateManyWithoutAttractionInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteToAttractionUpdateWithoutAttractionInput = {
    route?: RouteUpdateOneRequiredWithoutRouteToAttractionNestedInput
  }

  export type RouteToAttractionUncheckedUpdateWithoutAttractionInput = {
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteToAttractionUncheckedUpdateManyWithoutAttractionInput = {
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type AttractionCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    locationId: number
    averageRating?: number | null
    visitDuration?: number | null
    entryFee?: number | null
    website?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionToTagCreateManyTagInput = {
    attractionId: number
  }

  export type AttractionUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    routes?: RouteUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    routes?: RouteUncheckedUpdateManyWithoutAttractionsNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionToTagUpdateWithoutTagInput = {
    attraction?: AttractionUpdateOneRequiredWithoutAttractionToTagNestedInput
  }

  export type AttractionToTagUncheckedUpdateWithoutTagInput = {
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type AttractionToTagUncheckedUpdateManyWithoutTagInput = {
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteRatingCreateManyRouteInput = {
    id?: number
    userId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteToAttractionCreateManyRouteInput = {
    attractionId: number
  }

  export type AttractionUpdateWithoutRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutAttractionsNestedInput
    location?: LocationUpdateOneRequiredWithoutAttractionNestedInput
    media?: MediaUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUpdateManyWithoutAttractionNestedInput
    tags?: TagUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUpdateManyWithoutAttractionNestedInput
    AttractionToTag?: AttractionToTagUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutAttractionNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAttractionNestedInput
    tags?: TagUncheckedUpdateManyWithoutAttractionsNestedInput
    operatingHours?: OperatingHoursUncheckedUpdateManyWithoutAttractionNestedInput
    AttractionToTag?: AttractionToTagUncheckedUpdateManyWithoutAttractionNestedInput
    RouteToAttraction?: RouteToAttractionUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateManyWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    visitDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingUpdateWithoutRouteInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRouteRatingsNestedInput
  }

  export type RouteRatingUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteRatingUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteToAttractionUpdateWithoutRouteInput = {
    attraction?: AttractionUpdateOneRequiredWithoutRouteToAttractionNestedInput
  }

  export type RouteToAttractionUncheckedUpdateWithoutRouteInput = {
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteToAttractionUncheckedUpdateManyWithoutRouteInput = {
    attractionId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}