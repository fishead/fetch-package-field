#!/usr/bin/env node

(function () {
  let [o1, ...fields] = process.argv.slice(2);
  if ((o1 != "-n" && !o1) || (o1 == "-n" && !fields.length)) {
    console.warn(`argument "field" is required`);
    process.exit(1);
    return;
  }

  if (o1 != "-n") {
    fields = [o1, ...fields];
  }

  const pkg = require(require.resolve("./package.json", {
    paths: [process.cwd()],
  }));
  const value = fields.reduce((p, f) => p[f], pkg);
  if (!value) {
    console.warn(`field: ${fields.join(" ")} does not exists`);
    process.exit(1);
    return;
  }

  process.stdout.write(String(value));
  const dontPrintNewline = o1 === "-n";
  process.stdout.end(dontPrintNewline ? "" : require("os").EOL);
})();
