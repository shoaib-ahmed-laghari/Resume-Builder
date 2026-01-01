const form = document.getElementById("form");
const resume = document.getElementById("resume");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("rname").innerText =
        document.getElementById("name").value;

    document.getElementById("rcontact").innerText =
        document.getElementById("email").value + " | " +
        document.getElementById("phone").value;

    document.getElementById("reducation").innerText =
        document.getElementById("education").value;

    document.getElementById("rskills").innerText =
        document.getElementById("skills").value;

    document.getElementById("rexperience").innerText =
        document.getElementById("experience").value;

    const file = document.getElementById("photo").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById("img").src = reader.result;
        }
        reader.readAsDataURL(file);
    }

    resume.style.display = "block";
});

document.getElementById("download").addEventListener("click", function () {
    html2canvas(resume).then(canvas => {
        const pdf = new jspdf.jsPDF("p", "mm", "a4");
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
        pdf.save("resume.pdf");
    });
});