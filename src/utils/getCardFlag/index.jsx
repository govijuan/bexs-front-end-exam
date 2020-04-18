const getCardFlag = (cardNumber) => {
    //start without knowing the credit card type
    var result = "unknown";

    //first check for MasterCard
    if (/^5[1-5]/.test(cardNumber))
    {
        result = "mastercard";
    }

    //then check for Visa
    else if (/^4/.test(cardNumber))
    {
        result = "visa";
    }

    //then check for AmEx
    else if (/^3[47]/.test(cardNumber))
    {
        result = "amex";
    }

    return result;
}

export default getCardFlag