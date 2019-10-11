import app from "./app";

const PORT = process.env.PORT || 3300;

async function main() {
  await app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
}

main();
