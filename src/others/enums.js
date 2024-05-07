"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.ProductStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["CLIENT"] = "CLIENT";
})(Role || (exports.Role = Role = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Reserved"] = "Reserved";
    ProductStatus["Restocking"] = "Restocking";
    ProductStatus["Discontinued"] = "Discontinued";
    ProductStatus["InTransit"] = "In Transit";
    ProductStatus["Defective"] = "Defective";
    ProductStatus["OnSale"] = "On Sale";
    ProductStatus["UnderReview"] = "Under Review";
    ProductStatus["Withdrawn"] = "Withdrawn";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "CREDIT_CARD";
    PaymentMethod["DebitCard"] = "DEBIT_CARD";
    PaymentMethod["PayPal"] = "PAYPAL";
    PaymentMethod["BankTransfer"] = "BANK_TRANSFER";
    PaymentMethod["CashOnDelivery"] = "CASH_ON_DELIVERY";
    PaymentMethod["MobilePayment"] = "MOBILE_PAYMENT";
    PaymentMethod["Cryptocurrency"] = "CRYPTOCURRENCY";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
