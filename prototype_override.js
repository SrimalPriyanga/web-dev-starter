const user = {
  name: "Bob",
  city: "Nattandiya",
  getDetails: function () {
    console.log(`${this.name} from ${this.city} `);
  },
};

user.getDetails();

const me = {
  name: "Priyanga",
};

try {
  me.getDetails();
} catch (error) {
  console.log(error);
} finally {
  // Testing purpose only
  me.__proto__ = user;
  me.getDetails();
  console.log(me.__proto__);
}
