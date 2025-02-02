const { execSync } = require("child_process");

const arg = process.argv[2]; // Get the first argument after `npm run`
if (!arg) {
    console.error("Error: Migration name is required.");
    process.exit(1);
}

const command = `npx typeorm migration:create ./migrations/${arg}`;
console.log(`Running: ${command}`);

execSync(command, { stdio: "inherit", shell: true });