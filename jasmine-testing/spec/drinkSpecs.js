describe("Drink", function () {

    beforeEach(function () {
        drink = new WhatCanIDrink;
    });

    describe("What drink", function () {
    it("should return error for too small values", function () {
            var result = WhatCanIDrink(-1);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return error for too big values", function () {
            var result = WhatCanIDrink(130);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Toddy", function () {
            var result = WhatCanIDrink(0);
            expect(result).toBe("Toddy");
        });

        it("should return Toddy", function () {
            var result = WhatCanIDrink(13);
            expect(result).toBe("Toddy");
        });

        it("should return Coke", function () {
            var result = WhatCanIDrink(14);
            expect(result).toBe("Coke");
        });

        it("should return Coke", function () {
            var result = WhatCanIDrink(20);
            expect(result).toBe("Coke");
        });

        it("should return Beer", function () {
            var result = WhatCanIDrink(21);
            expect(result).toBe("Beer");
        });

        it("should return Beer", function () {
            var result = WhatCanIDrink(129);
            expect(result).toBe("Beer");
        });
    });
});