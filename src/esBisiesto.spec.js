import esBisiesto from "./esBisiesto";


describe("Es Bisiesto", () => {
    it("El 4 no deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(4)).toEqual(true); 
    });
    it("El 5 no deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(5)).toEqual(false);
    });
    it("El 2000 deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(2000)).toEqual(true);
    });
    it("El 1900 no deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(1900)).toEqual(false);
    });
    it("El 2008 deberia considerarse como año bisiesto", () => {
        expect(esBisiesto(2008)).toEqual(true);
    });
});

