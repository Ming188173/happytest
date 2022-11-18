sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    let num = 0;
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowFlower : function () {
            num+=1;
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [num]);
            // var sMsg2 = oBundle.getText("您已成功实现", sRecipient);
            if(num%1===0){
                MessageToast.show(sMsg);
            }
            if(num%10===1&&num!==1){
                MessageToast.show("您已经为自己加了十点功德\n",sMsg);
            }
            if(num%7===1&&num!==1){
                MessageToast.show("您已经离梦想又近了一步！\n",sMsg);
            }

        }
    });
});
