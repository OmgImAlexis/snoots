import type { Data, RedditObject } from "./types";
import { InvalidKindError } from "./errors";
import camelCase from "camelcase";

export function camelCaseKeys<T>(obj: Data): T {
  const out: Data = {};
  for (const key in obj) {
    out[camelCase(key)] = obj[key];
  }
  return out as T;
}

export function group<T>(arr: T[], size: number): T[][] {
  const groups: T[][] = [];
  const count = Math.ceil(arr.length / size);
  for (let i = 0; i < count; ++i) {
    groups.push(arr.slice(i * size, (i + 1) * size));
  }

  return groups;
}

export function assertKind(kind: string, obj: RedditObject) {
  if (obj.kind !== kind) throw new InvalidKindError(kind, obj.kind);
}
