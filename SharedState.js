var Cat = (function () {
  var totalWeightOfCats = 0;
  var catsCount = 0;
  var constructor = function (name, weight) {
    if (name.length == 0 && weight.length == 0) {
      return new Error();
    }
    this.name = name;
    this.weight = weight;
    totalWeightOfCats += this.weight;
    catsCount += 1;

    Object.defineProperty(this, 'name', {
      get() {
        return this.name;
      },
      set(value) {
        this.name = value;
      }
    });

    Object.defineProperty(this, 'weight', {
      get() {
        return this.weight;
      },
      set(value) {
        totalWeightOfCats -= this.weight;
        this.weight = value;
        totalWeightOfCats += this.weight;
      }
    });
  }
  constructor.averageWeight = function () {
    return Math.round(totalWeightOfCats / catsCount);
  }
  return constructor;
}());
