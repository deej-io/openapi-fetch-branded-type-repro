import type { Readable, Writable, components, UserId, UserScore, UserTag } from "./schema.d.ts";

type User = components["schemas"]["User"];

type ReadableUser = Readable<User>;
declare const user: ReadableUser;

const id: UserId = user.id;
// ^^^ repro.ts(15,7): error TS2322: Type '{ readonly [x: number]: string; toString: {}; charAt: {}; charCodeAt: {}; concat: {}; indexOf: {}; lastIndexOf: {}; localeCompare: {}; match: {}; replace: {}; search: {}; slice: {}; split: {}; substring: {}; toLowerCase: {}; ... 38 more ...; __brand: "UserId"; }' is not assignable to type 'UserId'.
// Type '{ readonly [x: number]: string; toString: {}; charAt: {}; charCodeAt: {}; concat: {}; indexOf: {}; lastIndexOf: {}; localeCompare: {}; match: {}; replace: {}; search: {}; slice: {}; split: {}; substring: {}; toLowerCase: {}; ... 38 more ...; __brand: "UserId"; }' is not assignable to type 'string'.

const score: UserScore = user.score!;
// ^^^ repro.ts(18,7): error TS2322: Type '{ toString: {}; toFixed: {}; toExponential: {}; toPrecision: {}; valueOf: {}; toLocaleString: {}; __brand: "UserScore"; }' is not assignable to type 'UserScore'. Type '{ toString: {}; toFixed: {}; toExponential: {}; toPrecision: {}; valueOf: {}; toLocaleString: {}; __brand: "UserScore"; }' is not assignable to type 'number'.

type WritableUser = Writable<User>;
declare const writableUser: WritableUser;

const tag: UserTag = writableUser.tag!;
// ^^^ repro.ts(29,7): error TS2322: Type '{ readonly [x: number]: string; toString: {} & {}; charAt: {} & {}; charCodeAt: {} & {}; concat: {} & {}; indexOf: {} & {}; lastIndexOf: {} & {}; localeCompare: {} & {}; match: {} & {}; replace: {} & {}; ... 43 more ...; __brand: "UserTag"; } & {}' is not assignable to type 'UserTag'.
// Type '{ readonly [x: number]: string; toString: {} & {}; charAt: {} & {}; charCodeAt: {} & {}; concat: {} & { }; indexOf: { } & {}; lastIndexOf: { } & {}; localeCompare: { } & {}; match: { } & {}; replace: { } & {}; ... 43 more ...; __brand: "UserTag"; } & {}' is not assignable to type 'string'.`

