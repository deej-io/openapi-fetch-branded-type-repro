import openapiTS, { astToString } from "openapi-typescript";
import ts from "typescript";
import { writeFileSync } from "node:fs";

// Branded primitive types — injected via transform hook below.
// Prepended to the generated output so the type references resolve.
const brandPreamble = `
// Branded primitive types — injected via transform hook in generate.ts
export type UserId = string & { __brand: "UserId" };
export type UserScore = number & { __brand: "UserScore" };
export type UserTag = string & { __brand: "UserTag" };
`;

const schema = new URL("./openapi.yaml", import.meta.url);

const ast = await openapiTS(schema, {
  readWriteMarkers: true,

  // Called for every SchemaObject. When x-brand is present, return a
  // reference to the named branded type instead of the default primitive.
  transform(schemaObject) {
    const brand = (schemaObject as Record<string, unknown>)["x-brand"];
    if (typeof brand === "string") {
      return ts.factory.createTypeReferenceNode(brand);
    }
  },
});

const output = brandPreamble + "\n" + astToString(ast);
writeFileSync("./schema.d.ts", output);
console.log("Generated schema.d.ts");
