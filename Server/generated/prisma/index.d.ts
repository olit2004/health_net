
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model DoctorFacility
 * 
 */
export type DoctorFacility = $Result.DefaultSelection<Prisma.$DoctorFacilityPayload>
/**
 * Model Diagnosis
 * 
 */
export type Diagnosis = $Result.DefaultSelection<Prisma.$DiagnosisPayload>
/**
 * Model LabResult
 * 
 */
export type LabResult = $Result.DefaultSelection<Prisma.$LabResultPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model EmergencyInfo
 * 
 */
export type EmergencyInfo = $Result.DefaultSelection<Prisma.$EmergencyInfoPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT',
  LAB_TECH: 'LAB_TECH',
  FIRST_RESPONDER: 'FIRST_RESPONDER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const BloodType: {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodType = (typeof BloodType)[keyof typeof BloodType]


export const FacilityType: {
  HOSPITAL: 'HOSPITAL',
  CLINIC: 'CLINIC',
  LAB: 'LAB',
  PHARMACY: 'PHARMACY'
};

export type FacilityType = (typeof FacilityType)[keyof typeof FacilityType]


export const AdminLevel: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  AdMIN: 'AdMIN'
};

export type AdminLevel = (typeof AdminLevel)[keyof typeof AdminLevel]


export const InsuranceStatus: {
  INSURED: 'INSURED',
  UNINSURED: 'UNINSURED'
};

