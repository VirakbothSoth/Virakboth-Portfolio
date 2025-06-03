import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "react/no-unescaped-entities": "off",     // turns off the apostrophe warning
      "@next/next/no-img-element": "off",       // allows <img> instead of <Image>
    },
  },
];