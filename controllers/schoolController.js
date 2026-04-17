const db = require("../config/db");
const getDistance = require("../utils/distance");

// ➤ Add School API
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query =
        "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: "School added successfully" });
    });
};

// ➤ List Schools API (sorted by distance)
exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Latitude & Longitude required" });
    }

    db.query("SELECT * FROM schools", (err, results) => {
        if (err) return res.status(500).json({ error: err });

        const sorted = results
            .map((school) => {
                const distance = getDistance(
                    latitude,
                    longitude,
                    school.latitude,
                    school.longitude
                );
                return { ...school, distance };
            })
            .sort((a, b) => a.distance - b.distance);

        res.json(sorted);
    });
};