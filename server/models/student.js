class Student {
  constructor(
    batch,
    name,
    department,
    email,
    linkedIn,
    clgPlacement,
    imageSrc,
    designation,
    organisation,
    placeOrganisation,
    areaWork,
    achievement,
    phoneNumber,
    prn
  ) {
    this.prn = prn;
    this.batch = batch;
    this.name = name;
    this.department = department;
    this.email = email;
    this.linkedIn = linkedIn;
    this.clgPlacement = clgPlacement;
    this.imageSrc = imageSrc;
    this.designation = designation;
    this.organisation = organisation;
    this.placeOrganisation = placeOrganisation;
    this.areaWork = areaWork;
    this.achievement = achievement;
    this.phoneNumber = phoneNumber;
  }
}

module.exports = Student;