export type InsuranceStatus = (typeof InsuranceStatus)[keyof typeof InsuranceStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type BloodType = $Enums.BloodType

export const BloodType: typeof $Enums.BloodType

export type FacilityType = $Enums.FacilityType

export const FacilityType: typeof $Enums.FacilityType

export type AdminLevel = $Enums.AdminLevel

export const AdminLevel: typeof $Enums.AdminLevel

export type InsuranceStatus = $Enums.InsuranceStatus

export const InsuranceStatus: typeof $Enums.InsuranceStatus

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorFacility`: Exposes CRUD operations for the **DoctorFacility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorFacilities
    * const doctorFacilities = await prisma.doctorFacility.findMany()
    * ```
    */
  get doctorFacility(): Prisma.DoctorFacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosis`: Exposes CRUD operations for the **Diagnosis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnosis.findMany()
    * ```
    */
  get diagnosis(): Prisma.DiagnosisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labResult`: Exposes CRUD operations for the **LabResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabResults
    * const labResults = await prisma.labResult.findMany()
    * ```
    */
  get labResult(): Prisma.LabResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyInfo`: Exposes CRUD operations for the **EmergencyInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyInfos
    * const emergencyInfos = await prisma.emergencyInfo.findMany()
    * ```
    */
  get emergencyInfo(): Prisma.EmergencyInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Patient: 'Patient',
    Doctor: 'Doctor',
    Facility: 'Facility',
    DoctorFacility: 'DoctorFacility',
    Diagnosis: 'Diagnosis',
    LabResult: 'LabResult',
    Appointment: 'Appointment',
    EmergencyInfo: 'EmergencyInfo',
    Assignment: 'Assignment',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "patient" | "doctor" | "facility" | "doctorFacility" | "diagnosis" | "labResult" | "appointment" | "emergencyInfo" | "assignment" | "admin"
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
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      DoctorFacility: {
        payload: Prisma.$DoctorFacilityPayload<ExtArgs>
        fields: Prisma.DoctorFacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>
          }
          findFirst: {
            args: Prisma.DoctorFacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>
          }
          findMany: {
            args: Prisma.DoctorFacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>[]
          }
          create: {
            args: Prisma.DoctorFacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>
          }
          createMany: {
            args: Prisma.DoctorFacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorFacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>[]
          }
          delete: {
            args: Prisma.DoctorFacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>
          }
          update: {
            args: Prisma.DoctorFacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>
          }
          deleteMany: {
            args: Prisma.DoctorFacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorFacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorFacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>[]
          }
          upsert: {
            args: Prisma.DoctorFacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorFacilityPayload>
          }
          aggregate: {
            args: Prisma.DoctorFacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorFacility>
          }
          groupBy: {
            args: Prisma.DoctorFacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorFacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorFacilityCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorFacilityCountAggregateOutputType> | number
          }
        }
      }
      Diagnosis: {
        payload: Prisma.$DiagnosisPayload<ExtArgs>
        fields: Prisma.DiagnosisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          findFirst: {
            args: Prisma.DiagnosisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          findMany: {
            args: Prisma.DiagnosisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          create: {
            args: Prisma.DiagnosisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          createMany: {
            args: Prisma.DiagnosisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          delete: {
            args: Prisma.DiagnosisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          update: {
            args: Prisma.DiagnosisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          aggregate: {
            args: Prisma.DiagnosisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosis>
          }
          groupBy: {
            args: Prisma.DiagnosisGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosisCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisCountAggregateOutputType> | number
          }
        }
      }
      LabResult: {
        payload: Prisma.$LabResultPayload<ExtArgs>
        fields: Prisma.LabResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          findFirst: {
            args: Prisma.LabResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          findMany: {
            args: Prisma.LabResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>[]
          }
          create: {
            args: Prisma.LabResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          createMany: {
            args: Prisma.LabResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>[]
          }
          delete: {
            args: Prisma.LabResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          update: {
            args: Prisma.LabResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          deleteMany: {
            args: Prisma.LabResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>[]
          }
          upsert: {
            args: Prisma.LabResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultPayload>
          }
          aggregate: {
            args: Prisma.LabResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabResult>
          }
          groupBy: {
            args: Prisma.LabResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabResultCountArgs<ExtArgs>
            result: $Utils.Optional<LabResultCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      EmergencyInfo: {
        payload: Prisma.$EmergencyInfoPayload<ExtArgs>
        fields: Prisma.EmergencyInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>
          }
          findFirst: {
            args: Prisma.EmergencyInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>
          }
          findMany: {
            args: Prisma.EmergencyInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>[]
          }
          create: {
            args: Prisma.EmergencyInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>
          }
          createMany: {
            args: Prisma.EmergencyInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>[]
          }
          delete: {
            args: Prisma.EmergencyInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>
          }
          update: {
            args: Prisma.EmergencyInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyInfoPayload>
          }
          aggregate: {
            args: Prisma.EmergencyInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyInfo>
          }
          groupBy: {
            args: Prisma.EmergencyInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyInfoCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyInfoCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    patient?: PatientOmit
    doctor?: DoctorOmit
    facility?: FacilityOmit
    doctorFacility?: DoctorFacilityOmit
    diagnosis?: DiagnosisOmit
    labResult?: LabResultOmit
    appointment?: AppointmentOmit
    emergencyInfo?: EmergencyInfoOmit
    assignment?: AssignmentOmit
    admin?: AdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    labUploads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labUploads?: boolean | UserCountOutputTypeCountLabUploadsArgs
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
  export type UserCountOutputTypeCountLabUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    diagnoses: number
    labResults: number
    appointments: number
    assignments: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnoses?: boolean | PatientCountOutputTypeCountDiagnosesArgs
    labResults?: boolean | PatientCountOutputTypeCountLabResultsArgs
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    assignments?: boolean | PatientCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    doctorFacilities: number
    diagnoses: number
    appointments: number
    assignments: number
    labResults: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorFacilities?: boolean | DoctorCountOutputTypeCountDoctorFacilitiesArgs
    diagnoses?: boolean | DoctorCountOutputTypeCountDiagnosesArgs
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
    assignments?: boolean | DoctorCountOutputTypeCountAssignmentsArgs
    labResults?: boolean | DoctorCountOutputTypeCountLabResultsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorFacilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorFacilityWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
  }


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    doctorFacilities: number
    diagnoses: number
    labResults: number
    appointments: number
    admins: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorFacilities?: boolean | FacilityCountOutputTypeCountDoctorFacilitiesArgs
    diagnoses?: boolean | FacilityCountOutputTypeCountDiagnosesArgs
    labResults?: boolean | FacilityCountOutputTypeCountLabResultsArgs
    appointments?: boolean | FacilityCountOutputTypeCountAppointmentsArgs
    admins?: boolean | FacilityCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountDoctorFacilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorFacilityWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    passwordHash: number
    phone: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone: string | null
    role: $Enums.UserRole
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | User$patientArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    labUploads?: boolean | User$labUploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "passwordHash" | "phone" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | User$patientArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    labUploads?: boolean | User$labUploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
      labUploads: Prisma.$LabResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      passwordHash: string
      phone: string | null
      role: $Enums.UserRole
      status: string
      createdAt: Date
      updatedAt: Date
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
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    labUploads<T extends User$labUploadsArgs<ExtArgs> = {}>(args?: Subset<T, User$labUploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.labUploads
   */
  export type User$labUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    cursor?: LabResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
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
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    upi: string | null
    userId: number | null
    dob: Date | null
    gender: $Enums.Gender | null
    address: string | null
    qrToken: string | null
    insuranceStatus: $Enums.InsuranceStatus | null
    createdAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    upi: string | null
    userId: number | null
    dob: Date | null
    gender: $Enums.Gender | null
    address: string | null
    qrToken: string | null
    insuranceStatus: $Enums.InsuranceStatus | null
    createdAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    upi: number
    userId: number
    dob: number
    gender: number
    address: number
    qrToken: number
    insuranceStatus: number
    createdAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    upi?: true
    userId?: true
    dob?: true
    gender?: true
    address?: true
    qrToken?: true
    insuranceStatus?: true
    createdAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    upi?: true
    userId?: true
    dob?: true
    gender?: true
    address?: true
    qrToken?: true
    insuranceStatus?: true
    createdAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    upi?: true
    userId?: true
    dob?: true
    gender?: true
    address?: true
    qrToken?: true
    insuranceStatus?: true
    createdAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    upi: string | null
    userId: number
    dob: Date | null
    gender: $Enums.Gender | null
    address: string | null
    qrToken: string | null
    insuranceStatus: $Enums.InsuranceStatus
    createdAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upi?: boolean
    userId?: boolean
    dob?: boolean
    gender?: boolean
    address?: boolean
    qrToken?: boolean
    insuranceStatus?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    diagnoses?: boolean | Patient$diagnosesArgs<ExtArgs>
    labResults?: boolean | Patient$labResultsArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    emergencyInfo?: boolean | Patient$emergencyInfoArgs<ExtArgs>
    assignments?: boolean | Patient$assignmentsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upi?: boolean
    userId?: boolean
    dob?: boolean
    gender?: boolean
    address?: boolean
    qrToken?: boolean
    insuranceStatus?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upi?: boolean
    userId?: boolean
    dob?: boolean
    gender?: boolean
    address?: boolean
    qrToken?: boolean
    insuranceStatus?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    upi?: boolean
    userId?: boolean
    dob?: boolean
    gender?: boolean
    address?: boolean
    qrToken?: boolean
    insuranceStatus?: boolean
    createdAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "upi" | "userId" | "dob" | "gender" | "address" | "qrToken" | "insuranceStatus" | "createdAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    diagnoses?: boolean | Patient$diagnosesArgs<ExtArgs>
    labResults?: boolean | Patient$labResultsArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    emergencyInfo?: boolean | Patient$emergencyInfoArgs<ExtArgs>
    assignments?: boolean | Patient$assignmentsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[]
      labResults: Prisma.$LabResultPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      emergencyInfo: Prisma.$EmergencyInfoPayload<ExtArgs> | null
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      upi: string | null
      userId: number
      dob: Date | null
      gender: $Enums.Gender | null
      address: string | null
      qrToken: string | null
      insuranceStatus: $Enums.InsuranceStatus
      createdAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnoses<T extends Patient$diagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labResults<T extends Patient$labResultsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$labResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emergencyInfo<T extends Patient$emergencyInfoArgs<ExtArgs> = {}>(args?: Subset<T, Patient$emergencyInfoArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Patient$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly upi: FieldRef<"Patient", 'String'>
    readonly userId: FieldRef<"Patient", 'Int'>
    readonly dob: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'Gender'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly qrToken: FieldRef<"Patient", 'String'>
    readonly insuranceStatus: FieldRef<"Patient", 'InsuranceStatus'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.diagnoses
   */
  export type Patient$diagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    cursor?: DiagnosisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Patient.labResults
   */
  export type Patient$labResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    cursor?: LabResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.emergencyInfo
   */
  export type Patient$emergencyInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    where?: EmergencyInfoWhereInput
  }

  /**
   * Patient.assignments
   */
  export type Patient$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    userId: number | null
    specialization: string | null
    licenseNo: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    specialization: string | null
    licenseNo: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    licenseNo: number
    phone: number
    email: number
    createdAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    licenseNo?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    licenseNo?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    licenseNo?: true
    phone?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    userId: number
    specialization: string | null
    licenseNo: string | null
    phone: string | null
    email: string | null
    createdAt: Date
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNo?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorFacilities?: boolean | Doctor$doctorFacilitiesArgs<ExtArgs>
    diagnoses?: boolean | Doctor$diagnosesArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    assignments?: boolean | Doctor$assignmentsArgs<ExtArgs>
    labResults?: boolean | Doctor$labResultsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNo?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNo?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNo?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization" | "licenseNo" | "phone" | "email" | "createdAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorFacilities?: boolean | Doctor$doctorFacilitiesArgs<ExtArgs>
    diagnoses?: boolean | Doctor$diagnosesArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    assignments?: boolean | Doctor$assignmentsArgs<ExtArgs>
    labResults?: boolean | Doctor$labResultsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctorFacilities: Prisma.$DoctorFacilityPayload<ExtArgs>[]
      diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      labResults: Prisma.$LabResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      specialization: string | null
      licenseNo: string | null
      phone: string | null
      email: string | null
      createdAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorFacilities<T extends Doctor$doctorFacilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorFacilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnoses<T extends Doctor$diagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Doctor$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labResults<T extends Doctor$labResultsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$labResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly userId: FieldRef<"Doctor", 'Int'>
    readonly specialization: FieldRef<"Doctor", 'String'>
    readonly licenseNo: FieldRef<"Doctor", 'String'>
    readonly phone: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.doctorFacilities
   */
  export type Doctor$doctorFacilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    where?: DoctorFacilityWhereInput
    orderBy?: DoctorFacilityOrderByWithRelationInput | DoctorFacilityOrderByWithRelationInput[]
    cursor?: DoctorFacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorFacilityScalarFieldEnum | DoctorFacilityScalarFieldEnum[]
  }

  /**
   * Doctor.diagnoses
   */
  export type Doctor$diagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    cursor?: DiagnosisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor.assignments
   */
  export type Doctor$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Doctor.labResults
   */
  export type Doctor$labResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    cursor?: LabResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: number | null
    name: string | null
    facilityType: $Enums.FacilityType | null
    region: string | null
    locationAddress: string | null
    contactPhone: string | null
    licenseNumber: string | null
    createdAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    facilityType: $Enums.FacilityType | null
    region: string | null
    locationAddress: string | null
    contactPhone: string | null
    licenseNumber: string | null
    createdAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    facilityType: number
    region: number
    locationAddress: number
    contactPhone: number
    licenseNumber: number
    createdAt: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    facilityType?: true
    region?: true
    locationAddress?: true
    contactPhone?: true
    licenseNumber?: true
    createdAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    facilityType?: true
    region?: true
    locationAddress?: true
    contactPhone?: true
    licenseNumber?: true
    createdAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    facilityType?: true
    region?: true
    locationAddress?: true
    contactPhone?: true
    licenseNumber?: true
    createdAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: number
    name: string
    facilityType: $Enums.FacilityType
    region: string | null
    locationAddress: string | null
    contactPhone: string | null
    licenseNumber: string | null
    createdAt: Date
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facilityType?: boolean
    region?: boolean
    locationAddress?: boolean
    contactPhone?: boolean
    licenseNumber?: boolean
    createdAt?: boolean
    doctorFacilities?: boolean | Facility$doctorFacilitiesArgs<ExtArgs>
    diagnoses?: boolean | Facility$diagnosesArgs<ExtArgs>
    labResults?: boolean | Facility$labResultsArgs<ExtArgs>
    appointments?: boolean | Facility$appointmentsArgs<ExtArgs>
    admins?: boolean | Facility$adminsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facilityType?: boolean
    region?: boolean
    locationAddress?: boolean
    contactPhone?: boolean
    licenseNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facilityType?: boolean
    region?: boolean
    locationAddress?: boolean
    contactPhone?: boolean
    licenseNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    name?: boolean
    facilityType?: boolean
    region?: boolean
    locationAddress?: boolean
    contactPhone?: boolean
    licenseNumber?: boolean
    createdAt?: boolean
  }

  export type FacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "facilityType" | "region" | "locationAddress" | "contactPhone" | "licenseNumber" | "createdAt", ExtArgs["result"]["facility"]>
  export type FacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorFacilities?: boolean | Facility$doctorFacilitiesArgs<ExtArgs>
    diagnoses?: boolean | Facility$diagnosesArgs<ExtArgs>
    labResults?: boolean | Facility$labResultsArgs<ExtArgs>
    appointments?: boolean | Facility$appointmentsArgs<ExtArgs>
    admins?: boolean | Facility$adminsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      doctorFacilities: Prisma.$DoctorFacilityPayload<ExtArgs>[]
      diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[]
      labResults: Prisma.$LabResultPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      admins: Prisma.$AdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      facilityType: $Enums.FacilityType
      region: string | null
      locationAddress: string | null
      contactPhone: string | null
      licenseNumber: string | null
      createdAt: Date
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities and returns the data updated in the database.
     * @param {FacilityUpdateManyAndReturnArgs} args - Arguments to update many Facilities.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorFacilities<T extends Facility$doctorFacilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Facility$doctorFacilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnoses<T extends Facility$diagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Facility$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labResults<T extends Facility$labResultsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$labResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Facility$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends Facility$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Facility model
   */
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'Int'>
    readonly name: FieldRef<"Facility", 'String'>
    readonly facilityType: FieldRef<"Facility", 'FacilityType'>
    readonly region: FieldRef<"Facility", 'String'>
    readonly locationAddress: FieldRef<"Facility", 'String'>
    readonly contactPhone: FieldRef<"Facility", 'String'>
    readonly licenseNumber: FieldRef<"Facility", 'String'>
    readonly createdAt: FieldRef<"Facility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility updateManyAndReturn
   */
  export type FacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to delete.
     */
    limit?: number
  }

  /**
   * Facility.doctorFacilities
   */
  export type Facility$doctorFacilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    where?: DoctorFacilityWhereInput
    orderBy?: DoctorFacilityOrderByWithRelationInput | DoctorFacilityOrderByWithRelationInput[]
    cursor?: DoctorFacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorFacilityScalarFieldEnum | DoctorFacilityScalarFieldEnum[]
  }

  /**
   * Facility.diagnoses
   */
  export type Facility$diagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    cursor?: DiagnosisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Facility.labResults
   */
  export type Facility$labResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    cursor?: LabResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * Facility.appointments
   */
  export type Facility$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Facility.admins
   */
  export type Facility$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
  }


  /**
   * Model DoctorFacility
   */

  export type AggregateDoctorFacility = {
    _count: DoctorFacilityCountAggregateOutputType | null
    _avg: DoctorFacilityAvgAggregateOutputType | null
    _sum: DoctorFacilitySumAggregateOutputType | null
    _min: DoctorFacilityMinAggregateOutputType | null
    _max: DoctorFacilityMaxAggregateOutputType | null
  }

  export type DoctorFacilityAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    facilityId: number | null
  }

  export type DoctorFacilitySumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    facilityId: number | null
  }

  export type DoctorFacilityMinAggregateOutputType = {
    id: number | null
    doctorId: number | null
    facilityId: number | null
    status: string | null
    joinedAt: Date | null
  }

  export type DoctorFacilityMaxAggregateOutputType = {
    id: number | null
    doctorId: number | null
    facilityId: number | null
    status: string | null
    joinedAt: Date | null
  }

  export type DoctorFacilityCountAggregateOutputType = {
    id: number
    doctorId: number
    facilityId: number
    schedule: number
    status: number
    joinedAt: number
    _all: number
  }


  export type DoctorFacilityAvgAggregateInputType = {
    id?: true
    doctorId?: true
    facilityId?: true
  }

  export type DoctorFacilitySumAggregateInputType = {
    id?: true
    doctorId?: true
    facilityId?: true
  }

  export type DoctorFacilityMinAggregateInputType = {
    id?: true
    doctorId?: true
    facilityId?: true
    status?: true
    joinedAt?: true
  }

  export type DoctorFacilityMaxAggregateInputType = {
    id?: true
    doctorId?: true
    facilityId?: true
    status?: true
    joinedAt?: true
  }

  export type DoctorFacilityCountAggregateInputType = {
    id?: true
    doctorId?: true
    facilityId?: true
    schedule?: true
    status?: true
    joinedAt?: true
    _all?: true
  }

  export type DoctorFacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorFacility to aggregate.
     */
    where?: DoctorFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorFacilities to fetch.
     */
    orderBy?: DoctorFacilityOrderByWithRelationInput | DoctorFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorFacilities
    **/
    _count?: true | DoctorFacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorFacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorFacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorFacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorFacilityMaxAggregateInputType
  }

  export type GetDoctorFacilityAggregateType<T extends DoctorFacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorFacility[P]>
      : GetScalarType<T[P], AggregateDoctorFacility[P]>
  }




  export type DoctorFacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorFacilityWhereInput
    orderBy?: DoctorFacilityOrderByWithAggregationInput | DoctorFacilityOrderByWithAggregationInput[]
    by: DoctorFacilityScalarFieldEnum[] | DoctorFacilityScalarFieldEnum
    having?: DoctorFacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorFacilityCountAggregateInputType | true
    _avg?: DoctorFacilityAvgAggregateInputType
    _sum?: DoctorFacilitySumAggregateInputType
    _min?: DoctorFacilityMinAggregateInputType
    _max?: DoctorFacilityMaxAggregateInputType
  }

  export type DoctorFacilityGroupByOutputType = {
    id: number
    doctorId: number
    facilityId: number
    schedule: JsonValue | null
    status: string
    joinedAt: Date
    _count: DoctorFacilityCountAggregateOutputType | null
    _avg: DoctorFacilityAvgAggregateOutputType | null
    _sum: DoctorFacilitySumAggregateOutputType | null
    _min: DoctorFacilityMinAggregateOutputType | null
    _max: DoctorFacilityMaxAggregateOutputType | null
  }

  type GetDoctorFacilityGroupByPayload<T extends DoctorFacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorFacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorFacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorFacilityGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorFacilityGroupByOutputType[P]>
        }
      >
    >


  export type DoctorFacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    facilityId?: boolean
    schedule?: boolean
    status?: boolean
    joinedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorFacility"]>

  export type DoctorFacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    facilityId?: boolean
    schedule?: boolean
    status?: boolean
    joinedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorFacility"]>

  export type DoctorFacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    facilityId?: boolean
    schedule?: boolean
    status?: boolean
    joinedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorFacility"]>

  export type DoctorFacilitySelectScalar = {
    id?: boolean
    doctorId?: boolean
    facilityId?: boolean
    schedule?: boolean
    status?: boolean
    joinedAt?: boolean
  }

  export type DoctorFacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "facilityId" | "schedule" | "status" | "joinedAt", ExtArgs["result"]["doctorFacility"]>
  export type DoctorFacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type DoctorFacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type DoctorFacilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $DoctorFacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorFacility"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doctorId: number
      facilityId: number
      schedule: Prisma.JsonValue | null
      status: string
      joinedAt: Date
    }, ExtArgs["result"]["doctorFacility"]>
    composites: {}
  }

  type DoctorFacilityGetPayload<S extends boolean | null | undefined | DoctorFacilityDefaultArgs> = $Result.GetResult<Prisma.$DoctorFacilityPayload, S>

  type DoctorFacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorFacilityCountAggregateInputType | true
    }

  export interface DoctorFacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorFacility'], meta: { name: 'DoctorFacility' } }
    /**
     * Find zero or one DoctorFacility that matches the filter.
     * @param {DoctorFacilityFindUniqueArgs} args - Arguments to find a DoctorFacility
     * @example
     * // Get one DoctorFacility
     * const doctorFacility = await prisma.doctorFacility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFacilityFindUniqueArgs>(args: SelectSubset<T, DoctorFacilityFindUniqueArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorFacility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFacilityFindUniqueOrThrowArgs} args - Arguments to find a DoctorFacility
     * @example
     * // Get one DoctorFacility
     * const doctorFacility = await prisma.doctorFacility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorFacility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityFindFirstArgs} args - Arguments to find a DoctorFacility
     * @example
     * // Get one DoctorFacility
     * const doctorFacility = await prisma.doctorFacility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFacilityFindFirstArgs>(args?: SelectSubset<T, DoctorFacilityFindFirstArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorFacility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityFindFirstOrThrowArgs} args - Arguments to find a DoctorFacility
     * @example
     * // Get one DoctorFacility
     * const doctorFacility = await prisma.doctorFacility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorFacilities
     * const doctorFacilities = await prisma.doctorFacility.findMany()
     * 
     * // Get first 10 DoctorFacilities
     * const doctorFacilities = await prisma.doctorFacility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorFacilityWithIdOnly = await prisma.doctorFacility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFacilityFindManyArgs>(args?: SelectSubset<T, DoctorFacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorFacility.
     * @param {DoctorFacilityCreateArgs} args - Arguments to create a DoctorFacility.
     * @example
     * // Create one DoctorFacility
     * const DoctorFacility = await prisma.doctorFacility.create({
     *   data: {
     *     // ... data to create a DoctorFacility
     *   }
     * })
     * 
     */
    create<T extends DoctorFacilityCreateArgs>(args: SelectSubset<T, DoctorFacilityCreateArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorFacilities.
     * @param {DoctorFacilityCreateManyArgs} args - Arguments to create many DoctorFacilities.
     * @example
     * // Create many DoctorFacilities
     * const doctorFacility = await prisma.doctorFacility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorFacilityCreateManyArgs>(args?: SelectSubset<T, DoctorFacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorFacilities and returns the data saved in the database.
     * @param {DoctorFacilityCreateManyAndReturnArgs} args - Arguments to create many DoctorFacilities.
     * @example
     * // Create many DoctorFacilities
     * const doctorFacility = await prisma.doctorFacility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorFacilities and only return the `id`
     * const doctorFacilityWithIdOnly = await prisma.doctorFacility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorFacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorFacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorFacility.
     * @param {DoctorFacilityDeleteArgs} args - Arguments to delete one DoctorFacility.
     * @example
     * // Delete one DoctorFacility
     * const DoctorFacility = await prisma.doctorFacility.delete({
     *   where: {
     *     // ... filter to delete one DoctorFacility
     *   }
     * })
     * 
     */
    delete<T extends DoctorFacilityDeleteArgs>(args: SelectSubset<T, DoctorFacilityDeleteArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorFacility.
     * @param {DoctorFacilityUpdateArgs} args - Arguments to update one DoctorFacility.
     * @example
     * // Update one DoctorFacility
     * const doctorFacility = await prisma.doctorFacility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorFacilityUpdateArgs>(args: SelectSubset<T, DoctorFacilityUpdateArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorFacilities.
     * @param {DoctorFacilityDeleteManyArgs} args - Arguments to filter DoctorFacilities to delete.
     * @example
     * // Delete a few DoctorFacilities
     * const { count } = await prisma.doctorFacility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorFacilityDeleteManyArgs>(args?: SelectSubset<T, DoctorFacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorFacilities
     * const doctorFacility = await prisma.doctorFacility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorFacilityUpdateManyArgs>(args: SelectSubset<T, DoctorFacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorFacilities and returns the data updated in the database.
     * @param {DoctorFacilityUpdateManyAndReturnArgs} args - Arguments to update many DoctorFacilities.
     * @example
     * // Update many DoctorFacilities
     * const doctorFacility = await prisma.doctorFacility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorFacilities and only return the `id`
     * const doctorFacilityWithIdOnly = await prisma.doctorFacility.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorFacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorFacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorFacility.
     * @param {DoctorFacilityUpsertArgs} args - Arguments to update or create a DoctorFacility.
     * @example
     * // Update or create a DoctorFacility
     * const doctorFacility = await prisma.doctorFacility.upsert({
     *   create: {
     *     // ... data to create a DoctorFacility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorFacility we want to update
     *   }
     * })
     */
    upsert<T extends DoctorFacilityUpsertArgs>(args: SelectSubset<T, DoctorFacilityUpsertArgs<ExtArgs>>): Prisma__DoctorFacilityClient<$Result.GetResult<Prisma.$DoctorFacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityCountArgs} args - Arguments to filter DoctorFacilities to count.
     * @example
     * // Count the number of DoctorFacilities
     * const count = await prisma.doctorFacility.count({
     *   where: {
     *     // ... the filter for the DoctorFacilities we want to count
     *   }
     * })
    **/
    count<T extends DoctorFacilityCountArgs>(
      args?: Subset<T, DoctorFacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorFacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorFacilityAggregateArgs>(args: Subset<T, DoctorFacilityAggregateArgs>): Prisma.PrismaPromise<GetDoctorFacilityAggregateType<T>>

    /**
     * Group by DoctorFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFacilityGroupByArgs} args - Group by arguments.
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
      T extends DoctorFacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorFacilityGroupByArgs['orderBy'] }
        : { orderBy?: DoctorFacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorFacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorFacility model
   */
  readonly fields: DoctorFacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorFacility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorFacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorFacility model
   */
  interface DoctorFacilityFieldRefs {
    readonly id: FieldRef<"DoctorFacility", 'Int'>
    readonly doctorId: FieldRef<"DoctorFacility", 'Int'>
    readonly facilityId: FieldRef<"DoctorFacility", 'Int'>
    readonly schedule: FieldRef<"DoctorFacility", 'Json'>
    readonly status: FieldRef<"DoctorFacility", 'String'>
    readonly joinedAt: FieldRef<"DoctorFacility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorFacility findUnique
   */
  export type DoctorFacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorFacility to fetch.
     */
    where: DoctorFacilityWhereUniqueInput
  }

  /**
   * DoctorFacility findUniqueOrThrow
   */
  export type DoctorFacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorFacility to fetch.
     */
    where: DoctorFacilityWhereUniqueInput
  }

  /**
   * DoctorFacility findFirst
   */
  export type DoctorFacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorFacility to fetch.
     */
    where?: DoctorFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorFacilities to fetch.
     */
    orderBy?: DoctorFacilityOrderByWithRelationInput | DoctorFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorFacilities.
     */
    cursor?: DoctorFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorFacilities.
     */
    distinct?: DoctorFacilityScalarFieldEnum | DoctorFacilityScalarFieldEnum[]
  }

  /**
   * DoctorFacility findFirstOrThrow
   */
  export type DoctorFacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorFacility to fetch.
     */
    where?: DoctorFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorFacilities to fetch.
     */
    orderBy?: DoctorFacilityOrderByWithRelationInput | DoctorFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorFacilities.
     */
    cursor?: DoctorFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorFacilities.
     */
    distinct?: DoctorFacilityScalarFieldEnum | DoctorFacilityScalarFieldEnum[]
  }

  /**
   * DoctorFacility findMany
   */
  export type DoctorFacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorFacilities to fetch.
     */
    where?: DoctorFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorFacilities to fetch.
     */
    orderBy?: DoctorFacilityOrderByWithRelationInput | DoctorFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorFacilities.
     */
    cursor?: DoctorFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorFacilities.
     */
    skip?: number
    distinct?: DoctorFacilityScalarFieldEnum | DoctorFacilityScalarFieldEnum[]
  }

  /**
   * DoctorFacility create
   */
  export type DoctorFacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorFacility.
     */
    data: XOR<DoctorFacilityCreateInput, DoctorFacilityUncheckedCreateInput>
  }

  /**
   * DoctorFacility createMany
   */
  export type DoctorFacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorFacilities.
     */
    data: DoctorFacilityCreateManyInput | DoctorFacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorFacility createManyAndReturn
   */
  export type DoctorFacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorFacilities.
     */
    data: DoctorFacilityCreateManyInput | DoctorFacilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorFacility update
   */
  export type DoctorFacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorFacility.
     */
    data: XOR<DoctorFacilityUpdateInput, DoctorFacilityUncheckedUpdateInput>
    /**
     * Choose, which DoctorFacility to update.
     */
    where: DoctorFacilityWhereUniqueInput
  }

  /**
   * DoctorFacility updateMany
   */
  export type DoctorFacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorFacilities.
     */
    data: XOR<DoctorFacilityUpdateManyMutationInput, DoctorFacilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorFacilities to update
     */
    where?: DoctorFacilityWhereInput
    /**
     * Limit how many DoctorFacilities to update.
     */
    limit?: number
  }

  /**
   * DoctorFacility updateManyAndReturn
   */
  export type DoctorFacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * The data used to update DoctorFacilities.
     */
    data: XOR<DoctorFacilityUpdateManyMutationInput, DoctorFacilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorFacilities to update
     */
    where?: DoctorFacilityWhereInput
    /**
     * Limit how many DoctorFacilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorFacility upsert
   */
  export type DoctorFacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorFacility to update in case it exists.
     */
    where: DoctorFacilityWhereUniqueInput
    /**
     * In case the DoctorFacility found by the `where` argument doesn't exist, create a new DoctorFacility with this data.
     */
    create: XOR<DoctorFacilityCreateInput, DoctorFacilityUncheckedCreateInput>
    /**
     * In case the DoctorFacility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorFacilityUpdateInput, DoctorFacilityUncheckedUpdateInput>
  }

  /**
   * DoctorFacility delete
   */
  export type DoctorFacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
    /**
     * Filter which DoctorFacility to delete.
     */
    where: DoctorFacilityWhereUniqueInput
  }

  /**
   * DoctorFacility deleteMany
   */
  export type DoctorFacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorFacilities to delete
     */
    where?: DoctorFacilityWhereInput
    /**
     * Limit how many DoctorFacilities to delete.
     */
    limit?: number
  }

  /**
   * DoctorFacility without action
   */
  export type DoctorFacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorFacility
     */
    select?: DoctorFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorFacility
     */
    omit?: DoctorFacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorFacilityInclude<ExtArgs> | null
  }


  /**
   * Model Diagnosis
   */

  export type AggregateDiagnosis = {
    _count: DiagnosisCountAggregateOutputType | null
    _avg: DiagnosisAvgAggregateOutputType | null
    _sum: DiagnosisSumAggregateOutputType | null
    _min: DiagnosisMinAggregateOutputType | null
    _max: DiagnosisMaxAggregateOutputType | null
  }

  export type DiagnosisAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
  }

  export type DiagnosisSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
  }

  export type DiagnosisMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
    diagnosisText: string | null
    treatmentPlan: string | null
    createdAt: Date | null
  }

  export type DiagnosisMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
    diagnosisText: string | null
    treatmentPlan: string | null
    createdAt: Date | null
  }

  export type DiagnosisCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    facilityId: number
    diagnosisText: number
    treatmentPlan: number
    createdAt: number
    _all: number
  }


  export type DiagnosisAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
  }

  export type DiagnosisSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
  }

  export type DiagnosisMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    diagnosisText?: true
    treatmentPlan?: true
    createdAt?: true
  }

  export type DiagnosisMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    diagnosisText?: true
    treatmentPlan?: true
    createdAt?: true
  }

  export type DiagnosisCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    diagnosisText?: true
    treatmentPlan?: true
    createdAt?: true
    _all?: true
  }

  export type DiagnosisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosis to aggregate.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnosisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosisMaxAggregateInputType
  }

  export type GetDiagnosisAggregateType<T extends DiagnosisAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosis[P]>
      : GetScalarType<T[P], AggregateDiagnosis[P]>
  }




  export type DiagnosisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithAggregationInput | DiagnosisOrderByWithAggregationInput[]
    by: DiagnosisScalarFieldEnum[] | DiagnosisScalarFieldEnum
    having?: DiagnosisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosisCountAggregateInputType | true
    _avg?: DiagnosisAvgAggregateInputType
    _sum?: DiagnosisSumAggregateInputType
    _min?: DiagnosisMinAggregateInputType
    _max?: DiagnosisMaxAggregateInputType
  }

  export type DiagnosisGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan: string | null
    createdAt: Date
    _count: DiagnosisCountAggregateOutputType | null
    _avg: DiagnosisAvgAggregateOutputType | null
    _sum: DiagnosisSumAggregateOutputType | null
    _min: DiagnosisMinAggregateOutputType | null
    _max: DiagnosisMaxAggregateOutputType | null
  }

  type GetDiagnosisGroupByPayload<T extends DiagnosisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosisGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosisGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    diagnosisText?: boolean
    treatmentPlan?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>

  export type DiagnosisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    diagnosisText?: boolean
    treatmentPlan?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>

  export type DiagnosisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    diagnosisText?: boolean
    treatmentPlan?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>

  export type DiagnosisSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    diagnosisText?: boolean
    treatmentPlan?: boolean
    createdAt?: boolean
  }

  export type DiagnosisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "facilityId" | "diagnosisText" | "treatmentPlan" | "createdAt", ExtArgs["result"]["diagnosis"]>
  export type DiagnosisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type DiagnosisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type DiagnosisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $DiagnosisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnosis"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number
      facilityId: number
      diagnosisText: string
      treatmentPlan: string | null
      createdAt: Date
    }, ExtArgs["result"]["diagnosis"]>
    composites: {}
  }

  type DiagnosisGetPayload<S extends boolean | null | undefined | DiagnosisDefaultArgs> = $Result.GetResult<Prisma.$DiagnosisPayload, S>

  type DiagnosisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosisCountAggregateInputType | true
    }

  export interface DiagnosisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnosis'], meta: { name: 'Diagnosis' } }
    /**
     * Find zero or one Diagnosis that matches the filter.
     * @param {DiagnosisFindUniqueArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosisFindUniqueArgs>(args: SelectSubset<T, DiagnosisFindUniqueArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnosis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosisFindUniqueOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosisFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosisFindFirstArgs>(args?: SelectSubset<T, DiagnosisFindFirstArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosisFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosisFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosisFindManyArgs>(args?: SelectSubset<T, DiagnosisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnosis.
     * @param {DiagnosisCreateArgs} args - Arguments to create a Diagnosis.
     * @example
     * // Create one Diagnosis
     * const Diagnosis = await prisma.diagnosis.create({
     *   data: {
     *     // ... data to create a Diagnosis
     *   }
     * })
     * 
     */
    create<T extends DiagnosisCreateArgs>(args: SelectSubset<T, DiagnosisCreateArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {DiagnosisCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosisCreateManyArgs>(args?: SelectSubset<T, DiagnosisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnoses and returns the data saved in the database.
     * @param {DiagnosisCreateManyAndReturnArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnoses and only return the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosisCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnosis.
     * @param {DiagnosisDeleteArgs} args - Arguments to delete one Diagnosis.
     * @example
     * // Delete one Diagnosis
     * const Diagnosis = await prisma.diagnosis.delete({
     *   where: {
     *     // ... filter to delete one Diagnosis
     *   }
     * })
     * 
     */
    delete<T extends DiagnosisDeleteArgs>(args: SelectSubset<T, DiagnosisDeleteArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnosis.
     * @param {DiagnosisUpdateArgs} args - Arguments to update one Diagnosis.
     * @example
     * // Update one Diagnosis
     * const diagnosis = await prisma.diagnosis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosisUpdateArgs>(args: SelectSubset<T, DiagnosisUpdateArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnosisDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnosis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosisDeleteManyArgs>(args?: SelectSubset<T, DiagnosisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosisUpdateManyArgs>(args: SelectSubset<T, DiagnosisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses and returns the data updated in the database.
     * @param {DiagnosisUpdateManyAndReturnArgs} args - Arguments to update many Diagnoses.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnoses and only return the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiagnosisUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnosis.
     * @param {DiagnosisUpsertArgs} args - Arguments to update or create a Diagnosis.
     * @example
     * // Update or create a Diagnosis
     * const diagnosis = await prisma.diagnosis.upsert({
     *   create: {
     *     // ... data to create a Diagnosis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosis we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosisUpsertArgs>(args: SelectSubset<T, DiagnosisUpsertArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnosis.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnosisCountArgs>(
      args?: Subset<T, DiagnosisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosisAggregateArgs>(args: Subset<T, DiagnosisAggregateArgs>): Prisma.PrismaPromise<GetDiagnosisAggregateType<T>>

    /**
     * Group by Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisGroupByArgs} args - Group by arguments.
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
      T extends DiagnosisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosisGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnosis model
   */
  readonly fields: DiagnosisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnosis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diagnosis model
   */
  interface DiagnosisFieldRefs {
    readonly id: FieldRef<"Diagnosis", 'Int'>
    readonly patientId: FieldRef<"Diagnosis", 'Int'>
    readonly doctorId: FieldRef<"Diagnosis", 'Int'>
    readonly facilityId: FieldRef<"Diagnosis", 'Int'>
    readonly diagnosisText: FieldRef<"Diagnosis", 'String'>
    readonly treatmentPlan: FieldRef<"Diagnosis", 'String'>
    readonly createdAt: FieldRef<"Diagnosis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diagnosis findUnique
   */
  export type DiagnosisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis findUniqueOrThrow
   */
  export type DiagnosisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis findFirst
   */
  export type DiagnosisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis findFirstOrThrow
   */
  export type DiagnosisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis findMany
   */
  export type DiagnosisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis create
   */
  export type DiagnosisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnosis.
     */
    data: XOR<DiagnosisCreateInput, DiagnosisUncheckedCreateInput>
  }

  /**
   * Diagnosis createMany
   */
  export type DiagnosisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosisCreateManyInput | DiagnosisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnosis createManyAndReturn
   */
  export type DiagnosisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosisCreateManyInput | DiagnosisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnosis update
   */
  export type DiagnosisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnosis.
     */
    data: XOR<DiagnosisUpdateInput, DiagnosisUncheckedUpdateInput>
    /**
     * Choose, which Diagnosis to update.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis updateMany
   */
  export type DiagnosisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
  }

  /**
   * Diagnosis updateManyAndReturn
   */
  export type DiagnosisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnosis upsert
   */
  export type DiagnosisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnosis to update in case it exists.
     */
    where: DiagnosisWhereUniqueInput
    /**
     * In case the Diagnosis found by the `where` argument doesn't exist, create a new Diagnosis with this data.
     */
    create: XOR<DiagnosisCreateInput, DiagnosisUncheckedCreateInput>
    /**
     * In case the Diagnosis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosisUpdateInput, DiagnosisUncheckedUpdateInput>
  }

  /**
   * Diagnosis delete
   */
  export type DiagnosisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter which Diagnosis to delete.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis deleteMany
   */
  export type DiagnosisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number
  }

  /**
   * Diagnosis without action
   */
  export type DiagnosisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
  }


  /**
   * Model LabResult
   */

  export type AggregateLabResult = {
    _count: LabResultCountAggregateOutputType | null
    _avg: LabResultAvgAggregateOutputType | null
    _sum: LabResultSumAggregateOutputType | null
    _min: LabResultMinAggregateOutputType | null
    _max: LabResultMaxAggregateOutputType | null
  }

  export type LabResultAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
    createdById: number | null
  }

  export type LabResultSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
    createdById: number | null
  }

  export type LabResultMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
    createdById: number | null
    filePath: string | null
    resultType: string | null
    createdAt: Date | null
  }

  export type LabResultMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    doctorId: number | null
    facilityId: number | null
    createdById: number | null
    filePath: string | null
    resultType: string | null
    createdAt: Date | null
  }

  export type LabResultCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    facilityId: number
    createdById: number
    filePath: number
    resultType: number
    createdAt: number
    _all: number
  }


  export type LabResultAvgAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    createdById?: true
  }

  export type LabResultSumAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    createdById?: true
  }

  export type LabResultMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    createdById?: true
    filePath?: true
    resultType?: true
    createdAt?: true
  }

  export type LabResultMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    createdById?: true
    filePath?: true
    resultType?: true
    createdAt?: true
  }

  export type LabResultCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    facilityId?: true
    createdById?: true
    filePath?: true
    resultType?: true
    createdAt?: true
    _all?: true
  }

  export type LabResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabResult to aggregate.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabResults
    **/
    _count?: true | LabResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabResultMaxAggregateInputType
  }

  export type GetLabResultAggregateType<T extends LabResultAggregateArgs> = {
        [P in keyof T & keyof AggregateLabResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabResult[P]>
      : GetScalarType<T[P], AggregateLabResult[P]>
  }




  export type LabResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultWhereInput
    orderBy?: LabResultOrderByWithAggregationInput | LabResultOrderByWithAggregationInput[]
    by: LabResultScalarFieldEnum[] | LabResultScalarFieldEnum
    having?: LabResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabResultCountAggregateInputType | true
    _avg?: LabResultAvgAggregateInputType
    _sum?: LabResultSumAggregateInputType
    _min?: LabResultMinAggregateInputType
    _max?: LabResultMaxAggregateInputType
  }

  export type LabResultGroupByOutputType = {
    id: number
    patientId: number
    doctorId: number | null
    facilityId: number
    createdById: number
    filePath: string
    resultType: string | null
    createdAt: Date
    _count: LabResultCountAggregateOutputType | null
    _avg: LabResultAvgAggregateOutputType | null
    _sum: LabResultSumAggregateOutputType | null
    _min: LabResultMinAggregateOutputType | null
    _max: LabResultMaxAggregateOutputType | null
  }

  type GetLabResultGroupByPayload<T extends LabResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabResultGroupByOutputType[P]>
            : GetScalarType<T[P], LabResultGroupByOutputType[P]>
        }
      >
    >


  export type LabResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    createdById?: boolean
    filePath?: boolean
    resultType?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | LabResult$doctorArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResult"]>

  export type LabResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    createdById?: boolean
    filePath?: boolean
    resultType?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | LabResult$doctorArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResult"]>

  export type LabResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    createdById?: boolean
    filePath?: boolean
    resultType?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | LabResult$doctorArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResult"]>

  export type LabResultSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    facilityId?: boolean
    createdById?: boolean
    filePath?: boolean
    resultType?: boolean
    createdAt?: boolean
  }

  export type LabResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "facilityId" | "createdById" | "filePath" | "resultType" | "createdAt", ExtArgs["result"]["labResult"]>
  export type LabResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | LabResult$doctorArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LabResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | LabResult$doctorArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LabResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | LabResult$doctorArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LabResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabResult"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      facility: Prisma.$FacilityPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      doctorId: number | null
      facilityId: number
      createdById: number
      filePath: string
      resultType: string | null
      createdAt: Date
    }, ExtArgs["result"]["labResult"]>
    composites: {}
  }

  type LabResultGetPayload<S extends boolean | null | undefined | LabResultDefaultArgs> = $Result.GetResult<Prisma.$LabResultPayload, S>

  type LabResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabResultCountAggregateInputType | true
    }

  export interface LabResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabResult'], meta: { name: 'LabResult' } }
    /**
     * Find zero or one LabResult that matches the filter.
     * @param {LabResultFindUniqueArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabResultFindUniqueArgs>(args: SelectSubset<T, LabResultFindUniqueArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabResultFindUniqueOrThrowArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabResultFindUniqueOrThrowArgs>(args: SelectSubset<T, LabResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultFindFirstArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabResultFindFirstArgs>(args?: SelectSubset<T, LabResultFindFirstArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultFindFirstOrThrowArgs} args - Arguments to find a LabResult
     * @example
     * // Get one LabResult
     * const labResult = await prisma.labResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabResultFindFirstOrThrowArgs>(args?: SelectSubset<T, LabResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabResults
     * const labResults = await prisma.labResult.findMany()
     * 
     * // Get first 10 LabResults
     * const labResults = await prisma.labResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labResultWithIdOnly = await prisma.labResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabResultFindManyArgs>(args?: SelectSubset<T, LabResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabResult.
     * @param {LabResultCreateArgs} args - Arguments to create a LabResult.
     * @example
     * // Create one LabResult
     * const LabResult = await prisma.labResult.create({
     *   data: {
     *     // ... data to create a LabResult
     *   }
     * })
     * 
     */
    create<T extends LabResultCreateArgs>(args: SelectSubset<T, LabResultCreateArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabResults.
     * @param {LabResultCreateManyArgs} args - Arguments to create many LabResults.
     * @example
     * // Create many LabResults
     * const labResult = await prisma.labResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabResultCreateManyArgs>(args?: SelectSubset<T, LabResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabResults and returns the data saved in the database.
     * @param {LabResultCreateManyAndReturnArgs} args - Arguments to create many LabResults.
     * @example
     * // Create many LabResults
     * const labResult = await prisma.labResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabResults and only return the `id`
     * const labResultWithIdOnly = await prisma.labResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabResultCreateManyAndReturnArgs>(args?: SelectSubset<T, LabResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabResult.
     * @param {LabResultDeleteArgs} args - Arguments to delete one LabResult.
     * @example
     * // Delete one LabResult
     * const LabResult = await prisma.labResult.delete({
     *   where: {
     *     // ... filter to delete one LabResult
     *   }
     * })
     * 
     */
    delete<T extends LabResultDeleteArgs>(args: SelectSubset<T, LabResultDeleteArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabResult.
     * @param {LabResultUpdateArgs} args - Arguments to update one LabResult.
     * @example
     * // Update one LabResult
     * const labResult = await prisma.labResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabResultUpdateArgs>(args: SelectSubset<T, LabResultUpdateArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabResults.
     * @param {LabResultDeleteManyArgs} args - Arguments to filter LabResults to delete.
     * @example
     * // Delete a few LabResults
     * const { count } = await prisma.labResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabResultDeleteManyArgs>(args?: SelectSubset<T, LabResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabResults
     * const labResult = await prisma.labResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabResultUpdateManyArgs>(args: SelectSubset<T, LabResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabResults and returns the data updated in the database.
     * @param {LabResultUpdateManyAndReturnArgs} args - Arguments to update many LabResults.
     * @example
     * // Update many LabResults
     * const labResult = await prisma.labResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabResults and only return the `id`
     * const labResultWithIdOnly = await prisma.labResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabResultUpdateManyAndReturnArgs>(args: SelectSubset<T, LabResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabResult.
     * @param {LabResultUpsertArgs} args - Arguments to update or create a LabResult.
     * @example
     * // Update or create a LabResult
     * const labResult = await prisma.labResult.upsert({
     *   create: {
     *     // ... data to create a LabResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabResult we want to update
     *   }
     * })
     */
    upsert<T extends LabResultUpsertArgs>(args: SelectSubset<T, LabResultUpsertArgs<ExtArgs>>): Prisma__LabResultClient<$Result.GetResult<Prisma.$LabResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultCountArgs} args - Arguments to filter LabResults to count.
     * @example
     * // Count the number of LabResults
     * const count = await prisma.labResult.count({
     *   where: {
     *     // ... the filter for the LabResults we want to count
     *   }
     * })
    **/
    count<T extends LabResultCountArgs>(
      args?: Subset<T, LabResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabResultAggregateArgs>(args: Subset<T, LabResultAggregateArgs>): Prisma.PrismaPromise<GetLabResultAggregateType<T>>

    /**
     * Group by LabResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultGroupByArgs} args - Group by arguments.
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
      T extends LabResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabResultGroupByArgs['orderBy'] }
        : { orderBy?: LabResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabResult model
   */
  readonly fields: LabResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends LabResult$doctorArgs<ExtArgs> = {}>(args?: Subset<T, LabResult$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabResult model
   */
  interface LabResultFieldRefs {
    readonly id: FieldRef<"LabResult", 'Int'>
    readonly patientId: FieldRef<"LabResult", 'Int'>
    readonly doctorId: FieldRef<"LabResult", 'Int'>
    readonly facilityId: FieldRef<"LabResult", 'Int'>
    readonly createdById: FieldRef<"LabResult", 'Int'>
    readonly filePath: FieldRef<"LabResult", 'String'>
    readonly resultType: FieldRef<"LabResult", 'String'>
    readonly createdAt: FieldRef<"LabResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabResult findUnique
   */
  export type LabResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult findUniqueOrThrow
   */
  export type LabResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult findFirst
   */
  export type LabResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabResults.
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabResults.
     */
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * LabResult findFirstOrThrow
   */
  export type LabResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResult to fetch.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabResults.
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabResults.
     */
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * LabResult findMany
   */
  export type LabResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where?: LabResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultOrderByWithRelationInput | LabResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabResults.
     */
    cursor?: LabResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    distinct?: LabResultScalarFieldEnum | LabResultScalarFieldEnum[]
  }

  /**
   * LabResult create
   */
  export type LabResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * The data needed to create a LabResult.
     */
    data: XOR<LabResultCreateInput, LabResultUncheckedCreateInput>
  }

  /**
   * LabResult createMany
   */
  export type LabResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabResults.
     */
    data: LabResultCreateManyInput | LabResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabResult createManyAndReturn
   */
  export type LabResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * The data used to create many LabResults.
     */
    data: LabResultCreateManyInput | LabResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabResult update
   */
  export type LabResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * The data needed to update a LabResult.
     */
    data: XOR<LabResultUpdateInput, LabResultUncheckedUpdateInput>
    /**
     * Choose, which LabResult to update.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult updateMany
   */
  export type LabResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabResults.
     */
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyInput>
    /**
     * Filter which LabResults to update
     */
    where?: LabResultWhereInput
    /**
     * Limit how many LabResults to update.
     */
    limit?: number
  }

  /**
   * LabResult updateManyAndReturn
   */
  export type LabResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * The data used to update LabResults.
     */
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyInput>
    /**
     * Filter which LabResults to update
     */
    where?: LabResultWhereInput
    /**
     * Limit how many LabResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabResult upsert
   */
  export type LabResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * The filter to search for the LabResult to update in case it exists.
     */
    where: LabResultWhereUniqueInput
    /**
     * In case the LabResult found by the `where` argument doesn't exist, create a new LabResult with this data.
     */
    create: XOR<LabResultCreateInput, LabResultUncheckedCreateInput>
    /**
     * In case the LabResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabResultUpdateInput, LabResultUncheckedUpdateInput>
  }

  /**
   * LabResult delete
   */
  export type LabResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
    /**
     * Filter which LabResult to delete.
     */
    where: LabResultWhereUniqueInput
  }

  /**
   * LabResult deleteMany
   */
  export type LabResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabResults to delete
     */
    where?: LabResultWhereInput
    /**
     * Limit how many LabResults to delete.
     */
    limit?: number
  }

  /**
   * LabResult.doctor
   */
  export type LabResult$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * LabResult without action
   */
  export type LabResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResult
     */
    select?: LabResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResult
     */
    omit?: LabResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    facilityId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    facilityId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    facilityId: number | null
    dateTime: Date | null
    reason: string | null
    status: $Enums.AppointmentStatus | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    facilityId: number | null
    dateTime: Date | null
    reason: string | null
    status: $Enums.AppointmentStatus | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    facilityId: number
    dateTime: number
    reason: number
    status: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    facilityId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    facilityId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    facilityId?: true
    dateTime?: true
    reason?: true
    status?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    facilityId?: true
    dateTime?: true
    reason?: true
    status?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    facilityId?: true
    dateTime?: true
    reason?: true
    status?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    doctorId: number
    patientId: number
    facilityId: number
    dateTime: Date
    reason: string | null
    status: $Enums.AppointmentStatus
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    facilityId?: boolean
    dateTime?: boolean
    reason?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    facilityId?: boolean
    dateTime?: boolean
    reason?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    facilityId?: boolean
    dateTime?: boolean
    reason?: boolean
    status?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    facilityId?: boolean
    dateTime?: boolean
    reason?: boolean
    status?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "facilityId" | "dateTime" | "reason" | "status", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doctorId: number
      patientId: number
      facilityId: number
      dateTime: Date
      reason: string | null
      status: $Enums.AppointmentStatus
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
    readonly facilityId: FieldRef<"Appointment", 'Int'>
    readonly dateTime: FieldRef<"Appointment", 'DateTime'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyInfo
   */

  export type AggregateEmergencyInfo = {
    _count: EmergencyInfoCountAggregateOutputType | null
    _avg: EmergencyInfoAvgAggregateOutputType | null
    _sum: EmergencyInfoSumAggregateOutputType | null
    _min: EmergencyInfoMinAggregateOutputType | null
    _max: EmergencyInfoMaxAggregateOutputType | null
  }

  export type EmergencyInfoAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type EmergencyInfoSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type EmergencyInfoMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    bloodType: $Enums.BloodType | null
    allergies: string | null
    chronicDiseases: string | null
    emergencyContact: string | null
    lastUpdatedAt: Date | null
    createdAt: Date | null
  }

  export type EmergencyInfoMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    bloodType: $Enums.BloodType | null
    allergies: string | null
    chronicDiseases: string | null
    emergencyContact: string | null
    lastUpdatedAt: Date | null
    createdAt: Date | null
  }

  export type EmergencyInfoCountAggregateOutputType = {
    id: number
    patientId: number
    bloodType: number
    allergies: number
    chronicDiseases: number
    emergencyContact: number
    lastUpdatedAt: number
    createdAt: number
    _all: number
  }


  export type EmergencyInfoAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type EmergencyInfoSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type EmergencyInfoMinAggregateInputType = {
    id?: true
    patientId?: true
    bloodType?: true
    allergies?: true
    chronicDiseases?: true
    emergencyContact?: true
    lastUpdatedAt?: true
    createdAt?: true
  }

  export type EmergencyInfoMaxAggregateInputType = {
    id?: true
    patientId?: true
    bloodType?: true
    allergies?: true
    chronicDiseases?: true
    emergencyContact?: true
    lastUpdatedAt?: true
    createdAt?: true
  }

  export type EmergencyInfoCountAggregateInputType = {
    id?: true
    patientId?: true
    bloodType?: true
    allergies?: true
    chronicDiseases?: true
    emergencyContact?: true
    lastUpdatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmergencyInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyInfo to aggregate.
     */
    where?: EmergencyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyInfos to fetch.
     */
    orderBy?: EmergencyInfoOrderByWithRelationInput | EmergencyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyInfos
    **/
    _count?: true | EmergencyInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyInfoMaxAggregateInputType
  }

  export type GetEmergencyInfoAggregateType<T extends EmergencyInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyInfo[P]>
      : GetScalarType<T[P], AggregateEmergencyInfo[P]>
  }




  export type EmergencyInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyInfoWhereInput
    orderBy?: EmergencyInfoOrderByWithAggregationInput | EmergencyInfoOrderByWithAggregationInput[]
    by: EmergencyInfoScalarFieldEnum[] | EmergencyInfoScalarFieldEnum
    having?: EmergencyInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyInfoCountAggregateInputType | true
    _avg?: EmergencyInfoAvgAggregateInputType
    _sum?: EmergencyInfoSumAggregateInputType
    _min?: EmergencyInfoMinAggregateInputType
    _max?: EmergencyInfoMaxAggregateInputType
  }

  export type EmergencyInfoGroupByOutputType = {
    id: number
    patientId: number
    bloodType: $Enums.BloodType | null
    allergies: string | null
    chronicDiseases: string | null
    emergencyContact: string | null
    lastUpdatedAt: Date
    createdAt: Date
    _count: EmergencyInfoCountAggregateOutputType | null
    _avg: EmergencyInfoAvgAggregateOutputType | null
    _sum: EmergencyInfoSumAggregateOutputType | null
    _min: EmergencyInfoMinAggregateOutputType | null
    _max: EmergencyInfoMaxAggregateOutputType | null
  }

  type GetEmergencyInfoGroupByPayload<T extends EmergencyInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyInfoGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyInfoGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bloodType?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    emergencyContact?: boolean
    lastUpdatedAt?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyInfo"]>

  export type EmergencyInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bloodType?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    emergencyContact?: boolean
    lastUpdatedAt?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyInfo"]>

  export type EmergencyInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bloodType?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    emergencyContact?: boolean
    lastUpdatedAt?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyInfo"]>

  export type EmergencyInfoSelectScalar = {
    id?: boolean
    patientId?: boolean
    bloodType?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    emergencyContact?: boolean
    lastUpdatedAt?: boolean
    createdAt?: boolean
  }

  export type EmergencyInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "bloodType" | "allergies" | "chronicDiseases" | "emergencyContact" | "lastUpdatedAt" | "createdAt", ExtArgs["result"]["emergencyInfo"]>
  export type EmergencyInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type EmergencyInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type EmergencyInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $EmergencyInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyInfo"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      bloodType: $Enums.BloodType | null
      allergies: string | null
      chronicDiseases: string | null
      emergencyContact: string | null
      lastUpdatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["emergencyInfo"]>
    composites: {}
  }

  type EmergencyInfoGetPayload<S extends boolean | null | undefined | EmergencyInfoDefaultArgs> = $Result.GetResult<Prisma.$EmergencyInfoPayload, S>

  type EmergencyInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyInfoCountAggregateInputType | true
    }

  export interface EmergencyInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyInfo'], meta: { name: 'EmergencyInfo' } }
    /**
     * Find zero or one EmergencyInfo that matches the filter.
     * @param {EmergencyInfoFindUniqueArgs} args - Arguments to find a EmergencyInfo
     * @example
     * // Get one EmergencyInfo
     * const emergencyInfo = await prisma.emergencyInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyInfoFindUniqueArgs>(args: SelectSubset<T, EmergencyInfoFindUniqueArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyInfoFindUniqueOrThrowArgs} args - Arguments to find a EmergencyInfo
     * @example
     * // Get one EmergencyInfo
     * const emergencyInfo = await prisma.emergencyInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoFindFirstArgs} args - Arguments to find a EmergencyInfo
     * @example
     * // Get one EmergencyInfo
     * const emergencyInfo = await prisma.emergencyInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyInfoFindFirstArgs>(args?: SelectSubset<T, EmergencyInfoFindFirstArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoFindFirstOrThrowArgs} args - Arguments to find a EmergencyInfo
     * @example
     * // Get one EmergencyInfo
     * const emergencyInfo = await prisma.emergencyInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyInfos
     * const emergencyInfos = await prisma.emergencyInfo.findMany()
     * 
     * // Get first 10 EmergencyInfos
     * const emergencyInfos = await prisma.emergencyInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyInfoWithIdOnly = await prisma.emergencyInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyInfoFindManyArgs>(args?: SelectSubset<T, EmergencyInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyInfo.
     * @param {EmergencyInfoCreateArgs} args - Arguments to create a EmergencyInfo.
     * @example
     * // Create one EmergencyInfo
     * const EmergencyInfo = await prisma.emergencyInfo.create({
     *   data: {
     *     // ... data to create a EmergencyInfo
     *   }
     * })
     * 
     */
    create<T extends EmergencyInfoCreateArgs>(args: SelectSubset<T, EmergencyInfoCreateArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyInfos.
     * @param {EmergencyInfoCreateManyArgs} args - Arguments to create many EmergencyInfos.
     * @example
     * // Create many EmergencyInfos
     * const emergencyInfo = await prisma.emergencyInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyInfoCreateManyArgs>(args?: SelectSubset<T, EmergencyInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyInfos and returns the data saved in the database.
     * @param {EmergencyInfoCreateManyAndReturnArgs} args - Arguments to create many EmergencyInfos.
     * @example
     * // Create many EmergencyInfos
     * const emergencyInfo = await prisma.emergencyInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyInfos and only return the `id`
     * const emergencyInfoWithIdOnly = await prisma.emergencyInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyInfo.
     * @param {EmergencyInfoDeleteArgs} args - Arguments to delete one EmergencyInfo.
     * @example
     * // Delete one EmergencyInfo
     * const EmergencyInfo = await prisma.emergencyInfo.delete({
     *   where: {
     *     // ... filter to delete one EmergencyInfo
     *   }
     * })
     * 
     */
    delete<T extends EmergencyInfoDeleteArgs>(args: SelectSubset<T, EmergencyInfoDeleteArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyInfo.
     * @param {EmergencyInfoUpdateArgs} args - Arguments to update one EmergencyInfo.
     * @example
     * // Update one EmergencyInfo
     * const emergencyInfo = await prisma.emergencyInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyInfoUpdateArgs>(args: SelectSubset<T, EmergencyInfoUpdateArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyInfos.
     * @param {EmergencyInfoDeleteManyArgs} args - Arguments to filter EmergencyInfos to delete.
     * @example
     * // Delete a few EmergencyInfos
     * const { count } = await prisma.emergencyInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyInfoDeleteManyArgs>(args?: SelectSubset<T, EmergencyInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyInfos
     * const emergencyInfo = await prisma.emergencyInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyInfoUpdateManyArgs>(args: SelectSubset<T, EmergencyInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyInfos and returns the data updated in the database.
     * @param {EmergencyInfoUpdateManyAndReturnArgs} args - Arguments to update many EmergencyInfos.
     * @example
     * // Update many EmergencyInfos
     * const emergencyInfo = await prisma.emergencyInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyInfos and only return the `id`
     * const emergencyInfoWithIdOnly = await prisma.emergencyInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmergencyInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyInfo.
     * @param {EmergencyInfoUpsertArgs} args - Arguments to update or create a EmergencyInfo.
     * @example
     * // Update or create a EmergencyInfo
     * const emergencyInfo = await prisma.emergencyInfo.upsert({
     *   create: {
     *     // ... data to create a EmergencyInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyInfo we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyInfoUpsertArgs>(args: SelectSubset<T, EmergencyInfoUpsertArgs<ExtArgs>>): Prisma__EmergencyInfoClient<$Result.GetResult<Prisma.$EmergencyInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoCountArgs} args - Arguments to filter EmergencyInfos to count.
     * @example
     * // Count the number of EmergencyInfos
     * const count = await prisma.emergencyInfo.count({
     *   where: {
     *     // ... the filter for the EmergencyInfos we want to count
     *   }
     * })
    **/
    count<T extends EmergencyInfoCountArgs>(
      args?: Subset<T, EmergencyInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyInfoAggregateArgs>(args: Subset<T, EmergencyInfoAggregateArgs>): Prisma.PrismaPromise<GetEmergencyInfoAggregateType<T>>

    /**
     * Group by EmergencyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyInfoGroupByArgs} args - Group by arguments.
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
      T extends EmergencyInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyInfoGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyInfo model
   */
  readonly fields: EmergencyInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmergencyInfo model
   */
  interface EmergencyInfoFieldRefs {
    readonly id: FieldRef<"EmergencyInfo", 'Int'>
    readonly patientId: FieldRef<"EmergencyInfo", 'Int'>
    readonly bloodType: FieldRef<"EmergencyInfo", 'BloodType'>
    readonly allergies: FieldRef<"EmergencyInfo", 'String'>
    readonly chronicDiseases: FieldRef<"EmergencyInfo", 'String'>
    readonly emergencyContact: FieldRef<"EmergencyInfo", 'String'>
    readonly lastUpdatedAt: FieldRef<"EmergencyInfo", 'DateTime'>
    readonly createdAt: FieldRef<"EmergencyInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyInfo findUnique
   */
  export type EmergencyInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyInfo to fetch.
     */
    where: EmergencyInfoWhereUniqueInput
  }

  /**
   * EmergencyInfo findUniqueOrThrow
   */
  export type EmergencyInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyInfo to fetch.
     */
    where: EmergencyInfoWhereUniqueInput
  }

  /**
   * EmergencyInfo findFirst
   */
  export type EmergencyInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyInfo to fetch.
     */
    where?: EmergencyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyInfos to fetch.
     */
    orderBy?: EmergencyInfoOrderByWithRelationInput | EmergencyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyInfos.
     */
    cursor?: EmergencyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyInfos.
     */
    distinct?: EmergencyInfoScalarFieldEnum | EmergencyInfoScalarFieldEnum[]
  }

  /**
   * EmergencyInfo findFirstOrThrow
   */
  export type EmergencyInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyInfo to fetch.
     */
    where?: EmergencyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyInfos to fetch.
     */
    orderBy?: EmergencyInfoOrderByWithRelationInput | EmergencyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyInfos.
     */
    cursor?: EmergencyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyInfos.
     */
    distinct?: EmergencyInfoScalarFieldEnum | EmergencyInfoScalarFieldEnum[]
  }

  /**
   * EmergencyInfo findMany
   */
  export type EmergencyInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyInfos to fetch.
     */
    where?: EmergencyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyInfos to fetch.
     */
    orderBy?: EmergencyInfoOrderByWithRelationInput | EmergencyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyInfos.
     */
    cursor?: EmergencyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyInfos.
     */
    skip?: number
    distinct?: EmergencyInfoScalarFieldEnum | EmergencyInfoScalarFieldEnum[]
  }

  /**
   * EmergencyInfo create
   */
  export type EmergencyInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyInfo.
     */
    data: XOR<EmergencyInfoCreateInput, EmergencyInfoUncheckedCreateInput>
  }

  /**
   * EmergencyInfo createMany
   */
  export type EmergencyInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyInfos.
     */
    data: EmergencyInfoCreateManyInput | EmergencyInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyInfo createManyAndReturn
   */
  export type EmergencyInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyInfos.
     */
    data: EmergencyInfoCreateManyInput | EmergencyInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyInfo update
   */
  export type EmergencyInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyInfo.
     */
    data: XOR<EmergencyInfoUpdateInput, EmergencyInfoUncheckedUpdateInput>
    /**
     * Choose, which EmergencyInfo to update.
     */
    where: EmergencyInfoWhereUniqueInput
  }

  /**
   * EmergencyInfo updateMany
   */
  export type EmergencyInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyInfos.
     */
    data: XOR<EmergencyInfoUpdateManyMutationInput, EmergencyInfoUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyInfos to update
     */
    where?: EmergencyInfoWhereInput
    /**
     * Limit how many EmergencyInfos to update.
     */
    limit?: number
  }

  /**
   * EmergencyInfo updateManyAndReturn
   */
  export type EmergencyInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyInfos.
     */
    data: XOR<EmergencyInfoUpdateManyMutationInput, EmergencyInfoUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyInfos to update
     */
    where?: EmergencyInfoWhereInput
    /**
     * Limit how many EmergencyInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyInfo upsert
   */
  export type EmergencyInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyInfo to update in case it exists.
     */
    where: EmergencyInfoWhereUniqueInput
    /**
     * In case the EmergencyInfo found by the `where` argument doesn't exist, create a new EmergencyInfo with this data.
     */
    create: XOR<EmergencyInfoCreateInput, EmergencyInfoUncheckedCreateInput>
    /**
     * In case the EmergencyInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyInfoUpdateInput, EmergencyInfoUncheckedUpdateInput>
  }

  /**
   * EmergencyInfo delete
   */
  export type EmergencyInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
    /**
     * Filter which EmergencyInfo to delete.
     */
    where: EmergencyInfoWhereUniqueInput
  }

  /**
   * EmergencyInfo deleteMany
   */
  export type EmergencyInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyInfos to delete
     */
    where?: EmergencyInfoWhereInput
    /**
     * Limit how many EmergencyInfos to delete.
     */
    limit?: number
  }

  /**
   * EmergencyInfo without action
   */
  export type EmergencyInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyInfo
     */
    select?: EmergencyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyInfo
     */
    omit?: EmergencyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyInfoInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    assignedDate: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    assignedDate: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    assignedDate: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type AssignmentSumAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    assignedDate?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    assignedDate?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    assignedDate?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: number
    doctorId: number
    patientId: number
    assignedDate: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    assignedDate?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    assignedDate?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    assignedDate?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    assignedDate?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "assignedDate", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doctorId: number
      patientId: number
      assignedDate: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'Int'>
    readonly doctorId: FieldRef<"Assignment", 'Int'>
    readonly patientId: FieldRef<"Assignment", 'Int'>
    readonly assignedDate: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    facilityId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    userId: number | null
    facilityId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    userId: number | null
    facilityId: number | null
    adminLevel: $Enums.AdminLevel | null
    department: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    facilityId: number | null
    adminLevel: $Enums.AdminLevel | null
    department: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    facilityId: number
    adminLevel: number
    department: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    userId?: true
    facilityId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    userId?: true
    facilityId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
    facilityId?: true
    adminLevel?: true
    department?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
    facilityId?: true
    adminLevel?: true
    department?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    facilityId?: true
    adminLevel?: true
    department?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    userId: number
    facilityId: number
    adminLevel: $Enums.AdminLevel | null
    department: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    facilityId?: boolean
    adminLevel?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    facilityId?: boolean
    adminLevel?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    facilityId?: boolean
    adminLevel?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
    facilityId?: boolean
    adminLevel?: boolean
    department?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "facilityId" | "adminLevel" | "department", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      facilityId: number
      adminLevel: $Enums.AdminLevel | null
      department: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly userId: FieldRef<"Admin", 'Int'>
    readonly facilityId: FieldRef<"Admin", 'Int'>
    readonly adminLevel: FieldRef<"Admin", 'AdminLevel'>
    readonly department: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    upi: 'upi',
    userId: 'userId',
    dob: 'dob',
    gender: 'gender',
    address: 'address',
    qrToken: 'qrToken',
    insuranceStatus: 'insuranceStatus',
    createdAt: 'createdAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization',
    licenseNo: 'licenseNo',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    facilityType: 'facilityType',
    region: 'region',
    locationAddress: 'locationAddress',
    contactPhone: 'contactPhone',
    licenseNumber: 'licenseNumber',
    createdAt: 'createdAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const DoctorFacilityScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    facilityId: 'facilityId',
    schedule: 'schedule',
    status: 'status',
    joinedAt: 'joinedAt'
  };

  export type DoctorFacilityScalarFieldEnum = (typeof DoctorFacilityScalarFieldEnum)[keyof typeof DoctorFacilityScalarFieldEnum]


  export const DiagnosisScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    facilityId: 'facilityId',
    diagnosisText: 'diagnosisText',
    treatmentPlan: 'treatmentPlan',
    createdAt: 'createdAt'
  };

  export type DiagnosisScalarFieldEnum = (typeof DiagnosisScalarFieldEnum)[keyof typeof DiagnosisScalarFieldEnum]


  export const LabResultScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    facilityId: 'facilityId',
    createdById: 'createdById',
    filePath: 'filePath',
    resultType: 'resultType',
    createdAt: 'createdAt'
  };

  export type LabResultScalarFieldEnum = (typeof LabResultScalarFieldEnum)[keyof typeof LabResultScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    facilityId: 'facilityId',
    dateTime: 'dateTime',
    reason: 'reason',
    status: 'status'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const EmergencyInfoScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    bloodType: 'bloodType',
    allergies: 'allergies',
    chronicDiseases: 'chronicDiseases',
    emergencyContact: 'emergencyContact',
    lastUpdatedAt: 'lastUpdatedAt',
    createdAt: 'createdAt'
  };

  export type EmergencyInfoScalarFieldEnum = (typeof EmergencyInfoScalarFieldEnum)[keyof typeof EmergencyInfoScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    assignedDate: 'assignedDate'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    facilityId: 'facilityId',
    adminLevel: 'adminLevel',
    department: 'department'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'InsuranceStatus'
   */
  export type EnumInsuranceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsuranceStatus'>
    


  /**
   * Reference to a field of type 'InsuranceStatus[]'
   */
  export type ListEnumInsuranceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsuranceStatus[]'>
    


  /**
   * Reference to a field of type 'FacilityType'
   */
  export type EnumFacilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityType'>
    


  /**
   * Reference to a field of type 'FacilityType[]'
   */
  export type ListEnumFacilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'BloodType'
   */
  export type EnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType'>
    


  /**
   * Reference to a field of type 'BloodType[]'
   */
  export type ListEnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType[]'>
    


  /**
   * Reference to a field of type 'AdminLevel'
   */
  export type EnumAdminLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminLevel'>
    


  /**
   * Reference to a field of type 'AdminLevel[]'
   */
  export type ListEnumAdminLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    labUploads?: LabResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    labUploads?: LabResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    labUploads?: LabResultListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    upi?: StringNullableFilter<"Patient"> | string | null
    userId?: IntFilter<"Patient"> | number
    dob?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableFilter<"Patient"> | string | null
    qrToken?: StringNullableFilter<"Patient"> | string | null
    insuranceStatus?: EnumInsuranceStatusFilter<"Patient"> | $Enums.InsuranceStatus
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    diagnoses?: DiagnosisListRelationFilter
    labResults?: LabResultListRelationFilter
    appointments?: AppointmentListRelationFilter
    emergencyInfo?: XOR<EmergencyInfoNullableScalarRelationFilter, EmergencyInfoWhereInput> | null
    assignments?: AssignmentListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    upi?: SortOrderInput | SortOrder
    userId?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    qrToken?: SortOrderInput | SortOrder
    insuranceStatus?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    diagnoses?: DiagnosisOrderByRelationAggregateInput
    labResults?: LabResultOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    emergencyInfo?: EmergencyInfoOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    upi?: string
    userId?: number
    qrToken?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    dob?: DateTimeNullableFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableFilter<"Patient"> | string | null
    insuranceStatus?: EnumInsuranceStatusFilter<"Patient"> | $Enums.InsuranceStatus
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    diagnoses?: DiagnosisListRelationFilter
    labResults?: LabResultListRelationFilter
    appointments?: AppointmentListRelationFilter
    emergencyInfo?: XOR<EmergencyInfoNullableScalarRelationFilter, EmergencyInfoWhereInput> | null
    assignments?: AssignmentListRelationFilter
  }, "id" | "upi" | "userId" | "qrToken">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    upi?: SortOrderInput | SortOrder
    userId?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    qrToken?: SortOrderInput | SortOrder
    insuranceStatus?: SortOrder
    createdAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    upi?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    userId?: IntWithAggregatesFilter<"Patient"> | number
    dob?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Patient"> | $Enums.Gender | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    qrToken?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    insuranceStatus?: EnumInsuranceStatusWithAggregatesFilter<"Patient"> | $Enums.InsuranceStatus
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    userId?: IntFilter<"Doctor"> | number
    specialization?: StringNullableFilter<"Doctor"> | string | null
    licenseNo?: StringNullableFilter<"Doctor"> | string | null
    phone?: StringNullableFilter<"Doctor"> | string | null
    email?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorFacilities?: DoctorFacilityListRelationFilter
    diagnoses?: DiagnosisListRelationFilter
    appointments?: AppointmentListRelationFilter
    assignments?: AssignmentListRelationFilter
    labResults?: LabResultListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    licenseNo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    doctorFacilities?: DoctorFacilityOrderByRelationAggregateInput
    diagnoses?: DiagnosisOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    labResults?: LabResultOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialization?: StringNullableFilter<"Doctor"> | string | null
    licenseNo?: StringNullableFilter<"Doctor"> | string | null
    phone?: StringNullableFilter<"Doctor"> | string | null
    email?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorFacilities?: DoctorFacilityListRelationFilter
    diagnoses?: DiagnosisListRelationFilter
    appointments?: AppointmentListRelationFilter
    assignments?: AssignmentListRelationFilter
    labResults?: LabResultListRelationFilter
  }, "id" | "userId">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    licenseNo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    userId?: IntWithAggregatesFilter<"Doctor"> | number
    specialization?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    licenseNo?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: IntFilter<"Facility"> | number
    name?: StringFilter<"Facility"> | string
    facilityType?: EnumFacilityTypeFilter<"Facility"> | $Enums.FacilityType
    region?: StringNullableFilter<"Facility"> | string | null
    locationAddress?: StringNullableFilter<"Facility"> | string | null
    contactPhone?: StringNullableFilter<"Facility"> | string | null
    licenseNumber?: StringNullableFilter<"Facility"> | string | null
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    doctorFacilities?: DoctorFacilityListRelationFilter
    diagnoses?: DiagnosisListRelationFilter
    labResults?: LabResultListRelationFilter
    appointments?: AppointmentListRelationFilter
    admins?: AdminListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    facilityType?: SortOrder
    region?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    doctorFacilities?: DoctorFacilityOrderByRelationAggregateInput
    diagnoses?: DiagnosisOrderByRelationAggregateInput
    labResults?: LabResultOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    admins?: AdminOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    name?: StringFilter<"Facility"> | string
    facilityType?: EnumFacilityTypeFilter<"Facility"> | $Enums.FacilityType
    region?: StringNullableFilter<"Facility"> | string | null
    locationAddress?: StringNullableFilter<"Facility"> | string | null
    contactPhone?: StringNullableFilter<"Facility"> | string | null
    licenseNumber?: StringNullableFilter<"Facility"> | string | null
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    doctorFacilities?: DoctorFacilityListRelationFilter
    diagnoses?: DiagnosisListRelationFilter
    labResults?: LabResultListRelationFilter
    appointments?: AppointmentListRelationFilter
    admins?: AdminListRelationFilter
  }, "id">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    facilityType?: SortOrder
    region?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facility"> | number
    name?: StringWithAggregatesFilter<"Facility"> | string
    facilityType?: EnumFacilityTypeWithAggregatesFilter<"Facility"> | $Enums.FacilityType
    region?: StringNullableWithAggregatesFilter<"Facility"> | string | null
    locationAddress?: StringNullableWithAggregatesFilter<"Facility"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Facility"> | string | null
    licenseNumber?: StringNullableWithAggregatesFilter<"Facility"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Facility"> | Date | string
  }

  export type DoctorFacilityWhereInput = {
    AND?: DoctorFacilityWhereInput | DoctorFacilityWhereInput[]
    OR?: DoctorFacilityWhereInput[]
    NOT?: DoctorFacilityWhereInput | DoctorFacilityWhereInput[]
    id?: IntFilter<"DoctorFacility"> | number
    doctorId?: IntFilter<"DoctorFacility"> | number
    facilityId?: IntFilter<"DoctorFacility"> | number
    schedule?: JsonNullableFilter<"DoctorFacility">
    status?: StringFilter<"DoctorFacility"> | string
    joinedAt?: DateTimeFilter<"DoctorFacility"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type DoctorFacilityOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    schedule?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
  }

  export type DoctorFacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    doctorId_facilityId?: DoctorFacilityDoctorIdFacilityIdCompoundUniqueInput
    AND?: DoctorFacilityWhereInput | DoctorFacilityWhereInput[]
    OR?: DoctorFacilityWhereInput[]
    NOT?: DoctorFacilityWhereInput | DoctorFacilityWhereInput[]
    doctorId?: IntFilter<"DoctorFacility"> | number
    facilityId?: IntFilter<"DoctorFacility"> | number
    schedule?: JsonNullableFilter<"DoctorFacility">
    status?: StringFilter<"DoctorFacility"> | string
    joinedAt?: DateTimeFilter<"DoctorFacility"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id" | "doctorId_facilityId">

  export type DoctorFacilityOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    schedule?: SortOrderInput | SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    _count?: DoctorFacilityCountOrderByAggregateInput
    _avg?: DoctorFacilityAvgOrderByAggregateInput
    _max?: DoctorFacilityMaxOrderByAggregateInput
    _min?: DoctorFacilityMinOrderByAggregateInput
    _sum?: DoctorFacilitySumOrderByAggregateInput
  }

  export type DoctorFacilityScalarWhereWithAggregatesInput = {
    AND?: DoctorFacilityScalarWhereWithAggregatesInput | DoctorFacilityScalarWhereWithAggregatesInput[]
    OR?: DoctorFacilityScalarWhereWithAggregatesInput[]
    NOT?: DoctorFacilityScalarWhereWithAggregatesInput | DoctorFacilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DoctorFacility"> | number
    doctorId?: IntWithAggregatesFilter<"DoctorFacility"> | number
    facilityId?: IntWithAggregatesFilter<"DoctorFacility"> | number
    schedule?: JsonNullableWithAggregatesFilter<"DoctorFacility">
    status?: StringWithAggregatesFilter<"DoctorFacility"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"DoctorFacility"> | Date | string
  }

  export type DiagnosisWhereInput = {
    AND?: DiagnosisWhereInput | DiagnosisWhereInput[]
    OR?: DiagnosisWhereInput[]
    NOT?: DiagnosisWhereInput | DiagnosisWhereInput[]
    id?: IntFilter<"Diagnosis"> | number
    patientId?: IntFilter<"Diagnosis"> | number
    doctorId?: IntFilter<"Diagnosis"> | number
    facilityId?: IntFilter<"Diagnosis"> | number
    diagnosisText?: StringFilter<"Diagnosis"> | string
    treatmentPlan?: StringNullableFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeFilter<"Diagnosis"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type DiagnosisOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    diagnosisText?: SortOrder
    treatmentPlan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
  }

  export type DiagnosisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiagnosisWhereInput | DiagnosisWhereInput[]
    OR?: DiagnosisWhereInput[]
    NOT?: DiagnosisWhereInput | DiagnosisWhereInput[]
    patientId?: IntFilter<"Diagnosis"> | number
    doctorId?: IntFilter<"Diagnosis"> | number
    facilityId?: IntFilter<"Diagnosis"> | number
    diagnosisText?: StringFilter<"Diagnosis"> | string
    treatmentPlan?: StringNullableFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeFilter<"Diagnosis"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type DiagnosisOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    diagnosisText?: SortOrder
    treatmentPlan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DiagnosisCountOrderByAggregateInput
    _avg?: DiagnosisAvgOrderByAggregateInput
    _max?: DiagnosisMaxOrderByAggregateInput
    _min?: DiagnosisMinOrderByAggregateInput
    _sum?: DiagnosisSumOrderByAggregateInput
  }

  export type DiagnosisScalarWhereWithAggregatesInput = {
    AND?: DiagnosisScalarWhereWithAggregatesInput | DiagnosisScalarWhereWithAggregatesInput[]
    OR?: DiagnosisScalarWhereWithAggregatesInput[]
    NOT?: DiagnosisScalarWhereWithAggregatesInput | DiagnosisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diagnosis"> | number
    patientId?: IntWithAggregatesFilter<"Diagnosis"> | number
    doctorId?: IntWithAggregatesFilter<"Diagnosis"> | number
    facilityId?: IntWithAggregatesFilter<"Diagnosis"> | number
    diagnosisText?: StringWithAggregatesFilter<"Diagnosis"> | string
    treatmentPlan?: StringNullableWithAggregatesFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Diagnosis"> | Date | string
  }

  export type LabResultWhereInput = {
    AND?: LabResultWhereInput | LabResultWhereInput[]
    OR?: LabResultWhereInput[]
    NOT?: LabResultWhereInput | LabResultWhereInput[]
    id?: IntFilter<"LabResult"> | number
    patientId?: IntFilter<"LabResult"> | number
    doctorId?: IntNullableFilter<"LabResult"> | number | null
    facilityId?: IntFilter<"LabResult"> | number
    createdById?: IntFilter<"LabResult"> | number
    filePath?: StringFilter<"LabResult"> | string
    resultType?: StringNullableFilter<"LabResult"> | string | null
    createdAt?: DateTimeFilter<"LabResult"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LabResultOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
    filePath?: SortOrder
    resultType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type LabResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LabResultWhereInput | LabResultWhereInput[]
    OR?: LabResultWhereInput[]
    NOT?: LabResultWhereInput | LabResultWhereInput[]
    patientId?: IntFilter<"LabResult"> | number
    doctorId?: IntNullableFilter<"LabResult"> | number | null
    facilityId?: IntFilter<"LabResult"> | number
    createdById?: IntFilter<"LabResult"> | number
    filePath?: StringFilter<"LabResult"> | string
    resultType?: StringNullableFilter<"LabResult"> | string | null
    createdAt?: DateTimeFilter<"LabResult"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LabResultOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
    filePath?: SortOrder
    resultType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LabResultCountOrderByAggregateInput
    _avg?: LabResultAvgOrderByAggregateInput
    _max?: LabResultMaxOrderByAggregateInput
    _min?: LabResultMinOrderByAggregateInput
    _sum?: LabResultSumOrderByAggregateInput
  }

  export type LabResultScalarWhereWithAggregatesInput = {
    AND?: LabResultScalarWhereWithAggregatesInput | LabResultScalarWhereWithAggregatesInput[]
    OR?: LabResultScalarWhereWithAggregatesInput[]
    NOT?: LabResultScalarWhereWithAggregatesInput | LabResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LabResult"> | number
    patientId?: IntWithAggregatesFilter<"LabResult"> | number
    doctorId?: IntNullableWithAggregatesFilter<"LabResult"> | number | null
    facilityId?: IntWithAggregatesFilter<"LabResult"> | number
    createdById?: IntWithAggregatesFilter<"LabResult"> | number
    filePath?: StringWithAggregatesFilter<"LabResult"> | string
    resultType?: StringNullableWithAggregatesFilter<"LabResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LabResult"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    facilityId?: IntFilter<"Appointment"> | number
    dateTime?: DateTimeFilter<"Appointment"> | Date | string
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
    dateTime?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    facilityId?: IntFilter<"Appointment"> | number
    dateTime?: DateTimeFilter<"Appointment"> | Date | string
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
    dateTime?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
    facilityId?: IntWithAggregatesFilter<"Appointment"> | number
    dateTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
  }

  export type EmergencyInfoWhereInput = {
    AND?: EmergencyInfoWhereInput | EmergencyInfoWhereInput[]
    OR?: EmergencyInfoWhereInput[]
    NOT?: EmergencyInfoWhereInput | EmergencyInfoWhereInput[]
    id?: IntFilter<"EmergencyInfo"> | number
    patientId?: IntFilter<"EmergencyInfo"> | number
    bloodType?: EnumBloodTypeNullableFilter<"EmergencyInfo"> | $Enums.BloodType | null
    allergies?: StringNullableFilter<"EmergencyInfo"> | string | null
    chronicDiseases?: StringNullableFilter<"EmergencyInfo"> | string | null
    emergencyContact?: StringNullableFilter<"EmergencyInfo"> | string | null
    lastUpdatedAt?: DateTimeFilter<"EmergencyInfo"> | Date | string
    createdAt?: DateTimeFilter<"EmergencyInfo"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type EmergencyInfoOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodType?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    chronicDiseases?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    lastUpdatedAt?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type EmergencyInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: number
    AND?: EmergencyInfoWhereInput | EmergencyInfoWhereInput[]
    OR?: EmergencyInfoWhereInput[]
    NOT?: EmergencyInfoWhereInput | EmergencyInfoWhereInput[]
    bloodType?: EnumBloodTypeNullableFilter<"EmergencyInfo"> | $Enums.BloodType | null
    allergies?: StringNullableFilter<"EmergencyInfo"> | string | null
    chronicDiseases?: StringNullableFilter<"EmergencyInfo"> | string | null
    emergencyContact?: StringNullableFilter<"EmergencyInfo"> | string | null
    lastUpdatedAt?: DateTimeFilter<"EmergencyInfo"> | Date | string
    createdAt?: DateTimeFilter<"EmergencyInfo"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type EmergencyInfoOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodType?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    chronicDiseases?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    lastUpdatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: EmergencyInfoCountOrderByAggregateInput
    _avg?: EmergencyInfoAvgOrderByAggregateInput
    _max?: EmergencyInfoMaxOrderByAggregateInput
    _min?: EmergencyInfoMinOrderByAggregateInput
    _sum?: EmergencyInfoSumOrderByAggregateInput
  }

  export type EmergencyInfoScalarWhereWithAggregatesInput = {
    AND?: EmergencyInfoScalarWhereWithAggregatesInput | EmergencyInfoScalarWhereWithAggregatesInput[]
    OR?: EmergencyInfoScalarWhereWithAggregatesInput[]
    NOT?: EmergencyInfoScalarWhereWithAggregatesInput | EmergencyInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmergencyInfo"> | number
    patientId?: IntWithAggregatesFilter<"EmergencyInfo"> | number
    bloodType?: EnumBloodTypeNullableWithAggregatesFilter<"EmergencyInfo"> | $Enums.BloodType | null
    allergies?: StringNullableWithAggregatesFilter<"EmergencyInfo"> | string | null
    chronicDiseases?: StringNullableWithAggregatesFilter<"EmergencyInfo"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"EmergencyInfo"> | string | null
    lastUpdatedAt?: DateTimeWithAggregatesFilter<"EmergencyInfo"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyInfo"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: IntFilter<"Assignment"> | number
    doctorId?: IntFilter<"Assignment"> | number
    patientId?: IntFilter<"Assignment"> | number
    assignedDate?: DateTimeFilter<"Assignment"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    assignedDate?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    doctorId_patientId?: AssignmentDoctorIdPatientIdCompoundUniqueInput
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    doctorId?: IntFilter<"Assignment"> | number
    patientId?: IntFilter<"Assignment"> | number
    assignedDate?: DateTimeFilter<"Assignment"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "doctorId_patientId">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    assignedDate?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assignment"> | number
    doctorId?: IntWithAggregatesFilter<"Assignment"> | number
    patientId?: IntWithAggregatesFilter<"Assignment"> | number
    assignedDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    userId?: IntFilter<"Admin"> | number
    facilityId?: IntFilter<"Admin"> | number
    adminLevel?: EnumAdminLevelNullableFilter<"Admin"> | $Enums.AdminLevel | null
    department?: StringNullableFilter<"Admin"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
    adminLevel?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    facilityId?: IntFilter<"Admin"> | number
    adminLevel?: EnumAdminLevelNullableFilter<"Admin"> | $Enums.AdminLevel | null
    department?: StringNullableFilter<"Admin"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
    adminLevel?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    userId?: IntWithAggregatesFilter<"Admin"> | number
    facilityId?: IntWithAggregatesFilter<"Admin"> | number
    adminLevel?: EnumAdminLevelNullableWithAggregatesFilter<"Admin"> | $Enums.AdminLevel | null
    department?: StringNullableWithAggregatesFilter<"Admin"> | string | null
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    labUploads?: LabResultCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    labUploads?: LabResultUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    diagnoses?: DiagnosisCreateNestedManyWithoutPatientInput
    labResults?: LabResultCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoCreateNestedOneWithoutPatientInput
    assignments?: AssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutPatientInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentCreateNestedManyWithoutDoctorInput
    labResults?: LabResultCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutDoctorInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorFacilities?: DoctorFacilityUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityCreateInput = {
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisCreateNestedManyWithoutFacilityInput
    labResults?: LabResultCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentCreateNestedManyWithoutFacilityInput
    admins?: AdminCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutFacilityInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFacilityInput
    admins?: AdminUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUpdateManyWithoutFacilityNestedInput
    admins?: AdminUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFacilityNestedInput
    admins?: AdminUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityCreateInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutDoctorFacilitiesInput
    facility: FacilityCreateNestedOneWithoutDoctorFacilitiesInput
  }

  export type DoctorFacilityUncheckedCreateInput = {
    id?: number
    doctorId: number
    facilityId: number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
  }

  export type DoctorFacilityUpdateInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutDoctorFacilitiesNestedInput
    facility?: FacilityUpdateOneRequiredWithoutDoctorFacilitiesNestedInput
  }

  export type DoctorFacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityCreateManyInput = {
    id?: number
    doctorId: number
    facilityId: number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
  }

  export type DoctorFacilityUpdateManyMutationInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateInput = {
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDiagnosesInput
    doctor: DoctorCreateNestedOneWithoutDiagnosesInput
    facility: FacilityCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisUpdateInput = {
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDiagnosesNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutDiagnosesNestedInput
    facility?: FacilityUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateManyInput = {
    id?: number
    patientId: number
    doctorId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisUpdateManyMutationInput = {
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultCreateInput = {
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutLabResultsInput
    doctor?: DoctorCreateNestedOneWithoutLabResultsInput
    facility: FacilityCreateNestedOneWithoutLabResultsInput
    createdBy: UserCreateNestedOneWithoutLabUploadsInput
  }

  export type LabResultUncheckedCreateInput = {
    id?: number
    patientId: number
    doctorId?: number | null
    facilityId: number
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutLabResultsNestedInput
    doctor?: DoctorUpdateOneWithoutLabResultsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutLabResultsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutLabUploadsNestedInput
  }

  export type LabResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    facilityId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultCreateManyInput = {
    id?: number
    patientId: number
    doctorId?: number | null
    facilityId: number
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    facilityId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    facility: FacilityCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    doctorId: number
    patientId: number
    facilityId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AppointmentUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AppointmentCreateManyInput = {
    id?: number
    doctorId: number
    patientId: number
    facilityId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AppointmentUpdateManyMutationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type EmergencyInfoCreateInput = {
    bloodType?: $Enums.BloodType | null
    allergies?: string | null
    chronicDiseases?: string | null
    emergencyContact?: string | null
    lastUpdatedAt?: Date | string
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutEmergencyInfoInput
  }

  export type EmergencyInfoUncheckedCreateInput = {
    id?: number
    patientId: number
    bloodType?: $Enums.BloodType | null
    allergies?: string | null
    chronicDiseases?: string | null
    emergencyContact?: string | null
    lastUpdatedAt?: Date | string
    createdAt?: Date | string
  }

  export type EmergencyInfoUpdateInput = {
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutEmergencyInfoNestedInput
  }

  export type EmergencyInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyInfoCreateManyInput = {
    id?: number
    patientId: number
    bloodType?: $Enums.BloodType | null
    allergies?: string | null
    chronicDiseases?: string | null
    emergencyContact?: string | null
    lastUpdatedAt?: Date | string
    createdAt?: Date | string
  }

  export type EmergencyInfoUpdateManyMutationInput = {
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    assignedDate?: Date | string
    doctor: DoctorCreateNestedOneWithoutAssignmentsInput
    patient: PatientCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: number
    doctorId: number
    patientId: number
    assignedDate?: Date | string
  }

  export type AssignmentUpdateInput = {
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAssignmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyInput = {
    id?: number
    doctorId: number
    patientId: number
    assignedDate?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
    user: UserCreateNestedOneWithoutAdminInput
    facility: FacilityCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    userId: number
    facilityId: number
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
  }

  export type AdminUpdateInput = {
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
    facility?: FacilityUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateManyInput = {
    id?: number
    userId: number
    facilityId: number
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
  }

  export type AdminUpdateManyMutationInput = {
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type LabResultListRelationFilter = {
    every?: LabResultWhereInput
    some?: LabResultWhereInput
    none?: LabResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LabResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumInsuranceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuranceStatus | EnumInsuranceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuranceStatusFilter<$PrismaModel> | $Enums.InsuranceStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiagnosisListRelationFilter = {
    every?: DiagnosisWhereInput
    some?: DiagnosisWhereInput
    none?: DiagnosisWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type EmergencyInfoNullableScalarRelationFilter = {
    is?: EmergencyInfoWhereInput | null
    isNot?: EmergencyInfoWhereInput | null
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type DiagnosisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    upi?: SortOrder
    userId?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    qrToken?: SortOrder
    insuranceStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    upi?: SortOrder
    userId?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    qrToken?: SortOrder
    insuranceStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    upi?: SortOrder
    userId?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    qrToken?: SortOrder
    insuranceStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumInsuranceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuranceStatus | EnumInsuranceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuranceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InsuranceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsuranceStatusFilter<$PrismaModel>
    _max?: NestedEnumInsuranceStatusFilter<$PrismaModel>
  }

  export type DoctorFacilityListRelationFilter = {
    every?: DoctorFacilityWhereInput
    some?: DoctorFacilityWhereInput
    none?: DoctorFacilityWhereInput
  }

  export type DoctorFacilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNo?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNo?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNo?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumFacilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeFilter<$PrismaModel> | $Enums.FacilityType
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facilityType?: SortOrder
    region?: SortOrder
    locationAddress?: SortOrder
    contactPhone?: SortOrder
    licenseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facilityType?: SortOrder
    region?: SortOrder
    locationAddress?: SortOrder
    contactPhone?: SortOrder
    licenseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facilityType?: SortOrder
    region?: SortOrder
    locationAddress?: SortOrder
    contactPhone?: SortOrder
    licenseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumFacilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacilityTypeFilter<$PrismaModel>
    _max?: NestedEnumFacilityTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type FacilityScalarRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type DoctorFacilityDoctorIdFacilityIdCompoundUniqueInput = {
    doctorId: number
    facilityId: number
  }

  export type DoctorFacilityCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    schedule?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type DoctorFacilityAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
  }

  export type DoctorFacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type DoctorFacilityMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type DoctorFacilitySumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type DiagnosisCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    diagnosisText?: SortOrder
    treatmentPlan?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosisAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
  }

  export type DiagnosisMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    diagnosisText?: SortOrder
    treatmentPlan?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosisMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    diagnosisText?: SortOrder
    treatmentPlan?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosisSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LabResultCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
    filePath?: SortOrder
    resultType?: SortOrder
    createdAt?: SortOrder
  }

  export type LabResultAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
  }

  export type LabResultMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
    filePath?: SortOrder
    resultType?: SortOrder
    createdAt?: SortOrder
  }

  export type LabResultMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
    filePath?: SortOrder
    resultType?: SortOrder
    createdAt?: SortOrder
  }

  export type LabResultSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    facilityId?: SortOrder
    createdById?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
    dateTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
    dateTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
    dateTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    facilityId?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumBloodTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableFilter<$PrismaModel> | $Enums.BloodType | null
  }

  export type EmergencyInfoCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodType?: SortOrder
    allergies?: SortOrder
    chronicDiseases?: SortOrder
    emergencyContact?: SortOrder
    lastUpdatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmergencyInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type EmergencyInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodType?: SortOrder
    allergies?: SortOrder
    chronicDiseases?: SortOrder
    emergencyContact?: SortOrder
    lastUpdatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmergencyInfoMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodType?: SortOrder
    allergies?: SortOrder
    chronicDiseases?: SortOrder
    emergencyContact?: SortOrder
    lastUpdatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmergencyInfoSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type EnumBloodTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
  }

  export type AssignmentDoctorIdPatientIdCompoundUniqueInput = {
    doctorId: number
    patientId: number
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    assignedDate?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    assignedDate?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    assignedDate?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type EnumAdminLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminLevel | EnumAdminLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdminLevelNullableFilter<$PrismaModel> | $Enums.AdminLevel | null
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
    adminLevel?: SortOrder
    department?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
    adminLevel?: SortOrder
    department?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
    adminLevel?: SortOrder
    department?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    facilityId?: SortOrder
  }

  export type EnumAdminLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminLevel | EnumAdminLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdminLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdminLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdminLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumAdminLevelNullableFilter<$PrismaModel>
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type LabResultCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LabResultCreateWithoutCreatedByInput, LabResultUncheckedCreateWithoutCreatedByInput> | LabResultCreateWithoutCreatedByInput[] | LabResultUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutCreatedByInput | LabResultCreateOrConnectWithoutCreatedByInput[]
    createMany?: LabResultCreateManyCreatedByInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type LabResultUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LabResultCreateWithoutCreatedByInput, LabResultUncheckedCreateWithoutCreatedByInput> | LabResultCreateWithoutCreatedByInput[] | LabResultUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutCreatedByInput | LabResultCreateOrConnectWithoutCreatedByInput[]
    createMany?: LabResultCreateManyCreatedByInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type LabResultUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LabResultCreateWithoutCreatedByInput, LabResultUncheckedCreateWithoutCreatedByInput> | LabResultCreateWithoutCreatedByInput[] | LabResultUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutCreatedByInput | LabResultCreateOrConnectWithoutCreatedByInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutCreatedByInput | LabResultUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LabResultCreateManyCreatedByInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutCreatedByInput | LabResultUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutCreatedByInput | LabResultUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type LabResultUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LabResultCreateWithoutCreatedByInput, LabResultUncheckedCreateWithoutCreatedByInput> | LabResultCreateWithoutCreatedByInput[] | LabResultUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutCreatedByInput | LabResultCreateOrConnectWithoutCreatedByInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutCreatedByInput | LabResultUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LabResultCreateManyCreatedByInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutCreatedByInput | LabResultUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutCreatedByInput | LabResultUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type DiagnosisCreateNestedManyWithoutPatientInput = {
    create?: XOR<DiagnosisCreateWithoutPatientInput, DiagnosisUncheckedCreateWithoutPatientInput> | DiagnosisCreateWithoutPatientInput[] | DiagnosisUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutPatientInput | DiagnosisCreateOrConnectWithoutPatientInput[]
    createMany?: DiagnosisCreateManyPatientInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type LabResultCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabResultCreateWithoutPatientInput, LabResultUncheckedCreateWithoutPatientInput> | LabResultCreateWithoutPatientInput[] | LabResultUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutPatientInput | LabResultCreateOrConnectWithoutPatientInput[]
    createMany?: LabResultCreateManyPatientInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type EmergencyInfoCreateNestedOneWithoutPatientInput = {
    create?: XOR<EmergencyInfoCreateWithoutPatientInput, EmergencyInfoUncheckedCreateWithoutPatientInput>
    connectOrCreate?: EmergencyInfoCreateOrConnectWithoutPatientInput
    connect?: EmergencyInfoWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AssignmentCreateWithoutPatientInput, AssignmentUncheckedCreateWithoutPatientInput> | AssignmentCreateWithoutPatientInput[] | AssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPatientInput | AssignmentCreateOrConnectWithoutPatientInput[]
    createMany?: AssignmentCreateManyPatientInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type DiagnosisUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<DiagnosisCreateWithoutPatientInput, DiagnosisUncheckedCreateWithoutPatientInput> | DiagnosisCreateWithoutPatientInput[] | DiagnosisUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutPatientInput | DiagnosisCreateOrConnectWithoutPatientInput[]
    createMany?: DiagnosisCreateManyPatientInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type LabResultUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabResultCreateWithoutPatientInput, LabResultUncheckedCreateWithoutPatientInput> | LabResultCreateWithoutPatientInput[] | LabResultUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutPatientInput | LabResultCreateOrConnectWithoutPatientInput[]
    createMany?: LabResultCreateManyPatientInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<EmergencyInfoCreateWithoutPatientInput, EmergencyInfoUncheckedCreateWithoutPatientInput>
    connectOrCreate?: EmergencyInfoCreateOrConnectWithoutPatientInput
    connect?: EmergencyInfoWhereUniqueInput
  }

  export type AssignmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AssignmentCreateWithoutPatientInput, AssignmentUncheckedCreateWithoutPatientInput> | AssignmentCreateWithoutPatientInput[] | AssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPatientInput | AssignmentCreateOrConnectWithoutPatientInput[]
    createMany?: AssignmentCreateManyPatientInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type EnumInsuranceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InsuranceStatus
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type DiagnosisUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DiagnosisCreateWithoutPatientInput, DiagnosisUncheckedCreateWithoutPatientInput> | DiagnosisCreateWithoutPatientInput[] | DiagnosisUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutPatientInput | DiagnosisCreateOrConnectWithoutPatientInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutPatientInput | DiagnosisUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DiagnosisCreateManyPatientInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutPatientInput | DiagnosisUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutPatientInput | DiagnosisUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type LabResultUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabResultCreateWithoutPatientInput, LabResultUncheckedCreateWithoutPatientInput> | LabResultCreateWithoutPatientInput[] | LabResultUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutPatientInput | LabResultCreateOrConnectWithoutPatientInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutPatientInput | LabResultUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabResultCreateManyPatientInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutPatientInput | LabResultUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutPatientInput | LabResultUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EmergencyInfoUpdateOneWithoutPatientNestedInput = {
    create?: XOR<EmergencyInfoCreateWithoutPatientInput, EmergencyInfoUncheckedCreateWithoutPatientInput>
    connectOrCreate?: EmergencyInfoCreateOrConnectWithoutPatientInput
    upsert?: EmergencyInfoUpsertWithoutPatientInput
    disconnect?: EmergencyInfoWhereInput | boolean
    delete?: EmergencyInfoWhereInput | boolean
    connect?: EmergencyInfoWhereUniqueInput
    update?: XOR<XOR<EmergencyInfoUpdateToOneWithWhereWithoutPatientInput, EmergencyInfoUpdateWithoutPatientInput>, EmergencyInfoUncheckedUpdateWithoutPatientInput>
  }

  export type AssignmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AssignmentCreateWithoutPatientInput, AssignmentUncheckedCreateWithoutPatientInput> | AssignmentCreateWithoutPatientInput[] | AssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPatientInput | AssignmentCreateOrConnectWithoutPatientInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutPatientInput | AssignmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AssignmentCreateManyPatientInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutPatientInput | AssignmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutPatientInput | AssignmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type DiagnosisUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DiagnosisCreateWithoutPatientInput, DiagnosisUncheckedCreateWithoutPatientInput> | DiagnosisCreateWithoutPatientInput[] | DiagnosisUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutPatientInput | DiagnosisCreateOrConnectWithoutPatientInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutPatientInput | DiagnosisUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DiagnosisCreateManyPatientInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutPatientInput | DiagnosisUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutPatientInput | DiagnosisUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type LabResultUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabResultCreateWithoutPatientInput, LabResultUncheckedCreateWithoutPatientInput> | LabResultCreateWithoutPatientInput[] | LabResultUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutPatientInput | LabResultCreateOrConnectWithoutPatientInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutPatientInput | LabResultUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabResultCreateManyPatientInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutPatientInput | LabResultUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutPatientInput | LabResultUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<EmergencyInfoCreateWithoutPatientInput, EmergencyInfoUncheckedCreateWithoutPatientInput>
    connectOrCreate?: EmergencyInfoCreateOrConnectWithoutPatientInput
    upsert?: EmergencyInfoUpsertWithoutPatientInput
    disconnect?: EmergencyInfoWhereInput | boolean
    delete?: EmergencyInfoWhereInput | boolean
    connect?: EmergencyInfoWhereUniqueInput
    update?: XOR<XOR<EmergencyInfoUpdateToOneWithWhereWithoutPatientInput, EmergencyInfoUpdateWithoutPatientInput>, EmergencyInfoUncheckedUpdateWithoutPatientInput>
  }

  export type AssignmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AssignmentCreateWithoutPatientInput, AssignmentUncheckedCreateWithoutPatientInput> | AssignmentCreateWithoutPatientInput[] | AssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPatientInput | AssignmentCreateOrConnectWithoutPatientInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutPatientInput | AssignmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AssignmentCreateManyPatientInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutPatientInput | AssignmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutPatientInput | AssignmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorFacilityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorFacilityCreateWithoutDoctorInput, DoctorFacilityUncheckedCreateWithoutDoctorInput> | DoctorFacilityCreateWithoutDoctorInput[] | DoctorFacilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutDoctorInput | DoctorFacilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorFacilityCreateManyDoctorInputEnvelope
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
  }

  export type DiagnosisCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DiagnosisCreateWithoutDoctorInput, DiagnosisUncheckedCreateWithoutDoctorInput> | DiagnosisCreateWithoutDoctorInput[] | DiagnosisUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDoctorInput | DiagnosisCreateOrConnectWithoutDoctorInput[]
    createMany?: DiagnosisCreateManyDoctorInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AssignmentCreateWithoutDoctorInput, AssignmentUncheckedCreateWithoutDoctorInput> | AssignmentCreateWithoutDoctorInput[] | AssignmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoctorInput | AssignmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AssignmentCreateManyDoctorInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type LabResultCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LabResultCreateWithoutDoctorInput, LabResultUncheckedCreateWithoutDoctorInput> | LabResultCreateWithoutDoctorInput[] | LabResultUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutDoctorInput | LabResultCreateOrConnectWithoutDoctorInput[]
    createMany?: LabResultCreateManyDoctorInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorFacilityCreateWithoutDoctorInput, DoctorFacilityUncheckedCreateWithoutDoctorInput> | DoctorFacilityCreateWithoutDoctorInput[] | DoctorFacilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutDoctorInput | DoctorFacilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorFacilityCreateManyDoctorInputEnvelope
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
  }

  export type DiagnosisUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DiagnosisCreateWithoutDoctorInput, DiagnosisUncheckedCreateWithoutDoctorInput> | DiagnosisCreateWithoutDoctorInput[] | DiagnosisUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDoctorInput | DiagnosisCreateOrConnectWithoutDoctorInput[]
    createMany?: DiagnosisCreateManyDoctorInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AssignmentCreateWithoutDoctorInput, AssignmentUncheckedCreateWithoutDoctorInput> | AssignmentCreateWithoutDoctorInput[] | AssignmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoctorInput | AssignmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AssignmentCreateManyDoctorInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type LabResultUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<LabResultCreateWithoutDoctorInput, LabResultUncheckedCreateWithoutDoctorInput> | LabResultCreateWithoutDoctorInput[] | LabResultUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutDoctorInput | LabResultCreateOrConnectWithoutDoctorInput[]
    createMany?: LabResultCreateManyDoctorInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorFacilityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorFacilityCreateWithoutDoctorInput, DoctorFacilityUncheckedCreateWithoutDoctorInput> | DoctorFacilityCreateWithoutDoctorInput[] | DoctorFacilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutDoctorInput | DoctorFacilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorFacilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorFacilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorFacilityCreateManyDoctorInputEnvelope
    set?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    disconnect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    delete?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    update?: DoctorFacilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorFacilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorFacilityUpdateManyWithWhereWithoutDoctorInput | DoctorFacilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorFacilityScalarWhereInput | DoctorFacilityScalarWhereInput[]
  }

  export type DiagnosisUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DiagnosisCreateWithoutDoctorInput, DiagnosisUncheckedCreateWithoutDoctorInput> | DiagnosisCreateWithoutDoctorInput[] | DiagnosisUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDoctorInput | DiagnosisCreateOrConnectWithoutDoctorInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutDoctorInput | DiagnosisUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DiagnosisCreateManyDoctorInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutDoctorInput | DiagnosisUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutDoctorInput | DiagnosisUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AssignmentCreateWithoutDoctorInput, AssignmentUncheckedCreateWithoutDoctorInput> | AssignmentCreateWithoutDoctorInput[] | AssignmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoctorInput | AssignmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutDoctorInput | AssignmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AssignmentCreateManyDoctorInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutDoctorInput | AssignmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutDoctorInput | AssignmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type LabResultUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LabResultCreateWithoutDoctorInput, LabResultUncheckedCreateWithoutDoctorInput> | LabResultCreateWithoutDoctorInput[] | LabResultUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutDoctorInput | LabResultCreateOrConnectWithoutDoctorInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutDoctorInput | LabResultUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LabResultCreateManyDoctorInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutDoctorInput | LabResultUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutDoctorInput | LabResultUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorFacilityCreateWithoutDoctorInput, DoctorFacilityUncheckedCreateWithoutDoctorInput> | DoctorFacilityCreateWithoutDoctorInput[] | DoctorFacilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutDoctorInput | DoctorFacilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorFacilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorFacilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorFacilityCreateManyDoctorInputEnvelope
    set?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    disconnect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    delete?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    update?: DoctorFacilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorFacilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorFacilityUpdateManyWithWhereWithoutDoctorInput | DoctorFacilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorFacilityScalarWhereInput | DoctorFacilityScalarWhereInput[]
  }

  export type DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DiagnosisCreateWithoutDoctorInput, DiagnosisUncheckedCreateWithoutDoctorInput> | DiagnosisCreateWithoutDoctorInput[] | DiagnosisUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDoctorInput | DiagnosisCreateOrConnectWithoutDoctorInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutDoctorInput | DiagnosisUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DiagnosisCreateManyDoctorInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutDoctorInput | DiagnosisUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutDoctorInput | DiagnosisUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AssignmentCreateWithoutDoctorInput, AssignmentUncheckedCreateWithoutDoctorInput> | AssignmentCreateWithoutDoctorInput[] | AssignmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoctorInput | AssignmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutDoctorInput | AssignmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AssignmentCreateManyDoctorInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutDoctorInput | AssignmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutDoctorInput | AssignmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type LabResultUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<LabResultCreateWithoutDoctorInput, LabResultUncheckedCreateWithoutDoctorInput> | LabResultCreateWithoutDoctorInput[] | LabResultUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutDoctorInput | LabResultCreateOrConnectWithoutDoctorInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutDoctorInput | LabResultUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: LabResultCreateManyDoctorInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutDoctorInput | LabResultUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutDoctorInput | LabResultUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type DoctorFacilityCreateNestedManyWithoutFacilityInput = {
    create?: XOR<DoctorFacilityCreateWithoutFacilityInput, DoctorFacilityUncheckedCreateWithoutFacilityInput> | DoctorFacilityCreateWithoutFacilityInput[] | DoctorFacilityUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutFacilityInput | DoctorFacilityCreateOrConnectWithoutFacilityInput[]
    createMany?: DoctorFacilityCreateManyFacilityInputEnvelope
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
  }

  export type DiagnosisCreateNestedManyWithoutFacilityInput = {
    create?: XOR<DiagnosisCreateWithoutFacilityInput, DiagnosisUncheckedCreateWithoutFacilityInput> | DiagnosisCreateWithoutFacilityInput[] | DiagnosisUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutFacilityInput | DiagnosisCreateOrConnectWithoutFacilityInput[]
    createMany?: DiagnosisCreateManyFacilityInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type LabResultCreateNestedManyWithoutFacilityInput = {
    create?: XOR<LabResultCreateWithoutFacilityInput, LabResultUncheckedCreateWithoutFacilityInput> | LabResultCreateWithoutFacilityInput[] | LabResultUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutFacilityInput | LabResultCreateOrConnectWithoutFacilityInput[]
    createMany?: LabResultCreateManyFacilityInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutFacilityInput = {
    create?: XOR<AppointmentCreateWithoutFacilityInput, AppointmentUncheckedCreateWithoutFacilityInput> | AppointmentCreateWithoutFacilityInput[] | AppointmentUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFacilityInput | AppointmentCreateOrConnectWithoutFacilityInput[]
    createMany?: AppointmentCreateManyFacilityInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AdminCreateNestedManyWithoutFacilityInput = {
    create?: XOR<AdminCreateWithoutFacilityInput, AdminUncheckedCreateWithoutFacilityInput> | AdminCreateWithoutFacilityInput[] | AdminUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacilityInput | AdminCreateOrConnectWithoutFacilityInput[]
    createMany?: AdminCreateManyFacilityInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type DoctorFacilityUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<DoctorFacilityCreateWithoutFacilityInput, DoctorFacilityUncheckedCreateWithoutFacilityInput> | DoctorFacilityCreateWithoutFacilityInput[] | DoctorFacilityUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutFacilityInput | DoctorFacilityCreateOrConnectWithoutFacilityInput[]
    createMany?: DoctorFacilityCreateManyFacilityInputEnvelope
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
  }

  export type DiagnosisUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<DiagnosisCreateWithoutFacilityInput, DiagnosisUncheckedCreateWithoutFacilityInput> | DiagnosisCreateWithoutFacilityInput[] | DiagnosisUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutFacilityInput | DiagnosisCreateOrConnectWithoutFacilityInput[]
    createMany?: DiagnosisCreateManyFacilityInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type LabResultUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<LabResultCreateWithoutFacilityInput, LabResultUncheckedCreateWithoutFacilityInput> | LabResultCreateWithoutFacilityInput[] | LabResultUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutFacilityInput | LabResultCreateOrConnectWithoutFacilityInput[]
    createMany?: LabResultCreateManyFacilityInputEnvelope
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<AppointmentCreateWithoutFacilityInput, AppointmentUncheckedCreateWithoutFacilityInput> | AppointmentCreateWithoutFacilityInput[] | AppointmentUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFacilityInput | AppointmentCreateOrConnectWithoutFacilityInput[]
    createMany?: AppointmentCreateManyFacilityInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<AdminCreateWithoutFacilityInput, AdminUncheckedCreateWithoutFacilityInput> | AdminCreateWithoutFacilityInput[] | AdminUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacilityInput | AdminCreateOrConnectWithoutFacilityInput[]
    createMany?: AdminCreateManyFacilityInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type EnumFacilityTypeFieldUpdateOperationsInput = {
    set?: $Enums.FacilityType
  }

  export type DoctorFacilityUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<DoctorFacilityCreateWithoutFacilityInput, DoctorFacilityUncheckedCreateWithoutFacilityInput> | DoctorFacilityCreateWithoutFacilityInput[] | DoctorFacilityUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutFacilityInput | DoctorFacilityCreateOrConnectWithoutFacilityInput[]
    upsert?: DoctorFacilityUpsertWithWhereUniqueWithoutFacilityInput | DoctorFacilityUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: DoctorFacilityCreateManyFacilityInputEnvelope
    set?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    disconnect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    delete?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    update?: DoctorFacilityUpdateWithWhereUniqueWithoutFacilityInput | DoctorFacilityUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: DoctorFacilityUpdateManyWithWhereWithoutFacilityInput | DoctorFacilityUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: DoctorFacilityScalarWhereInput | DoctorFacilityScalarWhereInput[]
  }

  export type DiagnosisUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<DiagnosisCreateWithoutFacilityInput, DiagnosisUncheckedCreateWithoutFacilityInput> | DiagnosisCreateWithoutFacilityInput[] | DiagnosisUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutFacilityInput | DiagnosisCreateOrConnectWithoutFacilityInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutFacilityInput | DiagnosisUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: DiagnosisCreateManyFacilityInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutFacilityInput | DiagnosisUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutFacilityInput | DiagnosisUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type LabResultUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<LabResultCreateWithoutFacilityInput, LabResultUncheckedCreateWithoutFacilityInput> | LabResultCreateWithoutFacilityInput[] | LabResultUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutFacilityInput | LabResultCreateOrConnectWithoutFacilityInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutFacilityInput | LabResultUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: LabResultCreateManyFacilityInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutFacilityInput | LabResultUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutFacilityInput | LabResultUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<AppointmentCreateWithoutFacilityInput, AppointmentUncheckedCreateWithoutFacilityInput> | AppointmentCreateWithoutFacilityInput[] | AppointmentUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFacilityInput | AppointmentCreateOrConnectWithoutFacilityInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutFacilityInput | AppointmentUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: AppointmentCreateManyFacilityInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutFacilityInput | AppointmentUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutFacilityInput | AppointmentUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AdminUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<AdminCreateWithoutFacilityInput, AdminUncheckedCreateWithoutFacilityInput> | AdminCreateWithoutFacilityInput[] | AdminUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacilityInput | AdminCreateOrConnectWithoutFacilityInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutFacilityInput | AdminUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: AdminCreateManyFacilityInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutFacilityInput | AdminUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutFacilityInput | AdminUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type DoctorFacilityUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<DoctorFacilityCreateWithoutFacilityInput, DoctorFacilityUncheckedCreateWithoutFacilityInput> | DoctorFacilityCreateWithoutFacilityInput[] | DoctorFacilityUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DoctorFacilityCreateOrConnectWithoutFacilityInput | DoctorFacilityCreateOrConnectWithoutFacilityInput[]
    upsert?: DoctorFacilityUpsertWithWhereUniqueWithoutFacilityInput | DoctorFacilityUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: DoctorFacilityCreateManyFacilityInputEnvelope
    set?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    disconnect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    delete?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    connect?: DoctorFacilityWhereUniqueInput | DoctorFacilityWhereUniqueInput[]
    update?: DoctorFacilityUpdateWithWhereUniqueWithoutFacilityInput | DoctorFacilityUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: DoctorFacilityUpdateManyWithWhereWithoutFacilityInput | DoctorFacilityUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: DoctorFacilityScalarWhereInput | DoctorFacilityScalarWhereInput[]
  }

  export type DiagnosisUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<DiagnosisCreateWithoutFacilityInput, DiagnosisUncheckedCreateWithoutFacilityInput> | DiagnosisCreateWithoutFacilityInput[] | DiagnosisUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutFacilityInput | DiagnosisCreateOrConnectWithoutFacilityInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutFacilityInput | DiagnosisUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: DiagnosisCreateManyFacilityInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutFacilityInput | DiagnosisUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutFacilityInput | DiagnosisUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type LabResultUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<LabResultCreateWithoutFacilityInput, LabResultUncheckedCreateWithoutFacilityInput> | LabResultCreateWithoutFacilityInput[] | LabResultUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: LabResultCreateOrConnectWithoutFacilityInput | LabResultCreateOrConnectWithoutFacilityInput[]
    upsert?: LabResultUpsertWithWhereUniqueWithoutFacilityInput | LabResultUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: LabResultCreateManyFacilityInputEnvelope
    set?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    disconnect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    delete?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    connect?: LabResultWhereUniqueInput | LabResultWhereUniqueInput[]
    update?: LabResultUpdateWithWhereUniqueWithoutFacilityInput | LabResultUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: LabResultUpdateManyWithWhereWithoutFacilityInput | LabResultUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<AppointmentCreateWithoutFacilityInput, AppointmentUncheckedCreateWithoutFacilityInput> | AppointmentCreateWithoutFacilityInput[] | AppointmentUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutFacilityInput | AppointmentCreateOrConnectWithoutFacilityInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutFacilityInput | AppointmentUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: AppointmentCreateManyFacilityInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutFacilityInput | AppointmentUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutFacilityInput | AppointmentUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<AdminCreateWithoutFacilityInput, AdminUncheckedCreateWithoutFacilityInput> | AdminCreateWithoutFacilityInput[] | AdminUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacilityInput | AdminCreateOrConnectWithoutFacilityInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutFacilityInput | AdminUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: AdminCreateManyFacilityInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutFacilityInput | AdminUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutFacilityInput | AdminUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutDoctorFacilitiesInput = {
    create?: XOR<DoctorCreateWithoutDoctorFacilitiesInput, DoctorUncheckedCreateWithoutDoctorFacilitiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorFacilitiesInput
    connect?: DoctorWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutDoctorFacilitiesInput = {
    create?: XOR<FacilityCreateWithoutDoctorFacilitiesInput, FacilityUncheckedCreateWithoutDoctorFacilitiesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutDoctorFacilitiesInput
    connect?: FacilityWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutDoctorFacilitiesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorFacilitiesInput, DoctorUncheckedCreateWithoutDoctorFacilitiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorFacilitiesInput
    upsert?: DoctorUpsertWithoutDoctorFacilitiesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorFacilitiesInput, DoctorUpdateWithoutDoctorFacilitiesInput>, DoctorUncheckedUpdateWithoutDoctorFacilitiesInput>
  }

  export type FacilityUpdateOneRequiredWithoutDoctorFacilitiesNestedInput = {
    create?: XOR<FacilityCreateWithoutDoctorFacilitiesInput, FacilityUncheckedCreateWithoutDoctorFacilitiesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutDoctorFacilitiesInput
    upsert?: FacilityUpsertWithoutDoctorFacilitiesInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutDoctorFacilitiesInput, FacilityUpdateWithoutDoctorFacilitiesInput>, FacilityUncheckedUpdateWithoutDoctorFacilitiesInput>
  }

  export type PatientCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<PatientCreateWithoutDiagnosesInput, PatientUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutDiagnosesInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<DoctorCreateWithoutDiagnosesInput, DoctorUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDiagnosesInput
    connect?: DoctorWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<FacilityCreateWithoutDiagnosesInput, FacilityUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutDiagnosesInput
    connect?: FacilityWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<PatientCreateWithoutDiagnosesInput, PatientUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutDiagnosesInput
    upsert?: PatientUpsertWithoutDiagnosesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutDiagnosesInput, PatientUpdateWithoutDiagnosesInput>, PatientUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DoctorUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<DoctorCreateWithoutDiagnosesInput, DoctorUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDiagnosesInput
    upsert?: DoctorUpsertWithoutDiagnosesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDiagnosesInput, DoctorUpdateWithoutDiagnosesInput>, DoctorUncheckedUpdateWithoutDiagnosesInput>
  }

  export type FacilityUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<FacilityCreateWithoutDiagnosesInput, FacilityUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutDiagnosesInput
    upsert?: FacilityUpsertWithoutDiagnosesInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutDiagnosesInput, FacilityUpdateWithoutDiagnosesInput>, FacilityUncheckedUpdateWithoutDiagnosesInput>
  }

  export type PatientCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<PatientCreateWithoutLabResultsInput, PatientUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabResultsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<DoctorCreateWithoutLabResultsInput, DoctorUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabResultsInput
    connect?: DoctorWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<FacilityCreateWithoutLabResultsInput, FacilityUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutLabResultsInput
    connect?: FacilityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLabUploadsInput = {
    create?: XOR<UserCreateWithoutLabUploadsInput, UserUncheckedCreateWithoutLabUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabUploadsInput
    connect?: UserWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutLabResultsNestedInput = {
    create?: XOR<PatientCreateWithoutLabResultsInput, PatientUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLabResultsInput
    upsert?: PatientUpsertWithoutLabResultsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutLabResultsInput, PatientUpdateWithoutLabResultsInput>, PatientUncheckedUpdateWithoutLabResultsInput>
  }

  export type DoctorUpdateOneWithoutLabResultsNestedInput = {
    create?: XOR<DoctorCreateWithoutLabResultsInput, DoctorUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutLabResultsInput
    upsert?: DoctorUpsertWithoutLabResultsInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutLabResultsInput, DoctorUpdateWithoutLabResultsInput>, DoctorUncheckedUpdateWithoutLabResultsInput>
  }

  export type FacilityUpdateOneRequiredWithoutLabResultsNestedInput = {
    create?: XOR<FacilityCreateWithoutLabResultsInput, FacilityUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutLabResultsInput
    upsert?: FacilityUpsertWithoutLabResultsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutLabResultsInput, FacilityUpdateWithoutLabResultsInput>, FacilityUncheckedUpdateWithoutLabResultsInput>
  }

  export type UserUpdateOneRequiredWithoutLabUploadsNestedInput = {
    create?: XOR<UserCreateWithoutLabUploadsInput, UserUncheckedCreateWithoutLabUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabUploadsInput
    upsert?: UserUpsertWithoutLabUploadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLabUploadsInput, UserUpdateWithoutLabUploadsInput>, UserUncheckedUpdateWithoutLabUploadsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<FacilityCreateWithoutAppointmentsInput, FacilityUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutAppointmentsInput
    connect?: FacilityWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type FacilityUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<FacilityCreateWithoutAppointmentsInput, FacilityUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutAppointmentsInput
    upsert?: FacilityUpsertWithoutAppointmentsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutAppointmentsInput, FacilityUpdateWithoutAppointmentsInput>, FacilityUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientCreateNestedOneWithoutEmergencyInfoInput = {
    create?: XOR<PatientCreateWithoutEmergencyInfoInput, PatientUncheckedCreateWithoutEmergencyInfoInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmergencyInfoInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableEnumBloodTypeFieldUpdateOperationsInput = {
    set?: $Enums.BloodType | null
  }

  export type PatientUpdateOneRequiredWithoutEmergencyInfoNestedInput = {
    create?: XOR<PatientCreateWithoutEmergencyInfoInput, PatientUncheckedCreateWithoutEmergencyInfoInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmergencyInfoInput
    upsert?: PatientUpsertWithoutEmergencyInfoInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutEmergencyInfoInput, PatientUpdateWithoutEmergencyInfoInput>, PatientUncheckedUpdateWithoutEmergencyInfoInput>
  }

  export type DoctorCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<DoctorCreateWithoutAssignmentsInput, DoctorUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAssignmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<PatientCreateWithoutAssignmentsInput, PatientUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAssignmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAssignmentsInput, DoctorUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAssignmentsInput
    upsert?: DoctorUpsertWithoutAssignmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAssignmentsInput, DoctorUpdateWithoutAssignmentsInput>, DoctorUncheckedUpdateWithoutAssignmentsInput>
  }

  export type PatientUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAssignmentsInput, PatientUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAssignmentsInput
    upsert?: PatientUpsertWithoutAssignmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAssignmentsInput, PatientUpdateWithoutAssignmentsInput>, PatientUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutAdminsInput = {
    create?: XOR<FacilityCreateWithoutAdminsInput, FacilityUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutAdminsInput
    connect?: FacilityWhereUniqueInput
  }

  export type NullableEnumAdminLevelFieldUpdateOperationsInput = {
    set?: $Enums.AdminLevel | null
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type FacilityUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<FacilityCreateWithoutAdminsInput, FacilityUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutAdminsInput
    upsert?: FacilityUpsertWithoutAdminsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutAdminsInput, FacilityUpdateWithoutAdminsInput>, FacilityUncheckedUpdateWithoutAdminsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumInsuranceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuranceStatus | EnumInsuranceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuranceStatusFilter<$PrismaModel> | $Enums.InsuranceStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumInsuranceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuranceStatus | EnumInsuranceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuranceStatus[] | ListEnumInsuranceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuranceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InsuranceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsuranceStatusFilter<$PrismaModel>
    _max?: NestedEnumInsuranceStatusFilter<$PrismaModel>
  }

  export type NestedEnumFacilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeFilter<$PrismaModel> | $Enums.FacilityType
  }

  export type NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacilityTypeFilter<$PrismaModel>
    _max?: NestedEnumFacilityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumBloodTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableFilter<$PrismaModel> | $Enums.BloodType | null
  }

  export type NestedEnumBloodTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdminLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminLevel | EnumAdminLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdminLevelNullableFilter<$PrismaModel> | $Enums.AdminLevel | null
  }

  export type NestedEnumAdminLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminLevel | EnumAdminLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdminLevel[] | ListEnumAdminLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdminLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdminLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdminLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumAdminLevelNullableFilter<$PrismaModel>
  }

  export type PatientCreateWithoutUserInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisCreateNestedManyWithoutPatientInput
    labResults?: LabResultCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoCreateNestedOneWithoutPatientInput
    assignments?: AssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: number
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutPatientInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentCreateNestedManyWithoutDoctorInput
    labResults?: LabResultCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutDoctorInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
    facility: FacilityCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: number
    facilityId: number
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type LabResultCreateWithoutCreatedByInput = {
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutLabResultsInput
    doctor?: DoctorCreateNestedOneWithoutLabResultsInput
    facility: FacilityCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultUncheckedCreateWithoutCreatedByInput = {
    id?: number
    patientId: number
    doctorId?: number | null
    facilityId: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultCreateOrConnectWithoutCreatedByInput = {
    where: LabResultWhereUniqueInput
    create: XOR<LabResultCreateWithoutCreatedByInput, LabResultUncheckedCreateWithoutCreatedByInput>
  }

  export type LabResultCreateManyCreatedByInputEnvelope = {
    data: LabResultCreateManyCreatedByInput | LabResultCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: FacilityUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabResultUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: LabResultWhereUniqueInput
    update: XOR<LabResultUpdateWithoutCreatedByInput, LabResultUncheckedUpdateWithoutCreatedByInput>
    create: XOR<LabResultCreateWithoutCreatedByInput, LabResultUncheckedCreateWithoutCreatedByInput>
  }

  export type LabResultUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: LabResultWhereUniqueInput
    data: XOR<LabResultUpdateWithoutCreatedByInput, LabResultUncheckedUpdateWithoutCreatedByInput>
  }

  export type LabResultUpdateManyWithWhereWithoutCreatedByInput = {
    where: LabResultScalarWhereInput
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type LabResultScalarWhereInput = {
    AND?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
    OR?: LabResultScalarWhereInput[]
    NOT?: LabResultScalarWhereInput | LabResultScalarWhereInput[]
    id?: IntFilter<"LabResult"> | number
    patientId?: IntFilter<"LabResult"> | number
    doctorId?: IntNullableFilter<"LabResult"> | number | null
    facilityId?: IntFilter<"LabResult"> | number
    createdById?: IntFilter<"LabResult"> | number
    filePath?: StringFilter<"LabResult"> | string
    resultType?: StringNullableFilter<"LabResult"> | string | null
    createdAt?: DateTimeFilter<"LabResult"> | Date | string
  }

  export type UserCreateWithoutPatientInput = {
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    labUploads?: LabResultCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    labUploads?: LabResultUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type DiagnosisCreateWithoutPatientInput = {
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutDiagnosesInput
    facility: FacilityCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisCreateOrConnectWithoutPatientInput = {
    where: DiagnosisWhereUniqueInput
    create: XOR<DiagnosisCreateWithoutPatientInput, DiagnosisUncheckedCreateWithoutPatientInput>
  }

  export type DiagnosisCreateManyPatientInputEnvelope = {
    data: DiagnosisCreateManyPatientInput | DiagnosisCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type LabResultCreateWithoutPatientInput = {
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutLabResultsInput
    facility: FacilityCreateNestedOneWithoutLabResultsInput
    createdBy: UserCreateNestedOneWithoutLabUploadsInput
  }

  export type LabResultUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId?: number | null
    facilityId: number
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultCreateOrConnectWithoutPatientInput = {
    where: LabResultWhereUniqueInput
    create: XOR<LabResultCreateWithoutPatientInput, LabResultUncheckedCreateWithoutPatientInput>
  }

  export type LabResultCreateManyPatientInputEnvelope = {
    data: LabResultCreateManyPatientInput | LabResultCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    facility: FacilityCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    facilityId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyInfoCreateWithoutPatientInput = {
    bloodType?: $Enums.BloodType | null
    allergies?: string | null
    chronicDiseases?: string | null
    emergencyContact?: string | null
    lastUpdatedAt?: Date | string
    createdAt?: Date | string
  }

  export type EmergencyInfoUncheckedCreateWithoutPatientInput = {
    id?: number
    bloodType?: $Enums.BloodType | null
    allergies?: string | null
    chronicDiseases?: string | null
    emergencyContact?: string | null
    lastUpdatedAt?: Date | string
    createdAt?: Date | string
  }

  export type EmergencyInfoCreateOrConnectWithoutPatientInput = {
    where: EmergencyInfoWhereUniqueInput
    create: XOR<EmergencyInfoCreateWithoutPatientInput, EmergencyInfoUncheckedCreateWithoutPatientInput>
  }

  export type AssignmentCreateWithoutPatientInput = {
    assignedDate?: Date | string
    doctor: DoctorCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutPatientInput = {
    id?: number
    doctorId: number
    assignedDate?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutPatientInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutPatientInput, AssignmentUncheckedCreateWithoutPatientInput>
  }

  export type AssignmentCreateManyPatientInputEnvelope = {
    data: AssignmentCreateManyPatientInput | AssignmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DiagnosisUpsertWithWhereUniqueWithoutPatientInput = {
    where: DiagnosisWhereUniqueInput
    update: XOR<DiagnosisUpdateWithoutPatientInput, DiagnosisUncheckedUpdateWithoutPatientInput>
    create: XOR<DiagnosisCreateWithoutPatientInput, DiagnosisUncheckedCreateWithoutPatientInput>
  }

  export type DiagnosisUpdateWithWhereUniqueWithoutPatientInput = {
    where: DiagnosisWhereUniqueInput
    data: XOR<DiagnosisUpdateWithoutPatientInput, DiagnosisUncheckedUpdateWithoutPatientInput>
  }

  export type DiagnosisUpdateManyWithWhereWithoutPatientInput = {
    where: DiagnosisScalarWhereInput
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyWithoutPatientInput>
  }

  export type DiagnosisScalarWhereInput = {
    AND?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
    OR?: DiagnosisScalarWhereInput[]
    NOT?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
    id?: IntFilter<"Diagnosis"> | number
    patientId?: IntFilter<"Diagnosis"> | number
    doctorId?: IntFilter<"Diagnosis"> | number
    facilityId?: IntFilter<"Diagnosis"> | number
    diagnosisText?: StringFilter<"Diagnosis"> | string
    treatmentPlan?: StringNullableFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeFilter<"Diagnosis"> | Date | string
  }

  export type LabResultUpsertWithWhereUniqueWithoutPatientInput = {
    where: LabResultWhereUniqueInput
    update: XOR<LabResultUpdateWithoutPatientInput, LabResultUncheckedUpdateWithoutPatientInput>
    create: XOR<LabResultCreateWithoutPatientInput, LabResultUncheckedCreateWithoutPatientInput>
  }

  export type LabResultUpdateWithWhereUniqueWithoutPatientInput = {
    where: LabResultWhereUniqueInput
    data: XOR<LabResultUpdateWithoutPatientInput, LabResultUncheckedUpdateWithoutPatientInput>
  }

  export type LabResultUpdateManyWithWhereWithoutPatientInput = {
    where: LabResultScalarWhereInput
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    facilityId?: IntFilter<"Appointment"> | number
    dateTime?: DateTimeFilter<"Appointment"> | Date | string
    reason?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
  }

  export type EmergencyInfoUpsertWithoutPatientInput = {
    update: XOR<EmergencyInfoUpdateWithoutPatientInput, EmergencyInfoUncheckedUpdateWithoutPatientInput>
    create: XOR<EmergencyInfoCreateWithoutPatientInput, EmergencyInfoUncheckedCreateWithoutPatientInput>
    where?: EmergencyInfoWhereInput
  }

  export type EmergencyInfoUpdateToOneWithWhereWithoutPatientInput = {
    where?: EmergencyInfoWhereInput
    data: XOR<EmergencyInfoUpdateWithoutPatientInput, EmergencyInfoUncheckedUpdateWithoutPatientInput>
  }

  export type EmergencyInfoUpdateWithoutPatientInput = {
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyInfoUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutPatientInput, AssignmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AssignmentCreateWithoutPatientInput, AssignmentUncheckedCreateWithoutPatientInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutPatientInput, AssignmentUncheckedUpdateWithoutPatientInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutPatientInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: IntFilter<"Assignment"> | number
    doctorId?: IntFilter<"Assignment"> | number
    patientId?: IntFilter<"Assignment"> | number
    assignedDate?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type UserCreateWithoutDoctorInput = {
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    labUploads?: LabResultCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    labUploads?: LabResultUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorFacilityCreateWithoutDoctorInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutDoctorFacilitiesInput
  }

  export type DoctorFacilityUncheckedCreateWithoutDoctorInput = {
    id?: number
    facilityId: number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
  }

  export type DoctorFacilityCreateOrConnectWithoutDoctorInput = {
    where: DoctorFacilityWhereUniqueInput
    create: XOR<DoctorFacilityCreateWithoutDoctorInput, DoctorFacilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorFacilityCreateManyDoctorInputEnvelope = {
    data: DoctorFacilityCreateManyDoctorInput | DoctorFacilityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosisCreateWithoutDoctorInput = {
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDiagnosesInput
    facility: FacilityCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisCreateOrConnectWithoutDoctorInput = {
    where: DiagnosisWhereUniqueInput
    create: XOR<DiagnosisCreateWithoutDoctorInput, DiagnosisUncheckedCreateWithoutDoctorInput>
  }

  export type DiagnosisCreateManyDoctorInputEnvelope = {
    data: DiagnosisCreateManyDoctorInput | DiagnosisCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    facility: FacilityCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    facilityId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutDoctorInput = {
    assignedDate?: Date | string
    patient: PatientCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    assignedDate?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutDoctorInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutDoctorInput, AssignmentUncheckedCreateWithoutDoctorInput>
  }

  export type AssignmentCreateManyDoctorInputEnvelope = {
    data: AssignmentCreateManyDoctorInput | AssignmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type LabResultCreateWithoutDoctorInput = {
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutLabResultsInput
    facility: FacilityCreateNestedOneWithoutLabResultsInput
    createdBy: UserCreateNestedOneWithoutLabUploadsInput
  }

  export type LabResultUncheckedCreateWithoutDoctorInput = {
    id?: number
    patientId: number
    facilityId: number
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultCreateOrConnectWithoutDoctorInput = {
    where: LabResultWhereUniqueInput
    create: XOR<LabResultCreateWithoutDoctorInput, LabResultUncheckedCreateWithoutDoctorInput>
  }

  export type LabResultCreateManyDoctorInputEnvelope = {
    data: LabResultCreateManyDoctorInput | LabResultCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DoctorFacilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorFacilityWhereUniqueInput
    update: XOR<DoctorFacilityUpdateWithoutDoctorInput, DoctorFacilityUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorFacilityCreateWithoutDoctorInput, DoctorFacilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorFacilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorFacilityWhereUniqueInput
    data: XOR<DoctorFacilityUpdateWithoutDoctorInput, DoctorFacilityUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorFacilityUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorFacilityScalarWhereInput
    data: XOR<DoctorFacilityUpdateManyMutationInput, DoctorFacilityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorFacilityScalarWhereInput = {
    AND?: DoctorFacilityScalarWhereInput | DoctorFacilityScalarWhereInput[]
    OR?: DoctorFacilityScalarWhereInput[]
    NOT?: DoctorFacilityScalarWhereInput | DoctorFacilityScalarWhereInput[]
    id?: IntFilter<"DoctorFacility"> | number
    doctorId?: IntFilter<"DoctorFacility"> | number
    facilityId?: IntFilter<"DoctorFacility"> | number
    schedule?: JsonNullableFilter<"DoctorFacility">
    status?: StringFilter<"DoctorFacility"> | string
    joinedAt?: DateTimeFilter<"DoctorFacility"> | Date | string
  }

  export type DiagnosisUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DiagnosisWhereUniqueInput
    update: XOR<DiagnosisUpdateWithoutDoctorInput, DiagnosisUncheckedUpdateWithoutDoctorInput>
    create: XOR<DiagnosisCreateWithoutDoctorInput, DiagnosisUncheckedCreateWithoutDoctorInput>
  }

  export type DiagnosisUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DiagnosisWhereUniqueInput
    data: XOR<DiagnosisUpdateWithoutDoctorInput, DiagnosisUncheckedUpdateWithoutDoctorInput>
  }

  export type DiagnosisUpdateManyWithWhereWithoutDoctorInput = {
    where: DiagnosisScalarWhereInput
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutDoctorInput, AssignmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AssignmentCreateWithoutDoctorInput, AssignmentUncheckedCreateWithoutDoctorInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutDoctorInput, AssignmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type LabResultUpsertWithWhereUniqueWithoutDoctorInput = {
    where: LabResultWhereUniqueInput
    update: XOR<LabResultUpdateWithoutDoctorInput, LabResultUncheckedUpdateWithoutDoctorInput>
    create: XOR<LabResultCreateWithoutDoctorInput, LabResultUncheckedCreateWithoutDoctorInput>
  }

  export type LabResultUpdateWithWhereUniqueWithoutDoctorInput = {
    where: LabResultWhereUniqueInput
    data: XOR<LabResultUpdateWithoutDoctorInput, LabResultUncheckedUpdateWithoutDoctorInput>
  }

  export type LabResultUpdateManyWithWhereWithoutDoctorInput = {
    where: LabResultScalarWhereInput
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorFacilityCreateWithoutFacilityInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutDoctorFacilitiesInput
  }

  export type DoctorFacilityUncheckedCreateWithoutFacilityInput = {
    id?: number
    doctorId: number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
  }

  export type DoctorFacilityCreateOrConnectWithoutFacilityInput = {
    where: DoctorFacilityWhereUniqueInput
    create: XOR<DoctorFacilityCreateWithoutFacilityInput, DoctorFacilityUncheckedCreateWithoutFacilityInput>
  }

  export type DoctorFacilityCreateManyFacilityInputEnvelope = {
    data: DoctorFacilityCreateManyFacilityInput | DoctorFacilityCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosisCreateWithoutFacilityInput = {
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDiagnosesInput
    doctor: DoctorCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateWithoutFacilityInput = {
    id?: number
    patientId: number
    doctorId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisCreateOrConnectWithoutFacilityInput = {
    where: DiagnosisWhereUniqueInput
    create: XOR<DiagnosisCreateWithoutFacilityInput, DiagnosisUncheckedCreateWithoutFacilityInput>
  }

  export type DiagnosisCreateManyFacilityInputEnvelope = {
    data: DiagnosisCreateManyFacilityInput | DiagnosisCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type LabResultCreateWithoutFacilityInput = {
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutLabResultsInput
    doctor?: DoctorCreateNestedOneWithoutLabResultsInput
    createdBy: UserCreateNestedOneWithoutLabUploadsInput
  }

  export type LabResultUncheckedCreateWithoutFacilityInput = {
    id?: number
    patientId: number
    doctorId?: number | null
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultCreateOrConnectWithoutFacilityInput = {
    where: LabResultWhereUniqueInput
    create: XOR<LabResultCreateWithoutFacilityInput, LabResultUncheckedCreateWithoutFacilityInput>
  }

  export type LabResultCreateManyFacilityInputEnvelope = {
    data: LabResultCreateManyFacilityInput | LabResultCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutFacilityInput = {
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutFacilityInput = {
    id?: number
    doctorId: number
    patientId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AppointmentCreateOrConnectWithoutFacilityInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutFacilityInput, AppointmentUncheckedCreateWithoutFacilityInput>
  }

  export type AppointmentCreateManyFacilityInputEnvelope = {
    data: AppointmentCreateManyFacilityInput | AppointmentCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutFacilityInput = {
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutFacilityInput = {
    id?: number
    userId: number
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
  }

  export type AdminCreateOrConnectWithoutFacilityInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutFacilityInput, AdminUncheckedCreateWithoutFacilityInput>
  }

  export type AdminCreateManyFacilityInputEnvelope = {
    data: AdminCreateManyFacilityInput | AdminCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type DoctorFacilityUpsertWithWhereUniqueWithoutFacilityInput = {
    where: DoctorFacilityWhereUniqueInput
    update: XOR<DoctorFacilityUpdateWithoutFacilityInput, DoctorFacilityUncheckedUpdateWithoutFacilityInput>
    create: XOR<DoctorFacilityCreateWithoutFacilityInput, DoctorFacilityUncheckedCreateWithoutFacilityInput>
  }

  export type DoctorFacilityUpdateWithWhereUniqueWithoutFacilityInput = {
    where: DoctorFacilityWhereUniqueInput
    data: XOR<DoctorFacilityUpdateWithoutFacilityInput, DoctorFacilityUncheckedUpdateWithoutFacilityInput>
  }

  export type DoctorFacilityUpdateManyWithWhereWithoutFacilityInput = {
    where: DoctorFacilityScalarWhereInput
    data: XOR<DoctorFacilityUpdateManyMutationInput, DoctorFacilityUncheckedUpdateManyWithoutFacilityInput>
  }

  export type DiagnosisUpsertWithWhereUniqueWithoutFacilityInput = {
    where: DiagnosisWhereUniqueInput
    update: XOR<DiagnosisUpdateWithoutFacilityInput, DiagnosisUncheckedUpdateWithoutFacilityInput>
    create: XOR<DiagnosisCreateWithoutFacilityInput, DiagnosisUncheckedCreateWithoutFacilityInput>
  }

  export type DiagnosisUpdateWithWhereUniqueWithoutFacilityInput = {
    where: DiagnosisWhereUniqueInput
    data: XOR<DiagnosisUpdateWithoutFacilityInput, DiagnosisUncheckedUpdateWithoutFacilityInput>
  }

  export type DiagnosisUpdateManyWithWhereWithoutFacilityInput = {
    where: DiagnosisScalarWhereInput
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyWithoutFacilityInput>
  }

  export type LabResultUpsertWithWhereUniqueWithoutFacilityInput = {
    where: LabResultWhereUniqueInput
    update: XOR<LabResultUpdateWithoutFacilityInput, LabResultUncheckedUpdateWithoutFacilityInput>
    create: XOR<LabResultCreateWithoutFacilityInput, LabResultUncheckedCreateWithoutFacilityInput>
  }

  export type LabResultUpdateWithWhereUniqueWithoutFacilityInput = {
    where: LabResultWhereUniqueInput
    data: XOR<LabResultUpdateWithoutFacilityInput, LabResultUncheckedUpdateWithoutFacilityInput>
  }

  export type LabResultUpdateManyWithWhereWithoutFacilityInput = {
    where: LabResultScalarWhereInput
    data: XOR<LabResultUpdateManyMutationInput, LabResultUncheckedUpdateManyWithoutFacilityInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutFacilityInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutFacilityInput, AppointmentUncheckedUpdateWithoutFacilityInput>
    create: XOR<AppointmentCreateWithoutFacilityInput, AppointmentUncheckedCreateWithoutFacilityInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutFacilityInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutFacilityInput, AppointmentUncheckedUpdateWithoutFacilityInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutFacilityInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutFacilityInput>
  }

  export type AdminUpsertWithWhereUniqueWithoutFacilityInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutFacilityInput, AdminUncheckedUpdateWithoutFacilityInput>
    create: XOR<AdminCreateWithoutFacilityInput, AdminUncheckedCreateWithoutFacilityInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutFacilityInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutFacilityInput, AdminUncheckedUpdateWithoutFacilityInput>
  }

  export type AdminUpdateManyWithWhereWithoutFacilityInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutFacilityInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: IntFilter<"Admin"> | number
    userId?: IntFilter<"Admin"> | number
    facilityId?: IntFilter<"Admin"> | number
    adminLevel?: EnumAdminLevelNullableFilter<"Admin"> | $Enums.AdminLevel | null
    department?: StringNullableFilter<"Admin"> | string | null
  }

  export type DoctorCreateWithoutDoctorFacilitiesInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentCreateNestedManyWithoutDoctorInput
    labResults?: LabResultCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorFacilitiesInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutDoctorInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDoctorFacilitiesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorFacilitiesInput, DoctorUncheckedCreateWithoutDoctorFacilitiesInput>
  }

  export type FacilityCreateWithoutDoctorFacilitiesInput = {
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    diagnoses?: DiagnosisCreateNestedManyWithoutFacilityInput
    labResults?: LabResultCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentCreateNestedManyWithoutFacilityInput
    admins?: AdminCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutDoctorFacilitiesInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutFacilityInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFacilityInput
    admins?: AdminUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutDoctorFacilitiesInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutDoctorFacilitiesInput, FacilityUncheckedCreateWithoutDoctorFacilitiesInput>
  }

  export type DoctorUpsertWithoutDoctorFacilitiesInput = {
    update: XOR<DoctorUpdateWithoutDoctorFacilitiesInput, DoctorUncheckedUpdateWithoutDoctorFacilitiesInput>
    create: XOR<DoctorCreateWithoutDoctorFacilitiesInput, DoctorUncheckedCreateWithoutDoctorFacilitiesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorFacilitiesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorFacilitiesInput, DoctorUncheckedUpdateWithoutDoctorFacilitiesInput>
  }

  export type DoctorUpdateWithoutDoctorFacilitiesInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorFacilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type FacilityUpsertWithoutDoctorFacilitiesInput = {
    update: XOR<FacilityUpdateWithoutDoctorFacilitiesInput, FacilityUncheckedUpdateWithoutDoctorFacilitiesInput>
    create: XOR<FacilityCreateWithoutDoctorFacilitiesInput, FacilityUncheckedCreateWithoutDoctorFacilitiesInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutDoctorFacilitiesInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutDoctorFacilitiesInput, FacilityUncheckedUpdateWithoutDoctorFacilitiesInput>
  }

  export type FacilityUpdateWithoutDoctorFacilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUpdateManyWithoutFacilityNestedInput
    admins?: AdminUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutDoctorFacilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFacilityNestedInput
    admins?: AdminUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type PatientCreateWithoutDiagnosesInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    labResults?: LabResultCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoCreateNestedOneWithoutPatientInput
    assignments?: AssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDiagnosesInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    labResults?: LabResultUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDiagnosesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDiagnosesInput, PatientUncheckedCreateWithoutDiagnosesInput>
  }

  export type DoctorCreateWithoutDiagnosesInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentCreateNestedManyWithoutDoctorInput
    labResults?: LabResultCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDiagnosesInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutDoctorInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDiagnosesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDiagnosesInput, DoctorUncheckedCreateWithoutDiagnosesInput>
  }

  export type FacilityCreateWithoutDiagnosesInput = {
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutFacilityInput
    labResults?: LabResultCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentCreateNestedManyWithoutFacilityInput
    admins?: AdminCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutDiagnosesInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutFacilityInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFacilityInput
    admins?: AdminUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutDiagnosesInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutDiagnosesInput, FacilityUncheckedCreateWithoutDiagnosesInput>
  }

  export type PatientUpsertWithoutDiagnosesInput = {
    update: XOR<PatientUpdateWithoutDiagnosesInput, PatientUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<PatientCreateWithoutDiagnosesInput, PatientUncheckedCreateWithoutDiagnosesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutDiagnosesInput, PatientUncheckedUpdateWithoutDiagnosesInput>
  }

  export type PatientUpdateWithoutDiagnosesInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    labResults?: LabResultUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDiagnosesInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labResults?: LabResultUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutDiagnosesInput = {
    update: XOR<DoctorUpdateWithoutDiagnosesInput, DoctorUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<DoctorCreateWithoutDiagnosesInput, DoctorUncheckedCreateWithoutDiagnosesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDiagnosesInput, DoctorUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DoctorUpdateWithoutDiagnosesInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorFacilities?: DoctorFacilityUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDiagnosesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type FacilityUpsertWithoutDiagnosesInput = {
    update: XOR<FacilityUpdateWithoutDiagnosesInput, FacilityUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<FacilityCreateWithoutDiagnosesInput, FacilityUncheckedCreateWithoutDiagnosesInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutDiagnosesInput, FacilityUncheckedUpdateWithoutDiagnosesInput>
  }

  export type FacilityUpdateWithoutDiagnosesInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUpdateManyWithoutFacilityNestedInput
    admins?: AdminUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutDiagnosesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFacilityNestedInput
    admins?: AdminUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type PatientCreateWithoutLabResultsInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    diagnoses?: DiagnosisCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoCreateNestedOneWithoutPatientInput
    assignments?: AssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLabResultsInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLabResultsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLabResultsInput, PatientUncheckedCreateWithoutLabResultsInput>
  }

  export type DoctorCreateWithoutLabResultsInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutLabResultsInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutLabResultsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutLabResultsInput, DoctorUncheckedCreateWithoutLabResultsInput>
  }

  export type FacilityCreateWithoutLabResultsInput = {
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentCreateNestedManyWithoutFacilityInput
    admins?: AdminCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutLabResultsInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFacilityInput
    admins?: AdminUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutLabResultsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutLabResultsInput, FacilityUncheckedCreateWithoutLabResultsInput>
  }

  export type UserCreateWithoutLabUploadsInput = {
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLabUploadsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLabUploadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLabUploadsInput, UserUncheckedCreateWithoutLabUploadsInput>
  }

  export type PatientUpsertWithoutLabResultsInput = {
    update: XOR<PatientUpdateWithoutLabResultsInput, PatientUncheckedUpdateWithoutLabResultsInput>
    create: XOR<PatientCreateWithoutLabResultsInput, PatientUncheckedCreateWithoutLabResultsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutLabResultsInput, PatientUncheckedUpdateWithoutLabResultsInput>
  }

  export type PatientUpdateWithoutLabResultsInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLabResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutLabResultsInput = {
    update: XOR<DoctorUpdateWithoutLabResultsInput, DoctorUncheckedUpdateWithoutLabResultsInput>
    create: XOR<DoctorCreateWithoutLabResultsInput, DoctorUncheckedCreateWithoutLabResultsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutLabResultsInput, DoctorUncheckedUpdateWithoutLabResultsInput>
  }

  export type DoctorUpdateWithoutLabResultsInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorFacilities?: DoctorFacilityUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutLabResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type FacilityUpsertWithoutLabResultsInput = {
    update: XOR<FacilityUpdateWithoutLabResultsInput, FacilityUncheckedUpdateWithoutLabResultsInput>
    create: XOR<FacilityCreateWithoutLabResultsInput, FacilityUncheckedCreateWithoutLabResultsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutLabResultsInput, FacilityUncheckedUpdateWithoutLabResultsInput>
  }

  export type FacilityUpdateWithoutLabResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUpdateManyWithoutFacilityNestedInput
    admins?: AdminUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutLabResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFacilityNestedInput
    admins?: AdminUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type UserUpsertWithoutLabUploadsInput = {
    update: XOR<UserUpdateWithoutLabUploadsInput, UserUncheckedUpdateWithoutLabUploadsInput>
    create: XOR<UserCreateWithoutLabUploadsInput, UserUncheckedCreateWithoutLabUploadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLabUploadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLabUploadsInput, UserUncheckedUpdateWithoutLabUploadsInput>
  }

  export type UserUpdateWithoutLabUploadsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLabUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PatientCreateWithoutAppointmentsInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    diagnoses?: DiagnosisCreateNestedManyWithoutPatientInput
    labResults?: LabResultCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoCreateNestedOneWithoutPatientInput
    assignments?: AssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutPatientInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentCreateNestedManyWithoutDoctorInput
    labResults?: LabResultCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDoctorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutDoctorInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type FacilityCreateWithoutAppointmentsInput = {
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisCreateNestedManyWithoutFacilityInput
    labResults?: LabResultCreateNestedManyWithoutFacilityInput
    admins?: AdminCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutFacilityInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutFacilityInput
    admins?: AdminUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutAppointmentsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutAppointmentsInput, FacilityUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorFacilities?: DoctorFacilityUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type FacilityUpsertWithoutAppointmentsInput = {
    update: XOR<FacilityUpdateWithoutAppointmentsInput, FacilityUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<FacilityCreateWithoutAppointmentsInput, FacilityUncheckedCreateWithoutAppointmentsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutAppointmentsInput, FacilityUncheckedUpdateWithoutAppointmentsInput>
  }

  export type FacilityUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUpdateManyWithoutFacilityNestedInput
    admins?: AdminUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutFacilityNestedInput
    admins?: AdminUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type PatientCreateWithoutEmergencyInfoInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    diagnoses?: DiagnosisCreateNestedManyWithoutPatientInput
    labResults?: LabResultCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    assignments?: AssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutEmergencyInfoInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutPatientInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutEmergencyInfoInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutEmergencyInfoInput, PatientUncheckedCreateWithoutEmergencyInfoInput>
  }

  export type PatientUpsertWithoutEmergencyInfoInput = {
    update: XOR<PatientUpdateWithoutEmergencyInfoInput, PatientUncheckedUpdateWithoutEmergencyInfoInput>
    create: XOR<PatientCreateWithoutEmergencyInfoInput, PatientUncheckedCreateWithoutEmergencyInfoInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutEmergencyInfoInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutEmergencyInfoInput, PatientUncheckedUpdateWithoutEmergencyInfoInput>
  }

  export type PatientUpdateWithoutEmergencyInfoInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    assignments?: AssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutEmergencyInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorCreateWithoutAssignmentsInput = {
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    labResults?: LabResultCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    userId: number
    specialization?: string | null
    licenseNo?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutDoctorInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAssignmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAssignmentsInput, DoctorUncheckedCreateWithoutAssignmentsInput>
  }

  export type PatientCreateWithoutAssignmentsInput = {
    upi?: string | null
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    diagnoses?: DiagnosisCreateNestedManyWithoutPatientInput
    labResults?: LabResultCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    upi?: string | null
    userId: number
    dob?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    qrToken?: string | null
    insuranceStatus?: $Enums.InsuranceStatus
    createdAt?: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutPatientInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    emergencyInfo?: EmergencyInfoUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAssignmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAssignmentsInput, PatientUncheckedCreateWithoutAssignmentsInput>
  }

  export type DoctorUpsertWithoutAssignmentsInput = {
    update: XOR<DoctorUpdateWithoutAssignmentsInput, DoctorUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<DoctorCreateWithoutAssignmentsInput, DoctorUncheckedCreateWithoutAssignmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAssignmentsInput, DoctorUncheckedUpdateWithoutAssignmentsInput>
  }

  export type DoctorUpdateWithoutAssignmentsInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorFacilities?: DoctorFacilityUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutDoctorNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutAssignmentsInput = {
    update: XOR<PatientUpdateWithoutAssignmentsInput, PatientUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<PatientCreateWithoutAssignmentsInput, PatientUncheckedCreateWithoutAssignmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAssignmentsInput, PatientUncheckedUpdateWithoutAssignmentsInput>
  }

  export type PatientUpdateWithoutAssignmentsInput = {
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    upi?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    qrToken?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: EnumInsuranceStatusFieldUpdateOperationsInput | $Enums.InsuranceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutPatientNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyInfo?: EmergencyInfoUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    labUploads?: LabResultCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    phone?: string | null
    role: $Enums.UserRole
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    labUploads?: LabResultUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type FacilityCreateWithoutAdminsInput = {
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisCreateNestedManyWithoutFacilityInput
    labResults?: LabResultCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutAdminsInput = {
    id?: number
    name: string
    facilityType: $Enums.FacilityType
    region?: string | null
    locationAddress?: string | null
    contactPhone?: string | null
    licenseNumber?: string | null
    createdAt?: Date | string
    doctorFacilities?: DoctorFacilityUncheckedCreateNestedManyWithoutFacilityInput
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutFacilityInput
    labResults?: LabResultUncheckedCreateNestedManyWithoutFacilityInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutAdminsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutAdminsInput, FacilityUncheckedCreateWithoutAdminsInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    labUploads?: LabResultUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type FacilityUpsertWithoutAdminsInput = {
    update: XOR<FacilityUpdateWithoutAdminsInput, FacilityUncheckedUpdateWithoutAdminsInput>
    create: XOR<FacilityCreateWithoutAdminsInput, FacilityUncheckedCreateWithoutAdminsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutAdminsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutAdminsInput, FacilityUncheckedUpdateWithoutAdminsInput>
  }

  export type FacilityUpdateWithoutAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    facilityType?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    region?: NullableStringFieldUpdateOperationsInput | string | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorFacilities?: DoctorFacilityUncheckedUpdateManyWithoutFacilityNestedInput
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutFacilityNestedInput
    labResults?: LabResultUncheckedUpdateManyWithoutFacilityNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type LabResultCreateManyCreatedByInput = {
    id?: number
    patientId: number
    doctorId?: number | null
    facilityId: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type LabResultUpdateWithoutCreatedByInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutLabResultsNestedInput
    doctor?: DoctorUpdateOneWithoutLabResultsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    facilityId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    facilityId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateManyPatientInput = {
    id?: number
    doctorId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type LabResultCreateManyPatientInput = {
    id?: number
    doctorId?: number | null
    facilityId: number
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    doctorId: number
    facilityId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AssignmentCreateManyPatientInput = {
    id?: number
    doctorId: number
    assignedDate?: Date | string
  }

  export type DiagnosisUpdateWithoutPatientInput = {
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutDiagnosesNestedInput
    facility?: FacilityUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUpdateWithoutPatientInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutLabResultsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutLabResultsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutLabUploadsNestedInput
  }

  export type LabResultUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    facilityId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    facilityId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AssignmentUpdateWithoutPatientInput = {
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityCreateManyDoctorInput = {
    id?: number
    facilityId: number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
  }

  export type DiagnosisCreateManyDoctorInput = {
    id?: number
    patientId: number
    facilityId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    patientId: number
    facilityId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AssignmentCreateManyDoctorInput = {
    id?: number
    patientId: number
    assignedDate?: Date | string
  }

  export type LabResultCreateManyDoctorInput = {
    id?: number
    patientId: number
    facilityId: number
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type DoctorFacilityUpdateWithoutDoctorInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutDoctorFacilitiesNestedInput
  }

  export type DoctorFacilityUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUpdateWithoutDoctorInput = {
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDiagnosesNestedInput
    facility?: FacilityUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AssignmentUpdateWithoutDoctorInput = {
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    assignedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUpdateWithoutDoctorInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutLabResultsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutLabResultsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutLabUploadsNestedInput
  }

  export type LabResultUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityCreateManyFacilityInput = {
    id?: number
    doctorId: number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    joinedAt?: Date | string
  }

  export type DiagnosisCreateManyFacilityInput = {
    id?: number
    patientId: number
    doctorId: number
    diagnosisText: string
    treatmentPlan?: string | null
    createdAt?: Date | string
  }

  export type LabResultCreateManyFacilityInput = {
    id?: number
    patientId: number
    doctorId?: number | null
    createdById: number
    filePath: string
    resultType?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateManyFacilityInput = {
    id?: number
    doctorId: number
    patientId: number
    dateTime: Date | string
    reason?: string | null
    status?: $Enums.AppointmentStatus
  }

  export type AdminCreateManyFacilityInput = {
    id?: number
    userId: number
    adminLevel?: $Enums.AdminLevel | null
    department?: string | null
  }

  export type DoctorFacilityUpdateWithoutFacilityInput = {
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutDoctorFacilitiesNestedInput
  }

  export type DoctorFacilityUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorFacilityUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    schedule?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUpdateWithoutFacilityInput = {
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDiagnosesNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    diagnosisText?: StringFieldUpdateOperationsInput | string
    treatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUpdateWithoutFacilityInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutLabResultsNestedInput
    doctor?: DoctorUpdateOneWithoutLabResultsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutLabUploadsNestedInput
  }

  export type LabResultUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    doctorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    resultType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutFacilityInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AppointmentUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
  }

  export type AdminUpdateWithoutFacilityInput = {
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adminLevel?: NullableEnumAdminLevelFieldUpdateOperationsInput | $Enums.AdminLevel | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
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