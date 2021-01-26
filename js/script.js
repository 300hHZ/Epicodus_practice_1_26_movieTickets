let movies = ["Skooby Doo", "Batman", "Iron man", "Avengers", "I am legend", "Titanic", "Alladin", "Wonder Woman"]

function Ticket(name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
  this.price = 10;
}

Ticket.prototype.changePrice = function(ticket) {
  if (this.name === "Wonder Woman") {
    this.price += 3;
  }
  if (this.time >= 17) {
    this.price += 2;
  }
  if (this.age <= 10 && this.time <= 18) {
    this.price = 5;
  }

  if (this.age >= 65) {
    this.price = 7;
  }
  return this.price;
}

$(document).ready(function() {
  movies.forEach(function(movie) {
    $("#name").append(`<option value="${movie}">${movie}</option>`);
  });
  $("form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const time = parseInt($("input#time").val());
    const age = parseInt($("input#age").val());
    let newTicket = new Ticket(name, time, age);
    const price = newTicket.changePrice();
    $("#output").text("$" + price);
    $("form")[0].reset();
  });
});