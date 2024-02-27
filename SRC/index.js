import app from "./app.js";
import db from "./db.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});