// an 'enum' is a special 'class' that represents a group of elements (unchangeable variables)
// enum come into 2 flavours: string and numeric
// numeric enums - default
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.South;
console.log(currentDirection);
// numeric enums - initialized
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 1] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 2] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 3] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 4] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
var currentDirection1 = CardinalDirections1.South;
console.log(currentDirection1);
// numeric enums - initialized
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 744] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 965] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 357] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 468] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
var currentDirection2 = CardinalDirections2.South;
console.log(currentDirection2);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
// string enums
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North"] = "North";
    CardinalDirections3["East"] = "East";
    CardinalDirections3["South"] = "South";
    CardinalDirections3["West"] = "West";
})(CardinalDirections3 || (CardinalDirections3 = {}));
console.log(CardinalDirections3.North);
