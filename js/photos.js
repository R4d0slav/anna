const modal = document.getElementById("jigsawModal");
const closeBtn = document.getElementById("closePuzzle");

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.classList.remove("puzzle-active");
    // Stop the puzzle game
    if (typeof events !== 'undefined') {
        events.push({ event: "stop" });
    }
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("puzzle-active");
        // Stop the puzzle game
        if (typeof events !== 'undefined') {
            events.push({ event: "stop" });
        }
    }
};


// =========================
// IMAGE CLICK → START PUZZLE
// =========================

document.querySelectorAll(".photo-frame img").forEach(img => {

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {

        if (typeof puzzle === "undefined") {
            console.error("Puzzle not loaded.");
            return;
        }

        // 1️⃣ Show modal FIRST
        modal.style.display = "block";
        document.body.classList.add("puzzle-active");

        // 2️⃣ Force browser to calculate layout
        document.getElementById("forPuzzle").offsetHeight;

        // 3️⃣ Reset state
        puzzle.imageLoaded = false;

        // 4️⃣ Wait for image to load before triggering state machine
        const startPuzzleAfterLoad = function () {

            const pieces = Number(document.getElementById("nbpieces").value) || 24;

            events.push({
                event: "nbpieces",
                nbpieces: pieces
            });

            document.getElementById("menu").classList.remove("open");

            puzzle.srcImage.removeEventListener("load", startPuzzleAfterLoad);
        };

        puzzle.srcImage.addEventListener("load", startPuzzleAfterLoad);

        // 5️⃣ Load clicked image
        if (typeof loadRemoteFile === "function") {
            loadRemoteFile(img.src);
        } else {
            puzzle.srcImage.src = img.src;
        }
    });
});




document.getElementById("menuToggle").addEventListener("click", function(e) {
    e.stopPropagation(); // prevent any accidental bubbling
    document.getElementById("menu").classList.toggle("open");
});



