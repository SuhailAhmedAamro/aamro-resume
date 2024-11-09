document.getElementById('resumeForm')?.addEventListener('submit', function(e: Event) {
    e.preventDefault();

    const getElementValue = (id: string): string => (document.getElementById(id) as HTMLInputElement).value;
    const getElementFile = (id: string): File | null => (document.getElementById(id) as HTMLInputElement).files?.[0] ?? null;

    const name = getElementValue('name');
    const fatherName = getElementValue('fatherName');
    const cast = getElementValue('cast');
    const cnic = getElementValue('cnic');
    const dob = getElementValue('dob');
    const email = getElementValue('email');
    const phone = getElementValue('phone');
    const address = getElementValue('address');
    const matricDegree = getElementValue('matricDegree');
    const matricFromYear = getElementValue('matricFromYear');
    const matricToYear = getElementValue('matricToYear');
    const intermediateDegree = getElementValue('intermediateDegree');
    const intermediateFromYear = getElementValue('intermediateFromYear');
    const intermediateToYear = getElementValue('intermediateToYear');
    const bachelorDegree = getElementValue('bachelorDegree');
    const bachelorFromYear = getElementValue('bachelorFromYear');
    const bachelorToYear = getElementValue('bachelorToYear');
    const currentlyEnrolled = getElementValue('currentlyEnrolled');
    const skills = getElementValue('skills');
    const experience = getElementValue('experience');
    const profilePic = getElementFile('profilePic');

    // Set preview text content
    const setTextContent = (id: string, content: string) => {
        const element = document.getElementById(id);
        if (element) element.textContent = content;
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
        const reader = new FileReader();
        reader.onload = function() {
            const previewProfilePic = document.getElementById('previewProfilePic') as HTMLImageElement;
            if (previewProfilePic) previewProfilePic.src = reader.result as string;
        };
        reader.readAsDataURL(profilePic);
    }

    const resumePreview = document.getElementById('resumePreview');
    if (resumePreview) resumePreview.style.display = 'block';
});

function downloadResume() {
    const doc = new PDF();
    const getTextContent = (id: string): string => (document.getElementById(id)?.textContent || '');

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
