document.addEventListener("DOMContentLoaded", function () {
    // Detect the screen size and apply the change for mobile devices
    if (window.innerWidth <= 900) {
        const courseworkContainer = document.getElementById("coursework");
        const courseworkColumn1 = document.querySelector(".coursework-column:first-child");
        const courseworkColumn2 = document.querySelector(".coursework-column:last-child");

        // Create a new div to hold the combined content
        const combinedCourseworkDiv = document.createElement("div");

        // Remove margin from the columns
        courseworkColumn1.style.margin = "0";
        courseworkColumn2.style.margin = "0";

        // Append the content of the two columns to the new div
        combinedCourseworkDiv.appendChild(courseworkColumn1.cloneNode(true));
        combinedCourseworkDiv.appendChild(courseworkColumn2.cloneNode(true));

        // Remove the original coursework divs
        courseworkContainer.removeChild(courseworkColumn1);
        courseworkContainer.removeChild(courseworkColumn2);

        // Append the new div to the coursework section
        courseworkContainer.appendChild(combinedCourseworkDiv);
    }
});
