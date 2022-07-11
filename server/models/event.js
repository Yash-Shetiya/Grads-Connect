class Event {
  constructor(
    title,
    description,
    guests,
    links,
    imgURL,
    dateTime,
    status,
    present,
    id
  ) {
    this.title = title;
    this.description = description;
    this.guests = guests;
    this.links = links;
    this.imgURL = imgURL;
    this.dateTime = dateTime;
    this.present = present;
    this.status = status;
    this.id = id;
  }
}

module.exports = Event;
