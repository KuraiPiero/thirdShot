import app from "./app";
import db from "./models/usuario"
const PORT = process.env.PORT || 3300;

async function main() {
    db.sequelize.sync().then(function() {
        app.listen(PORT, function() {
            console.log(
                "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
                PORT,
                PORT
            );
        });
    });
}

main();