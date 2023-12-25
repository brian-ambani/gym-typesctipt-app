import module from "module";
const require = module.require;
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
