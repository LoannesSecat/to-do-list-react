import { ThereAreData, SetItem, GetItem, RemoveItem } from "../utils/LocalStorageHandler";
import { arrTest, nameTest } from "../utils/Arr_test";

const AuxSetItem = () => SetItem({ name: nameTest, data: arrTest });

describe("| LocalStorageHandler.js test |", () => {
    describe("|=> ThereAreData function", () => {
        it("Result must be false", () => expect(ThereAreData(nameTest)).toBeFalsy());
        it("Result must be true", () => {
            AuxSetItem();
            expect(ThereAreData(nameTest)).toBeTruthy();
            RemoveItem(nameTest);
        });
    });

    describe("|=> GetItem function", () => {
        it("Return null", () => expect(GetItem(nameTest)).toBeNull());
        it("Return object", () => {
            AuxSetItem();
            expect(GetItem(nameTest)).toMatchObject({});
            RemoveItem(nameTest);
        });
    });

    describe("|=> SetItem function", () => {
        it("Validate that SetItem added data to localStorage", () => {
            AuxSetItem();
            expect(GetItem(nameTest)).toMatchObject({});
            RemoveItem(nameTest);
        });
    });

    describe("|=> RemoveItem function", () => {
        it("Validate if removeItem function deleted the item", () => {
            AuxSetItem();
            RemoveItem(nameTest);
            expect(GetItem(nameTest)).toBeNull();
        });
    });
});