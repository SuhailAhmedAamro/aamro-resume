var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var getElementValue = function (id) { return document.getElementById(id).value; };
    var getElementFile = function (id) { var _a, _b; return (_b = (_a = document.getElementById(id).files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null; };
    var name = getElementValue('name');
    var fatherName = getElementValue('fatherName');
    var cast = getElementValue('cast');
    var cnic = getElementValue('cnic');
    var dob = getElementValue('dob');
    var email = getElementValue('email');
    var phone = getElementValue('phone');
    var address = getElementValue('address');
    var matricDegree = getElementValue('matricDegree');
    var matricFromYear = getElementValue('matricFromYear');
    var matricToYear = getElementValue('matricToYear');
    var intermediateDegree = getElementValue('intermediateDegree');
    var intermediateFromYear = getElementValue('intermediateFromYear');
    var intermediateToYear = getElementValue('intermediateToYear');
    var bachelorDegree = getElementValue('bachelorDegree');
    var bachelorFromYear = getElementValue('bachelorFromYear');
    var bachelorToYear = getElementValue('bachelorToYear');
    var currentlyEnrolled = getElementValue('currentlyEnrolled');
    var skills = getElementValue('skills');
    var experience = getElementValue('experience');
    var profilePic = getElementFile('profilePic');
    // Set preview text content
    var setTextContent = function (id, content) {
        var element = document.getElementById(id);
        if (element)
            element.textContent = content;
    };
    setTextContent('previewName', name);
    setTextContent('previewFatherName', fatherName);
    setTextContent('previewCast', cast);
    setTextContent('previewCnic', cnic);
    setTextContent('previewDob', dob);
    setTextContent('previewEmail', email);
    setTextContent('previewPhone', phone);
    setTextContent('previewAddress', address);
    setTextContent('previewMatricDegree', matricDegree);
    setTextContent('previewMatricFromYear', matricFromYear);
    setTextContent('previewMatricToYear', matricToYear);
    setTextContent('previewIntermediateDegree', intermediateDegree);
    setTextContent('previewIntermediateFromYear', intermediateFromYear);
    setTextContent('previewIntermediateToYear', intermediateToYear);
    setTextContent('previewBachelorDegree', bachelorDegree);
    setTextContent('previewBachelorFromYear', bachelorFromYear);
    setTextContent('previewBachelorToYear', bachelorToYear);
    setTextContent('previewCurrentlyEnrolled', currentlyEnrolled);
    setTextContent('previewSkills', skills);
    setTextContent('previewExperience', experience);
    if (profilePic) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var previewProfilePic = document.getElementById('previewProfilePic');
            if (previewProfilePic)
                previewProfilePic.src = reader_1.result;
        };
        reader_1.readAsDataURL(profilePic);
    }
    var resumePreview = document.getElementById('resumePreview');
    if (resumePreview)
        resumePreview.style.display = 'block';
});
function downloadResume() {
    var doc = new PDF();
    var getTextContent = function (id) { var _a; return (((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.textContent) || ''); };
    doc.text("Resume", 20, 20);
    doc.text("Name: " + getTextContent('previewName'), 20, 30);
    doc.text("Father's Name: " + getTextContent('previewFatherName'), 20, 40);
    doc.text("Cast: " + getTextContent('previewCast'), 20, 50);
    doc.text("CNIC: " + getTextContent('previewCnic'), 20, 60);
    doc.text("DOB: " + getTextContent('previewDob'), 20, 70);
    doc.text("Email: " + getTextContent('previewEmail'), 20, 80);
    doc.text("Phone: " + getTextContent('previewPhone'), 20, 90);
    doc.text("Address: " + getTextContent('previewAddress'), 20, 100);
    doc.text("Matriculation: " + getTextContent('previewMatricDegree') + " from " + getTextContent('previewMatricFromYear') + " to " + getTextContent('previewMatricToYear'), 20, 110);
    doc.text("Intermediate: " + getTextContent('previewIntermediateDegree') + " from " + getTextContent('previewIntermediateFromYear') + " to " + getTextContent('previewIntermediateToYear'), 20, 120);
    doc.text("Bachelor's Degree: " + getTextContent('previewBachelorDegree') + " from " + getTextContent('previewBachelorFromYear') + " to " + getTextContent('previewBachelorToYear'), 20, 130);
    doc.text("Currently Enrolled: " + getTextContent('previewCurrentlyEnrolled'), 20, 140);
    doc.text("Skills: " + getTextContent('previewSkills'), 20, 150);
    doc.text("Work Experience: " + getTextContent('previewExperience'), 20, 160);
    doc.save('resume.pdf');
}
