function esBisiesto(anio)
{
    if (anio % 400 === 0) {
        return true;
    }
    if (anio % 100 === 0) {
        return false;
    }
    return false;
}

export default esBisiesto;

