WhatCanIDrink = function(age) {
        if ((age>=0) && (age< 14)){
                return "Toddy";
            } else if ((age>=14) && (age < 21)){
                return "Coke";
            } else if ((age >=21) && (age <130)){
                return "Beer";
        } else {
            return "Sorry. I can’t tell what drink because that age is incorrect!";
        };
}