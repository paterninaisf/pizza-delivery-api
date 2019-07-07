    
const Pizza = require('../models/pizza');

exports.save = function (req, res) {
    let pizza = new Pizza();

    const { id, name, price, imageUrl } = req.body;

    pizza.name = name;
    pizza.id = id;
    pizza.imageUrl = imageUrl;
    pizza.price = price;

    pizza.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  };

  exports.all = function (req, res) {
    Pizza.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
  };

  exports.update = function (req, res) {
    const { id, update } = req.body;
    Pizza.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  }

  exports.delete = function (req, res) {
    const { id } = req.body;
    Pizza.findByIdAndRemove(id, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  }